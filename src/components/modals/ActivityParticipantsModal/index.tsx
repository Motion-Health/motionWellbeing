import { useEffect, useState } from "react";

import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Dialog,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

import theme from "@/styles/theme";
import { useUpdateCompletedActivity } from "@/services/activities/useUpdateCompletedActivity";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormInputText } from "@/components/FormInputText";
import { useActivityParticipants } from "@/services/activities/useActivityParticipants";

type Props = {
  toggleParticipantsModalAction: boolean;
  activityCompletedId: string | null;
  onCloseParticipantsModal: (openShareModal: boolean | null) => void;
};

type Inputs = {
  participants: string;
};

export const ActivityParticipantsModal = ({
  toggleParticipantsModalAction,
  activityCompletedId,
  onCloseParticipantsModal,
}: Props) => {
  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const methods = useForm({});

  const { handleSubmit } = methods;

  const updateCompletedActivity = useUpdateCompletedActivity();

  const onSubmitHandler: SubmitHandler<Inputs> = async () => {
    if (activityCompletedId) {
      updateCompletedActivity.mutate(
        {
          activityCompletedId,
          participants,
        },
        {
          onSuccess: () => {
            onCloseParticipantsModal(true);
          },
          onError: () => {
            onCloseParticipantsModal(true);
          },
        },
      );
    } else {
      onCloseParticipantsModal(true);
    }
  };

  const onFormSubmitError = (err: any) => console.log("err", err);

  const { data: existingParticipants } = useActivityParticipants();

  const [autocompleteOptions, setAutocompleteOptions] = useState<string[]>([]);
  useEffect(() => {
    if (existingParticipants?.participants?.length) {
      setAutocompleteOptions(existingParticipants.participants);
    }
  }, [existingParticipants]);

  const [inputValue, setInputValue] = useState<string>("");
  const [participants, setParticipants] = useState<any[]>([]);

  useEffect(() => {
    if (autocompleteOptions?.length) {
      const updatedList = autocompleteOptions?.filter(
        (participant) => !participants.includes(participant),
      );
      setAutocompleteOptions(updatedList);
    }
  }, [participants]);

  return (
    <Dialog
      open={toggleParticipantsModalAction}
      fullScreen={shouldDisplayFullScreen}
      className="activity-participants-modal-wrapper"
    >
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmitHandler, onFormSubmitError)}
        sx={{
          margin: "3rem",
          width: { md: "40rem" },
        }}
      >
        <Typography variant="h1">Participant(s)</Typography>

        <FormProvider {...methods}>
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
                  const newParticipant = newInputValue.split(",");

                  if (newParticipant.length > 1) {
                    setParticipants(
                      participants
                        .concat(newParticipant) // add new participant
                        .map((participant) => participant.trim()) // trim whitespace
                        .filter((participant) => participant), // remove empty values
                    );

                    setInputValue("");
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

          <Grid container>
            <Button
              variant="contained"
              name="submit"
              fullWidth
              type="submit"
              sx={{
                py: "0.8rem",
                mt: "1rem",
                width: "210px",
                borderRadius: 50,
              }}
            >
              Assign participant(s)
            </Button>

            <Button
              variant="text"
              name="cancel"
              fullWidth
              onClick={() => onCloseParticipantsModal(false)}
              sx={{
                mt: "1rem",
                width: "110px",
                borderRadius: 50,
              }}
            >
              Skip
            </Button>
          </Grid>
        </FormProvider>
      </Box>
    </Dialog>
  );
};
