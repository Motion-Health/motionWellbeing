import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
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

import styles from './planner.module.css';

const Planner = () => {
  const {
    account: { accountId, accountStatus },
  } = useAccountContext();
  const [showButtons, setShowButtons] = useState<null | Event>(null);

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

  function handleEdit(eventData: Event) {
    if (!eventData.isProtected) {
      setToggleScheduleModal(Math.random());
      setModalOpenAction('edit-event');
      setEditEventData(eventData);
    }
  }
  function handleEventClick(eventData: Event) {
    setShowButtons(eventData); // set the event data on click
  }

  function handleOpen(eventData: Event) {
    console.log(eventData);
    if (!eventData.isProtected && eventData.activityId) {
      router.push(`/wellbeing/activities/${eventData.activityId}`);
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
      activityId: eventInfo.event.extendedProps.activityId,
      title: eventInfo.event.title,
      start: eventInfo.event.start,
      end: eventInfo.event.end,
      isProtected: eventInfo.event.extendedProps.isProtected,
    };

    let timeText = moment(eventInfo.event.start).format('HH:mm');
    if (timeText === '00:00') timeText = ''; // remove labels for all-day events which start at midnight

    return (
      <div
        className={styles.eventContainer}
        style={{
          backgroundColor:
            showButtons &&
            showButtons.eventId === eventData.eventId &&
            !showButtons.isProtected
              ? '#f0f0f0'
              : 'transparent',
        }}
      >
        <div
          className={styles.event}
          onClick={() => handleEventClick(eventData)} // this now sets the showButtons state
          variant="link"
        >
          {/* {(showButtons === null ||
            showButtons.eventId != eventData.eventId) && ( */}
          <>
            <div className={styles.eventTitle}>{eventInfo.event.title}</div>
            <div className={styles.eventTime}>{timeText}</div>
          </>
          {/* )} */}
        </div>
        {showButtons &&
          showButtons.eventId === eventData.eventId &&
          !showButtons.isProtected && (
            <div className={styles.showButtons}>
              {showButtons.activityId && (
                <div>
                  <button
                    className={styles.editButton}
                    onClick={() => handleEdit(eventData)}
                  >
                    Edit
                  </button>

                  <button
                    className={styles.openButton}
                    onClick={() => handleOpen(eventData)}
                  >
                    Open
                  </button>
                </div>
              )}
              {!showButtons.activityId && (
                <div>
                  <button
                    className={styles.fullEditButton}
                    onClick={() => handleEdit(eventData)}
                  >
                    Edit
                  </button>
                </div>
              )}

              <div>
                <button
                  className={styles.closeButton}
                  onClick={() => setShowButtons(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
      </div>
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
