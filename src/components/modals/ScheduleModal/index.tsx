import 'dayjs/locale/en-gb';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Dialog,
  FormLabel,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { NestedMenuItem } from 'mui-nested-menu';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { useAccountContext } from '@/context/AccountContext';
import { categories } from '@/data/categories.ts';
import { Event } from '@/models/Event';
import { useListActivities } from '@/services/activities/useListActivities';
import { useCreateEvent } from '@/services/planner/useCreateEvent';
import { useDeleteEvent } from '@/services/planner/useDeleteEvent';
import { useUpdateEvent } from '@/services/planner/useUpdateEvent';
import theme from '@/styles/theme';

import styles from './scheduleModal.module.css';
import useValidation from './useValidation';
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
  const {
    showTitleError,
    showStartError,
    showEndError,
    validateForm,
    resetValidation,
  } = useValidation();
  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const errorTextColour = theme.palette.error.main;
  const [durationHours, setDurationHours] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(15);
  const {
    account: { accountId },
  } = useAccountContext();
  const [displayEventName, setDisplayEventName] = useState<boolean>(false);
  const [selectedActivity, setSelectedActivity] = useState('');

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [eventData, setEventData] = useState<null | Event>(null);

  const { data: activitiesData } = useListActivities();

  const [startDateValue, setStartDateValue] = useState<Dayjs | null>(null);
  const [endDateValue, setEndDateValue] = useState<Dayjs | null>(null);

  const resetFormData = () => {
    setEventData(null);
    setStartDateValue(null);
    setEndDateValue(null);
    resetValidation();
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
      setEventData({
        accountId: accountId,
        title: '',
        start: '',
        end: '',
        isProtected: false,
      });
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
        setSelectedActivity(editEventData?.title);
        setDisplayEventName(false);
      } else {
        setDisplayEventName(true);
        setSelectedActivity('Other (Non-Motion activity)');
      }

      if (editEventData?.end) {
        // find hours and minjutes from end date
        const endDate = dayjs(editEventData?.end);
        setDurationHours(endDate.diff(editEventData?.start, 'hour'));
        setDurationMinutes(endDate.diff(editEventData?.start, 'minute') % 60);
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
    defaultValues: {
      title: eventData?.title,
      start: eventData?.start,
      end: eventData?.end,
    },
  });

  const { handleSubmit, setValue, control } = methods;

  const [populateEventTitle, setPopulateEventTitle] = useState<string>('');

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setPopulateEventTitle(newTitle);

    setEventData({
      ...eventData,
    });
  };

  const createEvent = useCreateEvent();
  const updateEvent = useUpdateEvent();

  const onSubmitHandler = (values: Event) => {
    validateForm(eventData);
    const updatedEventData = {
      ...eventData,
      accountId: accountId,
      title: document.getElementById('title')?.value || '',
    };
    if (
      !updatedEventData.title ||
      !updatedEventData.start ||
      !updatedEventData.end
    ) {
      // prevent submit
      return null;
    }

    if (!updatedEventData?.eventId) {
      createEvent.mutate(updatedEventData, {
        onSuccess: (res) => {
          setIsModalOpen(false);
        },
        onError: (err) => {
          setIsModalOpen(false);
        },
      });
    } else {
      updateEvent.mutate(updatedEventData, {
        onSuccess: (res) => {
          setIsModalOpen(false);
        },
        onError: (err) => {
          console.log('Error updating event', err);
          setIsModalOpen(false);
        },
      });
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selectValue, setSelectValue] = useState(''); // use '' instead of undefined

  const handleClick = (event) => {
    return setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const setSelectValueMethod = (value) => {
    setSelectValue(value);
    handleClose();
  };
  const [openDT, setOpenDT] = useState(false);
  // Group activities by their category
  const groupedActivities = useMemo(() => {
    if (!Array.isArray(activitiesData)) {
      console.error(
        'Invalid input to groupByCategory, array expected:',
        activitiesData
      );
      return {};
    }
    return activitiesData.reduce((result, activity) => {
      (result[activity.category] = result[activity.category] || []).push(
        activity
      );
      return result;
    }, {});
  }, [activitiesData]);

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
  const [hoveredCategory, setHoveredCategory] = useState('');
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
      className={styles.scheduleModalWrapper}
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
          <Typography variant="h1">
            {modalOpenAction === 'edit-event' ? 'Edit event' : 'Schedule event'}
          </Typography>

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
                <div>
                  <div onClick={handleClick} className={styles.select}>
                    <span className={styles.selectText}>
                      {selectedActivity || 'Select Activity'}
                    </span>
                    <IconButton size="small" edge="end" onClick={handleClick}>
                      <ArrowDropDownIcon />
                    </IconButton>
                  </div>
                  <Menu
                    value={selectValue}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    onChange={(e) => {
                      setValue(e.target.value);
                      handleSelectActivityChange(e);
                    }}
                  >
                    {activitiesData?.map((activity) => (
                      <MenuItem
                        key={activity.activityId}
                        value={activity.activityName}
                        sx={{ display: 'none' }}
                      ></MenuItem>
                    ))}
                    {Object.keys(groupedActivities).map((category) => (
                      <NestedMenuItem
                        label={
                          categories.find((cat) => cat.filter === category)
                            ?.title
                        }
                        parentMenuOpen={open}
                        key={category}
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                      >
                        {Array.isArray(groupedActivities[category]) &&
                          groupedActivities[category].map((activity) => (
                            <MenuItem
                              value={activity.activityName}
                              key={activity.activityId} // Add key for each mapped item
                              data-value={activity.activityName}
                              onClick={(e) => {
                                setSelectValueMethod(
                                  e.currentTarget.dataset.value
                                );
                                document.getElementById('title').value =
                                  e.currentTarget.dataset.value;
                                setDisplayEventName(false);
                                setSelectedActivity(
                                  e.currentTarget.dataset.value || ''
                                );
                                // set title to value
                                setValue(
                                  'title',
                                  e.currentTarget.dataset.value || ''
                                );
                                setEventData({
                                  ...eventData,
                                  title: e.currentTarget.dataset.value || '',
                                  activityId: activity.activityId || '',
                                });
                              }}
                            >
                              {activity.activityName}
                            </MenuItem>
                          ))}
                      </NestedMenuItem>
                    ))}
                    <MenuItem
                      value={'Other (Non-Motion activity)'}
                      key={'Other'}
                      onClick={(e) => {
                        setSelectValueMethod('Other (Non-Motion activity)');
                        setDisplayEventName(true);
                        setSelectedActivity('Other (Non-Motion activity)');
                        setEventData({
                          ...eventData,
                          title: 'Other (Non-Motion activity)',
                        });
                      }}
                    >
                      Other (Non-Motion activity)
                    </MenuItem>
                  </Menu>
                </div>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              style={{ display: displayEventName ? 'block' : 'none' }}
            >
              <FormLabel>Event name *</FormLabel>
              <TextField
                name="title"
                type="text"
                defaultValue={populateEventTitle}
                fullWidth
                id="title"
                sx={{ mb: 3 }}
                variant="standard"
                required
              />
            </Grid>

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
                    <DesktopDateTimePicker
                      onChange={onStartDateChange}
                      value={startDateValue}
                      sx={{ width: '100%' }}
                      open={openDT}
                      onClose={() => setOpenDT(false)}
                      slotProps={{
                        textField: {
                          onClick: () => setOpenDT(true),
                        },
                      }}
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
            // onClick={() => setIsModalOpen(false)}
            sx={{
              py: '0.8rem',
              mt: '1rem',
              ml: '1rem',
              width: '210px',
              borderRadius: 50,
            }}
            onClick={() => {
              setIsModalOpen(false);
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
