import { zodResolver } from '@hookform/resolvers/zod';
import CloseIcon from '@mui/icons-material/Close';
import {
  Alert,
  Box,
  Button,
  Dialog,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery,
} from '@mui/material';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'zod';
import * as z from 'zod';

import { FormInputText } from '@/components/FormInputText';
import { FormSelect } from '@/components/FormSelect';
import { useAccountContext } from '@/context/AccountContext';
import { Account } from '@/models/Account';
import { useAddServiceProvider } from '@/services/account/useAddServiceProvider';
import { useRequestNewPassword } from '@/services/auth/useRequestNewPassword';
import { useUpdateAccount } from '@/services/auth/useUpdateAccount';
import theme from '@/styles/theme';

type Props = {
  toggleServiceProviderModal: number;
  modalOpenAction: string | null;
  serviceProviderData: Account | null;
};

const ServiceProviderDetailsModal = (props: Props) => {
  const { toggleServiceProviderModal, modalOpenAction, serviceProviderData } =
    props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [serviceProviderFormData, setServiceProviderFormData] =
    useState<Account | null>(null);
  const {
    account: { accountStatus },
  } = useAccountContext();

  let registerSchema = object({
    serviceProviderName: z
      .union([z.string(), z.null()])
      .transform((val) => val ?? '')
      .refine(
        (value) => {
          return value.length >= 1;
        },
        { message: 'Service provider name is required' }
      ),
    mainContactName: z
      .union([z.string(), z.null()])
      .transform((val) => val ?? '')
      .refine(
        (value) => {
          return value.length >= 1;
        },
        { message: 'Name of main contact is required' }
      ),
    mainContactRole: z
      .union([z.string(), z.null()])
      .transform((val) => val ?? '')
      .refine(
        (value) => {
          return value.length >= 1;
        },
        { message: 'Main contact role is required' }
      ),
    phoneNumber: z
      .union([z.string(), z.null()])
      .transform((val) => val ?? '')
      .refine(
        (value) => {
          return value.length >= 1;
        },
        { message: 'Phone number is required' }
      ),
    city: string().nullable().optional(),
    email: string({ required_error: 'Email address is required' }).email(
      'Please enter a valid email address'
    ),
    isPartOfAGroup: string().nullable().optional(),
    groupName: string().nullable().optional(),
    accountStatus: string({ required_error: 'Account status is required' }),
  });

  if (accountStatus === 'admin') {
    registerSchema = object({
      email: string({ required_error: 'Email address is required' }).email(
        'Please enter a valid email address'
      ),
      serviceProviderName: z.union([z.string(), z.null()]).optional(),
      mainContactName: z.union([z.string(), z.null()]).optional(),
      mainContactRole: z.union([z.string(), z.null()]).optional(),
      phoneNumber: z.union([z.string(), z.null()]).optional(),
      city: z.union([z.string(), z.null()]).optional(),
      isPartOfAGroup: z.union([z.string(), z.null()]).optional(),
      groupName: z.union([z.string(), z.null()]).optional(),
      accountStatus: z.union([z.string(), z.null()]).optional(),
    });
  }

  useEffect(() => {
    if (modalOpenAction === 'edit-service-provider') {
      setServiceProviderFormData(serviceProviderData);
      methods.reset(serviceProviderData);
    } else {
      setServiceProviderFormData(null);
      methods.reset();
    }

    if (toggleServiceProviderModal !== 1) {
      setIsModalOpen(true);
    }
  }, [toggleServiceProviderModal]);

  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const methods = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: serviceProviderData,
  });

  const { handleSubmit, register, watch, setError } = methods;

  const [displayGroupNameField, setDisplayGroupNameField] = useState(false);
  const [groupDropdownWidth, setGroupDropdownWidth] = useState(12);

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.isPartOfAGroup === 'Yes') {
        setDisplayGroupNameField(true);
        setGroupDropdownWidth(6);
      } else {
        setDisplayGroupNameField(false);
        setGroupDropdownWidth(12);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const [showServerErrorAlert, setShowServerErrorAlert] =
    useState<boolean>(false);

  const requestNewPassword = useRequestNewPassword();

  const onResetPassword = () => {
    const { email } = serviceProviderFormData;

    requestNewPassword.mutate(
      { email },
      {
        onSuccess: (res) => {
          setIsModalOpen(false);
          router.push(
            {
              pathname: '/wellbeing/community',
              query: { passwordReset: email },
            },
            '/wellbeing/community'
          );
        },
        onError: (err) => {
          setShowServerErrorAlert(true);
        },
      }
    );
  };

  const updateAccount = useUpdateAccount();
  const addServiceProvider = useAddServiceProvider();

  const onSubmitHandler: SubmitHandler<Account> = async (values) => {
    if (serviceProviderFormData?.accountId) {
      const { accountId } = serviceProviderFormData;
      updateAccount.mutate(
        { ...values, accountId },
        {
          onSuccess: (res) => {
            const { serviceProviderName } = res.data;
            setIsModalOpen(false);
            router.push(
              {
                pathname: '/wellbeing/community',
                query: { accountUpdated: serviceProviderName },
              },
              '/wellbeing/community'
            );
          },
          onError: (err) => {
            if (err?.response?.data?.code === 23505) {
              setError('email', {
                type: 'custom',
                message:
                  'This email address is already registered. Please use a different email address.',
              });
            } else {
              setShowServerErrorAlert(true);
            }
          },
        }
      );
    } else {
      addServiceProvider.mutate(
        { ...values },
        {
          onSuccess: (res) => {
            const { serviceProviderName } = res.data;
            setIsModalOpen(false);
            router.push(
              {
                pathname: '/wellbeing/community',
                query: { accountCreated: serviceProviderName },
              },
              '/wellbeing/community'
            );
          },
          onError: (err) => {
            if (err?.response?.data?.code === 23505) {
              setError('email', {
                type: 'custom',
                message:
                  'This email address is already registered. Please log in or create a new account.',
              });
            } else {
              setShowServerErrorAlert(true);
            }
          },
        }
      );
    }
  };

  const onFormSubmitError = (err: any) => console.log('onFormSubmitError', err);

  return (
    <Dialog
      open={isModalOpen}
      fullScreen={shouldDisplayFullScreen}
      className="service-provider-details-modal-wrapper"
    >
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

        <Typography variant="h1">Service provider details</Typography>

        <FormProvider {...methods}>
          <Grid container spacing={{ sm: 0, md: 2 }}>
            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                name="serviceProviderName"
                label="Name of service provider"
                type="text"
                defaultValue={
                  serviceProviderFormData?.serviceProviderName || ''
                }
                required={accountStatus === 'admin' ? false : true}
                fullWidth
                sx={{ mb: 3 }}
              ></FormInputText>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                name="mainContactName"
                label="Name of main contact"
                value={serviceProviderFormData?.mainContactName}
                type="text"
                required={accountStatus === 'admin' ? false : true}
                fullWidth
                sx={{ mb: 3 }}
              ></FormInputText>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                name="mainContactRole"
                label="Main contact role"
                value={serviceProviderFormData?.mainContactRole}
                type="text"
                required={accountStatus === 'admin' ? false : true}
                fullWidth
                sx={{ mb: 3 }}
              ></FormInputText>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                name="phoneNumber"
                label="Telephone number"
                value={serviceProviderFormData?.phoneNumber}
                type="number"
                required={accountStatus === 'admin' ? false : true}
                fullWidth
                sx={{ mb: 3 }}
              ></FormInputText>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                name="city"
                label="City"
                value={serviceProviderFormData?.city}
                type="text"
                fullWidth
                sx={{ mb: 3 }}
              ></FormInputText>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                name="email"
                label="Email"
                value={serviceProviderFormData?.email}
                type="text"
                required
                fullWidth
                sx={{ mb: 3 }}
              ></FormInputText>
            </Grid>

            <Grid item xs={12} sm={12} md={groupDropdownWidth}>
              <FormSelect
                name="isPartOfAGroup"
                label="Is your service provider part of a group?"
                value={serviceProviderFormData?.isPartOfAGroup || ''}
                defaultValue={''}
                type="text"
                fullWidth
                sx={{ mb: 3 }}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="Not sure">Not sure</MenuItem>
              </FormSelect>
            </Grid>

            {displayGroupNameField && (
              <Grid item xs={12} sm={12} md={6}>
                <FormInputText
                  name="groupName"
                  label="Name of group"
                  value={serviceProviderFormData?.groupName}
                  type="text"
                  fullWidth
                  sx={{ mb: 3 }}
                ></FormInputText>
              </Grid>
            )}
          </Grid>

          <Grid
            container
            direction="row-reverse"
            justifyContent="space-between"
            alignContent="center"
          >
            {serviceProviderFormData?.accountId && (
              <Grid>
                <Button
                  variant="outlined"
                  name="resetPassword"
                  fullWidth
                  onClick={() => onResetPassword()}
                  sx={{
                    py: '0.8rem',
                    width: '210px',
                    borderRadius: 50,
                  }}
                >
                  Reset password
                </Button>
              </Grid>
            )}

            {accountStatus === 'admin' &&
              serviceProviderFormData?.accountStatus !== 'admin' && (
                <Grid>
                  <RadioGroup
                    row
                    aria-label="accountStatus"
                    name="accountStatus"
                    defaultValue={
                      serviceProviderFormData?.accountStatus || 'standard'
                    }
                  >
                    <FormControlLabel
                      value="noAccess"
                      label={
                        <Typography variant="helper">No access</Typography>
                      }
                      control={<Radio />}
                      {...register('accountStatus')}
                    />
                    <FormControlLabel
                      value="standard"
                      label={<Typography variant="helper">Standard</Typography>}
                      control={<Radio />}
                      {...register('accountStatus')}
                    />
                    <FormControlLabel
                      value="premium"
                      label={<Typography variant="helper">Premium</Typography>}
                      control={<Radio />}
                      {...register('accountStatus')}
                    />

                    <FormControlLabel
                      value="group"
                      label={<Typography variant="helper">Group</Typography>}
                      control={<Radio />}
                      {...register('accountStatus')}
                    />
                  </RadioGroup>
                </Grid>
              )}
          </Grid>

          <Button
            variant="contained"
            name="saveChanges"
            fullWidth
            type="submit"
            sx={{
              py: '0.8rem',
              mt: '1rem',
              width: '210px',
              borderRadius: 50,
            }}
          >
            Save changes
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

export default ServiceProviderDetailsModal;
