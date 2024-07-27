import { zodResolver } from '@hookform/resolvers/zod';
import CloseIcon from '@mui/icons-material/Close';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  FormEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'zod';

import { FormInputText } from '@/components/FormInputText';
import { FormSelect } from '@/components/FormSelect';
import { useAccountContext } from '@/context/AccountContext';
import {
  CategoryData,
  useActivityCategories,
} from '@/services/activities/useActivityCategories';
import {
  TimeLengthData,
  useActivityTimeLengths,
} from '@/services/activities/useActivityTimeLengths';
import {
  ActivityData,
  useCreateActivity,
} from '@/services/activities/useCreateActivity';
import { useDeleteActivity } from '@/services/activities/useDeleteActivity';
import { useUpdateActivity } from '@/services/activities/useUpdateActivity';
import { uploadFileToS3 } from '@/services/aws/uploadFileToS3';
import theme from '@/styles/theme';

import ManageTagsModal from '../ManageTagsModal';

type Props = {
  toggleActivitiesFormModal: number;
  modalOpenAction: string | null;
  activityData: ActivityData | null;
  onActivitySaved: (newActivity: ActivityData) => void;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ActivitiesFormModal = (props: Props) => {
  const {
    toggleActivitiesFormModal,
    modalOpenAction,
    activityData,
    isModalOpen,
    setIsModalOpen,
  } = props;
  const [hideVideoLink, setHideVideoLink] = useState(false);
  const {
    account: { accountStatus },
  } = useAccountContext();

  const registerSchema = object({
    activityName: string({ required_error: 'Activity name is required' }).min(
      1,
      'Activity name is required'
    ),
    category: string({ required_error: 'Category is required' }).min(
      1,
      'Category is required'
    ),
    timeLength: string({ required_error: 'Time length is required' }).min(
      1,
      'Time length is required'
    ),
    description: string().nullable().optional(),
    videoLink: string().nullable().optional(),
    equipmentRequired: string().nullable().optional(),
    creditName: string().nullable().optional(),
    visibleToUsers: string().array().nullable().optional(),
  });

  const [activityFormData, setActivityFormData] = useState<null | ActivityData>(
    null
  );

  useEffect(() => {
    if (toggleActivitiesFormModal !== 1) {
      setIsModalOpen(true);
    }

    if (modalOpenAction === 'edit-activity') {
      setActivityFormData(activityData);
      methods.reset(activityData);
    } else {
      setActivityFormData(null);
      methods.reset({ visibleToUsers: [] });
    }
  }, [toggleActivitiesFormModal]);

  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const methods = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: activityData,
  });

  const { handleSubmit, register } = methods;

  const { data: categories } = useActivityCategories();
  const { data: timeLengths } = useActivityTimeLengths();

  const [showServerErrorAlert, setShowServerErrorAlert] =
    useState<boolean>(false);

  const createActivity = useCreateActivity();
  const updateActivity = useUpdateActivity();

  const onSubmitHandler: SubmitHandler<ActivityData> = async (values) => {
    let imageFileName = activityData?.imageFileName;
    const uploadedImage = uploadImage?.current?.files?.[0];

    if (uploadedImage) {
      const fileExtension = uploadedImage.name.split('.').slice(-1)[0];
      imageFileName = `${crypto.randomUUID()}.${fileExtension}`;
      await uploadFileToS3('images', uploadedImage, imageFileName);
    }

    let documentFileName = activityData?.documentFileName;
    const uploadedDocument = uploadDocument?.current?.files?.[0];
    if (uploadedDocument) {
      const fileExtension = uploadedDocument.name.split('.').slice(-1)[0];
      documentFileName = `${crypto.randomUUID()}.${fileExtension}`;
      await uploadFileToS3('documents', uploadedDocument, documentFileName);
    }

    let activityDataToSubmit: ActivityData = {
      ...activityData,
      ...values,
      tags: activityTags,
      imageFileName,
      documentFileName,
    };

    if (modalOpenAction === 'create-activity') {
      createActivity.mutate(
        { ...activityDataToSubmit },
        {
          onSuccess: (res) => {
            const newActivity = res.data;
            setIsModalOpen(false);
            props.onActivitySaved(newActivity);
          },
          onError: (err) => {
            setShowServerErrorAlert(true);
          },
        }
      );
    } else {
      updateActivity.mutate(
        { ...activityDataToSubmit },
        {
          onSuccess: (res) => {
            const newActivity = res.data;
            setIsModalOpen(false);
            props.onActivitySaved(newActivity);
          },
          onError: (err) => {
            setShowServerErrorAlert(true);
          },
        }
      );
    }
  };

  const onFormSubmitError = (err: any, event) =>
    console.log('onFormSubmitError', err, event);

  const deleteActivity = useDeleteActivity();

  const onDeleteActivity = () => {
    if (window.confirm('Are you sure you want to delete this activity?')) {
      const activityId = activityData?.activityId;
      if (activityId) {
        deleteActivity.mutate(activityId, {
          onSuccess: (res) => {
            const newActivity = res.data;
            setIsModalOpen(false);
            props.onActivitySaved(newActivity);
          },
          onError: (err) => {
            setShowServerErrorAlert(true);
          },
        });
      } else {
        setShowServerErrorAlert(true);
      }
    }
  };

  const [activityTags, setActivityTags] = useState<string[] | null>(null);

  useEffect(() => {
    if (activityData?.tags) {
      setActivityTags(activityData.tags);
    }
  }, [activityData]);

  const handleTagsEdit = (tags: string[]) => {
    setActivityTags(tags);
    setToggleTagsModal(1);
  };

  const onCloseManageTagsModal = () => {
    setToggleTagsModal(1);
  };

  const [toggleTagsModal, setToggleTagsModal] = useState(1);

  useEffect(() => {
    setToggleTagsModal(1);
  }, []);

  let uploadImage = useRef<HTMLInputElement | null>(null);
  let uploadDocument = useRef<HTMLInputElement | null>(null);
  const handleUploadButtonClick = (
    ref: MutableRefObject<null | HTMLElement>
  ) => {
    if (ref?.current) {
      ref.current.click();
    }
  };

  const [uploadedImageName, setUploadedImageName] = useState<string | null>(
    null
  );
  const [uploadedDocumentName, setUploadedDocumentName] = useState<
    string | null
  >(null);

  const handleFileUpload = (event: FormEvent<HTMLInputElement>) => {
    const { id, files } = event.target as HTMLInputElement;
    if (id === 'imageUpload' && files?.[0]?.name) {
      setUploadedImageName(files[0].name);
    }

    if (id === 'documentUpload' && files?.[0]?.name) {
      setUploadedDocumentName(files[0].name);
    }
  };

  return (
    <Dialog
      open={isModalOpen}
      fullScreen={shouldDisplayFullScreen}
      className="activities-form-modal-wrapper"
    >
      <ManageTagsModal
        toggleManageTagsModal={toggleTagsModal}
        activityTags={activityTags}
        onTagsEdit={handleTagsEdit}
        onCloseManageTagsModal={onCloseManageTagsModal}
      />
      <CloseIcon
        onClick={() => setIsModalOpen(false)}
        style={{
          position: 'absolute',
          right: '1.5rem',
          top: '1.5rem',
          cursor: 'pointer',
        }}
      />

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmitHandler, onFormSubmitError)}
        sx={{
          margin: '3rem',
        }}
      >
        {showServerErrorAlert && (
          <Alert
            icon={false}
            severity="error"
            sx={{ position: 'relative', my: '1rem' }}
            onClose={() => setShowServerErrorAlert(false)}
          >
            Something went wrong - please try again
          </Alert>
        )}

        <Grid container justifyContent="space-between">
          <Typography variant="h1">
            {modalOpenAction === 'create-activity'
              ? 'Create activity'
              : 'Edit activity'}
          </Typography>

          {modalOpenAction === 'edit-activity' && (
            <Button onClick={() => onDeleteActivity()}>
              <img
                src="/assets/icons/ph_trash.svg"
                alt="Delete activity icon"
              />
            </Button>
          )}
        </Grid>

        <FormProvider {...methods}>
          <Grid container spacing={{ sm: 0, md: 2 }}>
            <Grid
              container
              spacing={{ sm: 0, md: 0 }}
              justifyContent="space-between"
              sx={{ mt: '1.5rem', pl: '1rem' }}
            >
              <Grid
                item
                sx={{ position: 'relative', top: '-0.5rem', cursor: 'pointer' }}
              >
                <InputLabel
                  sx={{
                    transform: 'translate(0, -1.5px) scale(0.75)', // match default Mui form label size
                    position: 'relative',
                    top: '0.1rem',
                  }}
                >
                  Thumbnail
                </InputLabel>
                <input
                  type="file"
                  id="imageUpload"
                  ref={uploadImage}
                  onChange={handleFileUpload}
                  hidden
                />
                <Grid
                  sx={{
                    width: '9.5rem',
                    height: '9.5rem',
                    border: '1px dashed #DDDDDD',
                    borderRadius: '4px',
                  }}
                  container
                  justifyContent="center"
                  alignItems="center"
                  onClick={() => handleUploadButtonClick(uploadImage)}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#ACACAC',
                      maxWidth: '9.5rem',
                      overflowWrap: 'break-word',
                      textAlign: 'center',
                    }}
                  >
                    {uploadedImageName ? uploadedImageName : 'Upload image'}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={{ sm: 0, md: 2 }}>
                <Grid item xs={12} sm={12} md={12}>
                  <FormInputText
                    name="activityName"
                    label="Activity name"
                    value={activityFormData?.activityName}
                    type="text"
                    required={true}
                    fullWidth
                    sx={{ mb: 3 }}
                  ></FormInputText>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <FormSelect
                    name="category"
                    label="Category"
                    value={activityFormData?.category || ''}
                    defaultValue={''}
                    type="text"
                    required
                    fullWidth
                    sx={{ mb: 3 }}
                  >
                    {categories?.length &&
                      categories.map((category: CategoryData) => (
                        <MenuItem
                          value={category.value}
                          key={category.activityCategoryId}
                        >
                          {category.label}
                        </MenuItem>
                      ))}
                  </FormSelect>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <FormSelect
                    name="timeLength"
                    label="Time length"
                    value={activityFormData?.timeLength || ''}
                    defaultValue={''}
                    type="text"
                    required
                    fullWidth
                    sx={{ mb: 3 }}
                  >
                    {timeLengths?.length &&
                      timeLengths.map((timeLength: TimeLengthData) => (
                        <MenuItem
                          value={timeLength.value}
                          key={timeLength.activityTimeLengthId}
                        >
                          {timeLength.label}
                        </MenuItem>
                      ))}
                  </FormSelect>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <FormInputText
                name="description"
                label="Description"
                defaultValue={activityFormData?.description}
                type="text"
                multiline
                rows={4}
                required={accountStatus === 'admin' ? false : true}
                fullWidth
                sx={{ mb: 3 }}
              ></FormInputText>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={hideVideoLink}
                      onChange={(e) => setHideVideoLink(e.target.checked)}
                    />
                  }
                  label="Doesn't contain video"
                />
              </FormGroup>
            </Grid>

            {!hideVideoLink && (
              <Grid item xs={12} sm={12} md={12}>
                <FormInputText
                  name="videoLink"
                  label="Video link"
                  placeholder="youtu.be/xxx-xxx"
                  value={activityFormData?.videoLink || ''}
                  type="text"
                  fullWidth
                  sx={{ mb: 3 }}
                ></FormInputText>
              </Grid>
            )}

            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                name="equipmentRequired"
                label="Equipment required"
                placeholder="e.g. Chair and Pompoms"
                value={activityFormData?.equipmentRequired || ''}
                type="text"
                fullWidth
                sx={{ mb: 3 }}
              ></FormInputText>
            </Grid>

            <Grid item xs={6} sm={6} md={3}>
              <Button
                variant="outlined"
                name="Manage tags"
                fullWidth
                onClick={() => {
                  setToggleTagsModal(Math.random());
                }}
                sx={{
                  py: '0.8rem',
                  mt: '1rem',
                  ml: '1rem',
                  width: '210px',
                  borderRadius: 50,
                }}
              >
                Manage tags
              </Button>
            </Grid>

            <Grid item xs={6} sm={6} md={3}>
              <input
                type="file"
                id="documentUpload"
                ref={uploadDocument}
                onChange={handleFileUpload}
                hidden
              />
              <Button
                variant={uploadedDocumentName ? 'text' : 'outlined'}
                name="Upload file"
                fullWidth
                onClick={() => handleUploadButtonClick(uploadDocument)}
                sx={{
                  py: '0.8rem',
                  mt: '1rem',
                  ml: '1rem',
                  width: '210px',
                  borderRadius: 50,
                }}
              >
                {uploadedDocumentName ? null : 'Upload file'}
                <Typography
                  variant="helper"
                  sx={{ maxWidth: '210px', overflowWrap: 'break-word' }}
                >
                  {uploadedDocumentName ? uploadedDocumentName : null}
                </Typography>
              </Button>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                name="creditName"
                label="Credit"
                placeholder="e.g. Zeezy Qureshi"
                value={activityFormData?.creditName || ''}
                type="text"
                fullWidth
                sx={{ mb: 3 }}
              ></FormInputText>
            </Grid>

            <Grid item xs={6} sm={6} md={3} sx={{ mt: '2rem' }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={activityFormData?.visibleToUsers?.includes(
                        'standard'
                      )}
                    />
                  }
                  {...register('visibleToUsers')}
                  label={
                    <Typography variant="helper">
                      Visible to Standard user
                    </Typography>
                  }
                  value={'standard'}
                />
              </FormGroup>
            </Grid>

            <Grid item xs={6} sm={6} md={3} sx={{ mt: '2rem' }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={activityFormData?.visibleToUsers?.includes(
                        'premium'
                      )}
                    />
                  }
                  {...register('visibleToUsers')}
                  label={
                    <Typography variant="helper">
                      Visible to Premium user
                    </Typography>
                  }
                  value={'premium'}
                />
              </FormGroup>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            name="submit"
            fullWidth
            type="submit"
            sx={{
              py: '0.8rem',
              mt: '1rem',
              width: '210px',
              borderRadius: 50,
            }}
          >
            {modalOpenAction === 'edit-activity' ? 'Save' : 'Create now'}
          </Button>

          <Button
            variant="text"
            name="cancel"
            fullWidth
            onClick={() => setIsModalOpen(false)}
            sx={{
              py: '0.8rem',
              mt: '1rem',
              ml: '1rem',
              width: '210px',
              borderRadius: 50,
            }}
          >
            Cancel
          </Button>
        </FormProvider>
      </Box>
    </Dialog>
  );
};

export default ActivitiesFormModal;
