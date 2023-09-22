import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormInputText } from '@/components/FormInputText';
import { FormSelect } from '@/components/FormSelect';
import { useGetAccount } from '@/services/account/useGetAccount';
import { useActivityParticipants } from '@/services/activities/useActivityParticipants';
import { useUpdateCompletedActivity } from '@/services/activities/useUpdateCompletedActivity';

type Props = {
  toggleStepperModalAction: boolean;
  activityCompletedId: string | null;
  onCloseStepperModal: (shouldDisplayStepperModal: boolean) => void;
};

type Inputs = {
  participants: string;
};

export const ActivityStepper = ({
  toggleStepperModalAction,
  activityCompletedId,
  onCloseStepperModal,
}: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm();
  const updateCompletedActivity = useUpdateCompletedActivity();
  const { data: existingParticipants } = useActivityParticipants();
  const [autocompleteOptions, setAutocompleteOptions] = useState<string[]>([]);
  useEffect(() => {
    if (existingParticipants?.participants?.length) {
      setAutocompleteOptions(existingParticipants.participants);
    }
  }, [existingParticipants]);
  const { data: account } = useGetAccount();

  const [inputValue, setInputValue] = useState<string>('');
  const [participants, setParticipants] = useState<any[]>([]);

  useEffect(() => {
    if (autocompleteOptions?.length) {
      const updatedList = autocompleteOptions?.filter(
        (participant) => !participants.includes(participant)
      );
      setAutocompleteOptions(updatedList);
    }
  }, [participants]);
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const onStepperModalClose = () => {
    const data = methods.getValues(); // Getting form values
    const { wouldDoAgain, comment } = data;
    if (activityCompletedId && data && wouldDoAgain && comment) {
      updateCompletedActivity.mutate(
        {
          activityCompletedId,
          wouldDoAgain,
          comment,
          participants,
        },
        {
          onSuccess: (res) => {
            if (res) {
              onCloseStepperModal(false);
            }
          },
        }
      );
    } else {
      onCloseStepperModal(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <Dialog open={!!toggleStepperModalAction}>
        <DialogTitle>Activity Details</DialogTitle>
        <DialogContent>
          <Stepper activeStep={activeStep}>
            <Step>
              <StepLabel>Add Comment</StepLabel>
            </Step>
            <Step>
              <StepLabel>Add Participants</StepLabel>
            </Step>
            <Step>
              <StepLabel>Share</StepLabel>
            </Step>
          </Stepper>
          {activeStep === 0 && <Comments />}
          {activeStep === 1 && (
            <ParticipantsStep
              participants={participants}
              setParticipants={setParticipants}
              autocompleteOptions={autocompleteOptions}
              setAutocompleteOptions={setAutocompleteOptions}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          )}
          {activeStep === 2 && (
            <ShareFB
              handleNext={handleNext}
              account={account}
              handleBack={handleBack}
            />
          )}
        </DialogContent>
        <DialogActions>
          {activeStep !== 0 && activeStep !== 2 && (
            <Button variant="contained" color="primary" onClick={handleBack}>
              Back
            </Button>
          )}
          {activeStep !== 2 && (
            <>
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
              <Button
                onClick={() => {
                  onStepperModalClose();
                }}
              >
                Save and Exit
              </Button>
            </>
          )}

          {activeStep === 2 && (
            <>
              <Button onClick={handleBack}>Back</Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  onStepperModalClose();
                }}
              >
                Save and Exit
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </FormProvider>
  );
};

const ShareFB = ({ handleNext, handleBack, account }) => {
  return (
    <>
      <Box
        sx={{
          margin: '3rem',
          textAlign: 'center',
          width: { md: '40rem' },
        }}
      >
        <Typography variant="h1">Share to your Facebook</Typography>
        <Typography
          variant="p"
          sx={{
            marginBottom: '0.5rem',
          }}
        >
          Update Your Community by Sharing to
          {account?.serviceProviderName
            ? ` ${account?.serviceProviderName}'s `
            : ' '}
          Facebook Page
        </Typography>

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
          onClick={() => {
            window.open(
              'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmotionexercise.co.uk',
              'newwindow',
              'width=300,height=250'
            );
          }}
        >
          Share
        </Button>
      </Box>
    </>
  );
};

const Comments = () => {
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{
          margin: '3rem',
          width: { md: '40rem' },
        }}
      >
        <Grid container spacing={{ sm: 0, md: 2 }}>
          <Grid item xs={12} sm={12} md={6}>
            <FormSelect
              name="wouldDoAgain"
              label="Would you do the activity again?"
              defaultValue={''}
              placeholder={'Please select'}
              type="text"
              fullWidth
              sx={{ mb: 3 }}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </FormSelect>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <FormInputText
              name="comment"
              label="Add a comment"
              placeholder=""
              type="text"
              fullWidth
              sx={{ mb: 3 }}
            ></FormInputText>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const ParticipantsStep = ({
  participants,
  setParticipants,
  autocompleteOptions,
  inputValue,
  setInputValue,
}) => {
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{
          margin: '3rem',
          width: { md: '40rem' },
        }}
      >
        <Grid container spacing={{ sm: 0, md: 2 }}>
          <Grid item xs={12} sm={12} md={12}>
            <Autocomplete
              multiple
              freeSolo
              value={participants}
              inputValue={inputValue}
              onChange={(event, newValue) => {
                setParticipants(newValue);
              }}
              onInputChange={(event, newInputValue) => {
                const newParticipant = newInputValue.split(',');

                if (newParticipant.length > 1) {
                  setParticipants(
                    participants
                      .concat(newParticipant) // add new participant
                      .map((participant) => participant.trim()) // trim whitespace
                      .filter((participant) => participant) // remove empty values
                  );

                  setInputValue('');
                } else {
                  setInputValue(newInputValue);
                }
              }}
              options={autocompleteOptions}
              getOptionLabel={(option) => option}
              renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                  <Chip
                    label={option}
                    size="medium"
                    {...getTagProps({ index })}
                    className="autocomplete-selected-options"
                  />
                ))
              }
              renderInput={(params) => (
                <FormInputText
                  {...params}
                  name="participants"
                  label="Participants name(s)"
                  placeholder=""
                  type="search"
                  fullWidth
                  multiline
                ></FormInputText>
              )}
              open={inputValue.length > 1}
              renderOption={(props, option, state) => {
                return <li {...props}>{option}</li>;
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
