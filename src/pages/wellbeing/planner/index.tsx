import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import { Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import moment from 'moment';
import Head from 'next/head';
import router from 'next/router';
import { useEffect, useState } from 'react';

import ScheduleModal from '@/components/modals/ScheduleModal';
import { useAccountContext } from '@/context/AccountContext';
import { Event } from '@/models/Event';
import { usePlannerEvents } from '@/services/planner/usePlannerEvents';
import { Main } from '@/templates/Main';

const Planner = () => {
  const {
    account: { accountId, accountStatus },
  } = useAccountContext();

  const { data: events, refetch: refetchPlannerEvents } =
    usePlannerEvents(accountId);

  const [toggleScheduleModal, setToggleScheduleModal] = useState<number>(1);
  const [modalOpenAction, setModalOpenAction] = useState<
    'add-event' | 'edit-event' | null
  >(null);
  const [editEventData, setEditEventData] = useState<Event | null>(null);
  const [addEventStartDate, setAddEventStartDate] = useState<Dayjs | null>(
    null
  );
  useEffect(() => {
    if (accountStatus == 'standard') {
      // Redirect to upgrade page
      router.push('/wellbeing/upgrade');
    }
  }, [accountStatus]);

  useEffect(() => {
    refetchPlannerEvents();
  }, [modalOpenAction]);

  function handleDateClick(fullCalendarDateInfo: any) {
    const selectedDate = fullCalendarDateInfo.date;

    setToggleScheduleModal(Math.random());
    setModalOpenAction('add-event');
    setAddEventStartDate(dayjs(selectedDate));
  }

  function handleEventClick(eventData: Event) {
    if (!eventData.isProtected) {
      setToggleScheduleModal(Math.random());
      setModalOpenAction('edit-event');
      setEditEventData(eventData);
    }
  }

  const onCloseScheduleModal = () => {
    setToggleScheduleModal(1);
    refetchPlannerEvents();
    setEditEventData(null);
    setAddEventStartDate(null);
  };

  function renderEventContent(eventInfo: any) {
    const eventData = {
      eventId: eventInfo.event.extendedProps.eventId,
      accountId: eventInfo.event.extendedProps.accountId,
      title: eventInfo.event.title,
      start: eventInfo.event.start,
      end: eventInfo.event.end,
      isProtected: eventInfo.event.extendedProps.isProtected,
    };

    let timeText = moment(eventInfo.event.start).format('HH:mm');
    if (timeText === '00:00') timeText = ''; // remove labels for all-day events which start at midnight

    return (
      <>
        <div
          className="event"
          onClick={() => handleEventClick(eventData)}
          variant="link"
        >
          <Typography variant="h4">{eventInfo.event.title} </Typography>
          <Typography variant="helper">{timeText}</Typography>
        </div>
      </>
    );
  }
  return (
    <Main>
      <Head>
        <title>My planner | Motion Wellbeing</title>
      </Head>
      <ScheduleModal
        toggleScheduleModal={toggleScheduleModal}
        modalOpenAction={modalOpenAction}
        editEventData={editEventData}
        addEventStartDate={addEventStartDate}
        onCloseScheduleModal={onCloseScheduleModal}
      />
      <FullCalendar
        themeSystem="bootstrap"
        customButtons={{
          printButton: {
            text: 'Print my planner',
            click: function () {
              window.print();
            },
          },
          scheduleButton: {
            text: 'Schedule Activity',

            click: function () {
              setToggleScheduleModal(Math.random());
              setModalOpenAction('add-event');
            },
          },
        }}
        headerToolbar={{
          left: 'prev title next',
          right: 'printButton scheduleButton',
        }}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        firstDay={1}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
          hour12: false,
        }}
        events={events}
        eventColor="#378006"
        eventBackgroundColor="00aeff"
        eventContent={renderEventContent}
        dateClick={handleDateClick}
      />
    </Main>
  );
};

export default Planner;
