import 'dayjs/locale/en-gb';

import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Dialog,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { ChangeEvent, useEffect, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { useAccountContext } from '@/context/AccountContext';
import { Event } from '@/models/Event';
import { useListActivities } from '@/services/activities/useListActivities';
import { useCreateEvent } from '@/services/planner/useCreateEvent';
import { useDeleteEvent } from '@/services/planner/useDeleteEvent';
import { useUpdateEvent } from '@/services/planner/useUpdateEvent';
import theme from '@/styles/theme';

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
  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const errorTextColour = theme.palette.error.main;
  const [durationHours, setDurationHours] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(15);
  const {
    account: { accountId },
  } = useAccountContext();
  const [displayEventName, setDisplayEventName] = useState<boolean>(true);
  const [selectedActivity, setSelectedActivity] = useState('');

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [eventData, setEventData] = useState<null | Event>(null);

  const { data: activitiesData } = useListActivities();

  const [startDateValue, setStartDateValue] = useState<Dayjs | null>(null);
  const [endDateValue, setEndDateValue] = useState<Dayjs | null>(null);

  const hideValidationErrors = () => {
    setShowTitleError(false);
    setShowStartError(false);
    setShowEndError(false);
  };

  const resetFormData = () => {
    setEventData(null);

    setStartDateValue(null);
    setEndDateValue(null);

    hideValidationErrors();
  };
  useEffect(() => {
    const calculatedEndDate = dayjs(startDateValue)
      .add(durationHours, 'hour')
      .add(durationMinutes, 'minute');

    setEndDateValue(calculatedEndDate);
    const endDateString = calculatedEndDate.format('YYYY-MM-DD HH:mm');

    setEventData({
      ...eventData,
      end: endDateString,
    });
  }, [durationHours, durationMinutes]);

  useEffect(() => {
    resetFormData();

    if (modalOpenAction === 'add-event') {
      setPopulateEventTitle('');
      setSelectedActivity('');
      resetFormData();
      if (addEventStartDate) {
        setStartDateValue(addEventStartDate);
        setEventData({
          ...editEventData,
          start: dayjs(addEventStartDate),
        });
      }
    }

    if (modalOpenAction === 'edit-event') {
      setPopulateEventTitle(editEventData?.title);

      if (editEventData?.start) {
        setStartDateValue(dayjs(editEventData.start));
      }
      if (
        Array.isArray(activitiesData) &&
        activitiesData.some(
          (activity) => activity.activityName == editEventData?.title
        )
      ) {
        console.log('activity exists');

        setSelectedActivity(editEventData?.title);
        console.log('selected activity', editEventData?.title);
      }

      if (editEventData?.end) {
        setEndDateValue(dayjs(editEventData.end));
      }

      setEventData({
        ...editEventData,
        start: dayjs(editEventData?.start),
        end: dayjs(editEventData?.end),
      });
    }

    if (toggleScheduleModal !== 1) {
      setIsModalOpen(true);
    }
  }, [toggleScheduleModal, activitiesData]);

  useEffect(() => {
    if (!isModalOpen) {
      onCloseScheduleModal();
    }
  }, [isModalOpen]);

  const methods = useForm({
    defaultValues: eventData,
  });

  const { handleSubmit, control } = methods;

  const [populateEventTitle, setPopulateEventTitle] = useState<string>('');

  const handleSelectActivityChange = (event: SelectChangeEvent) => {
    const selectedEventTitle = event.target.value;
    setSelectedActivity(selectedEventTitle);
    if (selectedEventTitle === 'Other') {
      setDisplayEventName(true);
      return;
    } else {
      setDisplayEventName(false);
    }

    setEventData({
      ...eventData,
      title: selectedEventTitle,
    });
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setPopulateEventTitle(newTitle);

    setEventData({
      ...eventData,
      title: newTitle,
    });
  };

  const createEvent = useCreateEvent();
  const updateEvent = useUpdateEvent();

  const [showTitleError, setShowTitleError] = useState<boolean>(false);
  const [showStartError, setShowStartError] = useState<boolean>(false);
  const [showEndError, setShowEndError] = useState<boolean>(false);

  const validateForm = (formSubmitData: Event) => {
    hideValidationErrors();

    if (!formSubmitData?.title) {
      setShowTitleError(true);
    }

    if (!formSubmitData?.start) {
      console.log('show start error');
      console.log(formSubmitData);
      setShowStartError(true);
    }

    if (!formSubmitData?.end) {
      setShowEndError(true);
    }
  };

  const onSubmitHandler = (values: Event) => {
    const newEventData = {
      ...eventData,
      ...values,
      start: eventData?.start,
      end: eventData?.end,
      accountId,
    };

    validateForm(newEventData);

    if (!newEventData.title || !newEventData.start || !newEventData.end) {
      // prevent submit
      return null;
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
    setStartDateValue(date);
    const formattedStartDate = dayjs(date).format('YYYY-MM-DD HH:mm');

    // Calculate the end date based on duration
    const calculatedEndDate = dayjs(date)
      .add(durationHours, 'hour')
      .add(durationMinutes, 'minute');

    setEndDateValue(calculatedEndDate);
    const formattedEndDate = calculatedEndDate.format('YYYY-MM-DD HH:mm');

    // Update your event data
    setEventData({
      ...eventData,
      start: formattedStartDate,
      end: formattedEndDate,
    });
  };

  const onEndDateChange = (date: any) => {
    setEndDateValue(date);

    const endDate = dayjs(date).format('YYYY-MM-DD HH:mm');

    setEventData({
      ...eventData,
      end: endDate,
    });
  };

  const deleteEvent = useDeleteEvent();

  const handleDeleteEvent = () => {
    deleteEvent.mutate(eventData?.eventId, {
      onSuccess: (res) => {
        setIsModalOpen(false);
        onCloseScheduleModal();
      },
      onError: (err) => {
        setIsModalOpen(false);
        onCloseScheduleModal();
      },
    });
  };

  return (
    <Dialog
      open={isModalOpen}
      fullScreen={shouldDisplayFullScreen}
      className="schedule-modal-wrapper"
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
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
        sx={{
          margin: '3rem',
        }}
      >
        <Grid container justifyContent="space-between">
          {modalOpenAction === 'edit-event' && (
            <Typography variant="h1">Edit event</Typography>
          )}
          {modalOpenAction === 'add-event' && (
            <Typography variant="h1">Schedule event</Typography>
          )}

          {modalOpenAction === 'edit-event' && (
            <Button onClick={() => handleDeleteEvent()}>
              <img src="/assets/icons/ph_trash.svg" alt="Delete event icon" />
            </Button>
          )}
        </Grid>

        <FormProvider {...methods}>
          <Grid container spacing={{ sm: 0, md: 2 }}>
            <Grid item xs={12} sm={12} md={12}>
              <FormLabel>Select activity</FormLabel>
              <Grid item>
                <Select
                  fullWidth
                  onChange={handleSelectActivityChange}
                  value={selectedActivity}
                >
                  {activitiesData?.map((activity) => (
                    <MenuItem
                      key={activity.activityName}
                      value={activity.activityName}
                    >
                      {activity.activityName}
                    </MenuItem>
                  ))}
                  <MenuItem value="Other">Other (Non-Motion activity)</MenuItem>
                </Select>
              </Grid>
            </Grid>

            {displayEventName && (
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
            )}

            <Grid item xs={12} sm={12} md={6}>
              <Grid container>
                <FormLabel>Activity date and time *</FormLabel>
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
                      sx={{ width: '100%' }}
                    />
                  </LocalizationProvider>
                )}
              />
              {showStartError && (
                <Typography variant="helper" sx={{ color: errorTextColour }}>
                  Start date is required
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Grid container>
                <FormLabel>Duration *</FormLabel>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Select
                    value={durationHours}
                    onChange={(e) => setDurationHours(e.target.value)}
                    sx={{ width: '100%' }}
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    {/* Add more options here */}
                  </Select>
                  <Typography variant="caption">Hours</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Select
                    value={durationMinutes}
                    onChange={(e) => setDurationMinutes(e.target.value)}
                    sx={{ width: '100%' }}
                  >
                    <MenuItem value={0}>00</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={45}>45</MenuItem>
                  </Select>
                  <Typography variant="caption">Minutes</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {modalOpenAction === 'edit-event' && (
            <Button
              variant="contained"
              name="create"
              fullWidth
              type="submit"
              sx={{
                py: '0.8rem',
                mt: '1rem',
                width: '210px',
                borderRadius: 50,
              }}
            >
              Update Event
            </Button>
          )}
          {modalOpenAction === 'add-event' && (
            <Button
              variant="contained"
              name="create"
              fullWidth
              type="submit"
              sx={{
                py: '0.8rem',
                mt: '1rem',
                width: '210px',
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

export default ScheduleModal;
