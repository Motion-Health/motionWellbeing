import { useEffect, useState, ChangeEvent } from "react";

import {
  Box,
  Button,
  Dialog,
  FormLabel,
  Grid,
  Select,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
  MenuItem,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/en-gb";

import CloseIcon from "@mui/icons-material/Close";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Event } from "@/models/Event";

import theme from "@/styles/theme";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useCreateEvent } from "@/services/planner/useCreateEvent";
import { useAccountContext } from "@/context/AccountContext";
import { useUpdateEvent } from "@/services/planner/useUpdateEvent";
import { useListActivities } from "@/services/activities/useListActivities";
import { useDeleteEvent } from "@/services/planner/useDeleteEvent"

type Props = {
  toggleScheduleModal: number;
  modalOpenAction: 'add-event' | 'edit-event' | null;
  editEventData: Event | null;
  addEventStartDate: Dayjs | null;
  onCloseScheduleModal: () => void;
};

const ScheduleModal = ({
  toggleScheduleModal,
  modalOpenAction,
  editEventData,
  addEventStartDate,
  onCloseScheduleModal,
}: Props) => {
  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const errorTextColour = theme.palette.error.main

  const {
    account: { accountId },
  } = useAccountContext();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [eventData, setEventData] = useState<null | Event>(null);

  const { data: activitiesData } = useListActivities();

  const [startDateValue, setStartDateValue] = useState<Dayjs | null>(null)
  const [endDateValue, setEndDateValue] = useState<Dayjs | null>(null)

  const hideValidationErrors = () => {
    setShowTitleError(false)
    setShowStartError(false)
    setShowEndError(false)
  }

  const resetFormData = () => {
    setEventData(null)

    setStartDateValue(null)
    setEndDateValue(null)

    hideValidationErrors()
  }

  useEffect(() => {
    resetFormData()

    if (modalOpenAction === "add-event") {
      setPopulateEventTitle("")
      resetFormData()
      if (addEventStartDate) {
        setStartDateValue(addEventStartDate)
        setEventData({
          ...editEventData,
          start: dayjs(addEventStartDate)
        })
      }
    }

    if (modalOpenAction === 'edit-event') {
      setPopulateEventTitle(editEventData?.title)

      if (editEventData?.start) {
        setStartDateValue(dayjs(editEventData.start))
      }

      if (editEventData?.end) {
        setEndDateValue(dayjs(editEventData.end))
      }

      setEventData({
        ...editEventData,
        start: dayjs(editEventData?.start),
        end: dayjs(editEventData?.end),
      })
    }

    if (toggleScheduleModal !== 1) {
      setIsModalOpen(true);
    }
  }, [toggleScheduleModal]);

  useEffect(() => {
    if (!isModalOpen) {
      onCloseScheduleModal();
    }
  }, [isModalOpen])

  const methods = useForm({
    defaultValues: eventData,
  });

  const { handleSubmit, control } = methods;

  const [populateEventTitle, setPopulateEventTitle] = useState<string>("");

  const handleSelectActivityChange = (event: SelectChangeEvent) => {
    const selectedEventTitle = event.target.value;
    setPopulateEventTitle(selectedEventTitle);

    setEventData({
      ...eventData,
      title: selectedEventTitle,
    });
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value
    setPopulateEventTitle(newTitle);

    setEventData({
      ...eventData,
      title: newTitle,
    });
  };

  const createEvent = useCreateEvent();
  const updateEvent = useUpdateEvent();

  const [showTitleError, setShowTitleError] = useState<boolean>(false)
  const [showStartError, setShowStartError] = useState<boolean>(false)
  const [showEndError, setShowEndError] = useState<boolean>(false)
  
  const validateForm = (formSubmitData: Event) => {
    hideValidationErrors()
    
    if (!formSubmitData?.title) {
      setShowTitleError(true)
    }
    
    if (!formSubmitData?.start) {
      setShowStartError(true)
    }

    if (!formSubmitData?.end) {
      setShowEndError(true)
    }
  }
  
  const onSubmitHandler = (values: Event) => {
    const newEventData = {
      ...eventData,
      ...values,
      start: eventData?.start,
      end: eventData?.end,
      accountId,
    };

    validateForm(newEventData)
    
    if (!newEventData.title || !newEventData.start || !newEventData.end) {
      // prevent submit
      return null
    }

    if (!eventData?.eventId) {
      createEvent.mutate(newEventData, {
        onSuccess: (res) => {
          setIsModalOpen(false);
        },
        onError: (err) => {
          setIsModalOpen(false);
        },
      });
    } else {
      updateEvent.mutate(newEventData, {
        onSuccess: (res) => {
          setIsModalOpen(false);
        },
        onError: (err) => {
          setIsModalOpen(false);
        },
      });
    }
  };

  const onStartDateChange = (date: Dayjs) => {
    setStartDateValue(date)

    const startDate = dayjs(date).format("YYYY-MM-DD HH:mm");

    setEventData({
      ...eventData,
      start: startDate,
    });
  };

  const onEndDateChange = (date: any) => {
    setEndDateValue(date)

    const endDate = dayjs(date).format("YYYY-MM-DD HH:mm");
  
    setEventData({
      ...eventData,
      end: endDate,
    });
  };

  const deleteEvent = useDeleteEvent()

  const handleDeleteEvent = () => {
    deleteEvent.mutate(eventData?.eventId, {
      onSuccess: (res) => {
        setIsModalOpen(false)
        onCloseScheduleModal()
      },
      onError: (err) => {
        setIsModalOpen(false)
        onCloseScheduleModal()
      },
    });
  }

  return (
    <Dialog
      open={isModalOpen}
      fullScreen={shouldDisplayFullScreen}
      className="schedule-modal-wrapper"
    >
      <CloseIcon
        onClick={() => setIsModalOpen(false)}
        style={{
          position: "absolute",
          right: "1.5rem",
          top: "1.5rem",
          cursor: "pointer",
        }}
      />

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
        sx={{
          margin: "3rem",
        }}
      >
      <Grid container justifyContent="space-between">
        {modalOpenAction === "edit-event" && (
          <Typography variant="h1">Edit event</Typography>
        )}
        {modalOpenAction === "add-event" && (
          <Typography variant="h1">Schedule event</Typography>
        )}

        {modalOpenAction === "edit-event" && (
          <Button onClick={() => handleDeleteEvent()}>
            <img
              src="/assets/icons/ph_trash.svg"
              alt="Delete event icon"
            />
          </Button>
        )}
      </Grid>

        <FormProvider {...methods}>
          <Grid container spacing={{ sm: 0, md: 2 }}>
            <Grid item xs={12} sm={12} md={12}>
              <FormLabel>Select activity</FormLabel>
              <Grid item>
                <Select fullWidth onChange={handleSelectActivityChange}>
                  {activitiesData?.map((activity) => (
                    <MenuItem
                      key={activity.activityName}
                      value={activity.activityName}
                    >
                      {activity.activityName}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <FormLabel>Event name *</FormLabel>
              <TextField
                name="title"
                type="text"
                value={populateEventTitle}
                onChange={handleTitleChange}
                fullWidth
                sx={{ mb: 3 }}
                variant="standard"
                error={showTitleError}
                helperText={showTitleError ? 'Event name is required' : ''}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Grid container>
                <FormLabel>Start date *</FormLabel>
              </Grid>
              <Controller
                name="start"
                control={control}
                defaultValue={eventData?.start}
                render={({ field: { onChange, onBlur, value } }) => (
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="en-gb"
                  >
                    <DateTimePicker
                      onChange={onStartDateChange}
                      value={startDateValue}
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                )}
              />
              {showStartError && (
                <Typography variant="helper" sx={{color: errorTextColour}}>Start date is required</Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Grid container>
                <FormLabel>End date *</FormLabel>
              </Grid>
              <Controller
                name="end"
                control={control}
                defaultValue={eventData?.end}
                render={({ field: { onChange, onBlur, value } }) => (
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="en-gb"
                  >
                    <DateTimePicker
                      onChange={onEndDateChange}
                      value={endDateValue}
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                )}
              />
              {showEndError && (
                <Typography variant="helper" sx={{color: errorTextColour}}>End date is required</Typography>
              )}
            </Grid>
          </Grid>
          {modalOpenAction === "edit-event" && (
            <Button
              variant="contained"
              name="create"
              fullWidth
              type="submit"
              sx={{
                py: "0.8rem",
                mt: "1rem",
                width: "210px",
                borderRadius: 50,
              }}
            >
              Update Event
            </Button>
          )}
          {modalOpenAction === "add-event" && (
            <Button
              variant="contained"
              name="create"
              fullWidth
              type="submit"
              sx={{
                py: "0.8rem",
                mt: "1rem",
                width: "210px",
                borderRadius: 50,
              }}
            >
              Create now
            </Button>
          )}

          <Button
            variant="text"
            name="cancel"
            fullWidth
            onClick={() => setIsModalOpen(false)}
            sx={{
              py: "0.8rem",
              mt: "1rem",
              ml: "1rem",
              width: "210px",
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

export default ScheduleModal;
