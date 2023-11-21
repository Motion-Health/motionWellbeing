import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayjs, { Dayjs } from 'dayjs';
import jsPDF from 'jspdf';
import moment from 'moment';
import Head from 'next/head';
import router from 'next/router';
import { useEffect, useRef, useState } from 'react';

import ScheduleModal from '@/components/modals/ScheduleModal';
import { useAccountContext } from '@/context/AccountContext';
import { Event } from '@/models/Event';
import { useGetAccount } from '@/services/account/useGetAccount';
import { usePlannerEvents } from '@/services/planner/usePlannerEvents';
import { Main } from '@/templates/Main';

import styles from './planner.module.css';

const Planner = () => {
  // get account name
  const { account } = useAccountContext();
  const accountName = account?.serviceProviderName;
  const { data: fullAccount } = useGetAccount();

  const [isMobile, setIsMobile] = useState(false);
  const [calendarApi, setCalendarApi] = useState(null);
  // Listen for window resize and adjust isMobile state
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calendarRef = useRef(null);
  useEffect(() => {
    // Check if the calendar API is available and set it
    if (calendarRef.current) {
      const api = calendarRef.current.getApi();
      setCalendarApi(api); // Update the state with the calendar API
      api.changeView(isMobile ? 'dayGridDay' : 'dayGridMonth');
    }
  }, [isMobile]);

  const getDaysArrayByMonth = (year, month) => {
    var daysInMonth = dayjs(new Date(year, month, 1)).daysInMonth();
    const arrDays = [];

    while (daysInMonth) {
      const current = dayjs(new Date(year, month, daysInMonth--)).format(
        'YYYY-MM-DD'
      );
      arrDays.push(current);
    }

    return arrDays.reverse();
  };

  function splitTextToLines(text, maxWidth, pdf) {
    let lines = [];
    let currentLine = text.split(' ')[0];

    text
      .split(' ')
      .slice(1)
      .forEach((word) => {
        let width =
          (pdf.getStringUnitWidth(currentLine + ' ' + word) *
            pdf.internal.getFontSize()) /
          pdf.internal.scaleFactor;
        if (width < maxWidth) {
          currentLine += ' ' + word;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      });

    if (currentLine) {
      lines.push(currentLine);
    }

    // Check if the last line is too long and add an ellipsis
    const lastLineWidth =
      (pdf.getStringUnitWidth(lines[lines.length - 1]) *
        pdf.internal.getFontSize()) /
      pdf.internal.scaleFactor;
    if (lastLineWidth > maxWidth) {
      lines[lines.length - 1] =
        lines[lines.length - 1].substring(
          0,
          lines[lines.length - 1].length - 3
        ) + '...';
    }

    return lines;
  }

  function printCalendarPDF(events, isToggled) {
    // Get the current view's date range from the FullCalendar API
    const calendarApi = calendarRef.current.getApi();
    const calendarMonth = calendarApi.getDate();
    const calendarStartDate = calendarMonth;
    const calendarEndDate = dayjs(calendarMonth).endOf('month').toDate();

    const daysInMonth = dayjs(calendarEndDate).date();
    const startOfMonth = dayjs(calendarStartDate).startOf('month');

    const pdf = new jsPDF({
      orientation: 'landscape',
    });

    // Constants for the calendar layout
    const daysInWeek = 7;
    const cellWidth = (pdf.internal.pageSize.getWidth() - 10) / daysInWeek;

    const startY = 45; // Y start position for the first row, leaving space for headers
    const startX = 5; // X start position for the first column, leaving space for headers
    //the week day the month starts on monday = 0, sunday = 6
    const startDayAdjusted = (startOfMonth.day() + 6) % 7;

    // Calculate the total number of weeks
    const weekCount = Math.ceil((daysInMonth + startDayAdjusted) / daysInWeek);
    const totalHeightAvailable = pdf.internal.pageSize.getHeight() - startY - 5; // 20 for bottom margin
    const cellHeight = totalHeightAvailable / weekCount;
    pdf.setFont('helvetica', 'bold');
    pdf.text(accountName, 10, 10);
    pdf.addImage(fullAccount.logo, 'PNG', 10, 15, 60, 20);
    // print the month
    // Set font to bold for day labels

    // Set font size for day numbers
    pdf.setFontSize(17);
    pdf.text(
      // Print the month and year
      startOfMonth.format('MMMM YYYY'),
      pdf.internal.pageSize.getWidth() / 2,
      10,
      null,
      'center'
    );
    pdf.setFont('helvetica', 'normal');

    // Define the array to hold the day slots
    let daySlots = new Array(weekCount * daysInWeek).fill(null);
    // Populate daySlots with dates
    for (let i = 0; i < daysInMonth; i++) {
      const date = startOfMonth.add(i, 'day');
      const dayOfWeek = (date.day() + 6) % 7; // Adjust so Monday is 0, Sunday is 6
      const weekOfMonth = Math.floor(
        (date.date() - 1 + ((startOfMonth.day() + 6) % 7)) / daysInWeek
      );

      const index = weekOfMonth * daysInWeek + dayOfWeek;
      daySlots[index] = date.format('D'); // Store only the day number for simplicity
    }

    // Drawing the grid for the calendar
    for (let i = 0; i < daysInWeek; i++) {
      for (let j = 0; j < weekCount; j++) {
        const x = startX + i * cellWidth;
        const y = j * cellHeight + startY;

        // Get the index for daySlots
        const index = j * daysInWeek + i;
        const day = daySlots[index];
        console.log(day);
        console.log(index);

        // Alternate background fill
        const fill = j % 2 == 0 ? 'DF' : 'S';
        pdf.setFillColor(230, 230, 230);
        if (!day) pdf.setFillColor(0, 0, 0);

        pdf.rect(x, y, cellWidth, cellHeight, fill);
      }
    }

    // Adding day labels
    const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    pdf.setFontSize(12);
    // draw rectangle for day labels

    dayLabels.forEach((label, index) => {
      const x = startX + index * cellWidth;
      const y = startY - 10;
      pdf.setFillColor(230, 230, 230);
      pdf.roundedRect(x + 2, y, cellWidth - 4, 8, 4, 4, 'DF');

      pdf.text(
        label,
        index * cellWidth + (cellWidth - 4) / 2,
        startY - 5,
        null,
        'center'
      );
    });
    // Set font size smaller to fit more text
    pdf.setFontSize(10);

    // Adding day numbers and events to the calendar
    daySlots.forEach((day, index) => {
      const x = startX + (index % daysInWeek) * cellWidth;
      const y = Math.floor(index / daysInWeek) * cellHeight + startY + 5;

      // If there's a day for this slot, add the day number to the cell
      if (day) {
        pdf.text(day.split('-').pop(), x + 2, y); // Add the day of the month

        // Filter and map events for this day
        const eventsForDay = events
          .filter((event) => dayjs(event.start).month() == startOfMonth.month())
          .filter(
            (event) => event.isProtected == isToggled || !event.isProtected
          )
          .filter((event) => dayjs(event.start).date() == day)
          .slice(0, 2);

        eventsForDay.forEach((event, eventIndex) => {
          const lines = splitTextToLines(
            event.title.split('|')[0],
            cellWidth - 4,
            pdf
          );
          const timeText = moment(event.start).format('hh:mm A');

          pdf.text(lines[0], x + 2, y + 5 + eventIndex * 12);
          if (lines[1] && lines[1].length != 0) {
            const text = truncateString(lines[1], cellWidth - 31);
            pdf.text(text, x + 2, y + 9 + eventIndex * 12);
            if (timeText !== '00:00') {
              pdf.text(timeText, x + 24, y + 9 + eventIndex * 12);
            }
          } else {
            if (timeText !== '00:00') {
              pdf.text(timeText, x + 2, y + 9 + eventIndex * 12);
            }
          }
        });
      }
    });

    window.open(pdf.output('bloburl'), '_blank');
  }

  // ...rest of your Planner component

  const {
    account: { accountId, accountStatus },
  } = useAccountContext();
  const [showButtons, setShowButtons] = useState<null | Event>(null);
  const [threeDots, setThreeDots] = useState(false);
  const { data: events, refetch: refetchPlannerEvents } =
    usePlannerEvents(accountId);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
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
    if (!eventData.isProtected && eventData.activityId) {
      router.push(`/wellbeing/activities/${eventData.activityId}`);
    }
  }
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num - 1) + '...'; // Subtract 1 to account for the length of the ellipsis
    } else {
      return str;
    }
  }
  const onCloseScheduleModal = () => {
    setToggleScheduleModal(1);
    refetchPlannerEvents();
    setEditEventData(null);
    setAddEventStartDate(null);
  };
  const changeView = (view) => {
    const api = calendarRef.current.getApi();
    api.changeView(view);
  };

  const goToToday = () => {
    const api = calendarRef.current.getApi();
    api.today();
  };

  function renderEventContent(eventInfo: any) {
    const isDayGridMonth = calendarApi?.view?.type === 'dayGridMonth';
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
            !showButtons.isProtected &&
            isDayGridMonth === 'dayGridMonth'
              ? '#f0f0f0'
              : 'transparent',
        }}
      >
        <div
          className={styles.event}
          onClick={() => handleEventClick(eventData)} // this now sets the showButtons state
          variant="link"
        >
          <div className={styles.eventTitle}>{eventInfo.event.title}</div>
          <div className={styles.eventTime}>{timeText}</div>
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

      <div
        className={`${styles.threeDotsContainer} ${
          threeDots ? styles.open : ''
        }`}
      >
        <div className={styles.toggle}>
          <div className={styles.toggleSwitchLabel}>Days of the Year</div>
          <label className={styles.toggleSwitch}>
            <input
              type="checkbox"
              className={styles.toggleSwitchInput}
              checked={isToggled}
              onChange={handleToggle}
            />
            <span className={styles.switch} />
          </label>
        </div>

        <div className={styles.optionsMenu}>
          <button
            className={styles.dayButton}
            onClick={() => changeView('dayGridDay')}
          >
            Day
          </button>
          <button
            className={styles.weekButton}
            onClick={() => changeView('timeGridWeek')}
          >
            Week
          </button>
          <button
            className={styles.monthButton}
            onClick={() => changeView('dayGridMonth')}
          >
            Month
          </button>
        </div>
        <button className={styles.today} onClick={() => goToToday()}>
          Return to today
        </button>
      </div>

      <div className={styles.calendar}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={isMobile ? 'dayGridDay' : 'timeGridWeek'}
          headerToolbar={{
            left: isMobile ? 'prev,next' : 'prev title next',
            right: isMobile ? '' : 'printButton scheduleButton threeDots',
          }}
          customButtons={{
            printButton: {
              text: 'Print my planner',
              click: function () {
                if (events) {
                  printCalendarPDF(events, isToggled); // This will create and open the PDF for printing
                }
              },
            },
            scheduleButton: {
              text: 'Schedule Activity',
              click: function () {
                setToggleScheduleModal(Math.random());
                setModalOpenAction('add-event');
              },
            },
            threeDots: {
              click: function () {
                setThreeDots(!threeDots);
              },
            },
          }}
          ref={calendarRef}
          firstDay={1}
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            meridiem: false,
            hour12: false,
          }}
          slotMinTime="09:00:00"
          slotMaxTime="18:00:00"
          events={
            isToggled
              ? events
              : events
              ? events.filter((e) => !e.isProtected)
              : []
          }
          eventColor="#378006"
          eventBackgroundColor="00aeff"
          eventContent={renderEventContent}
          dateClick={handleDateClick}
          views={{
            timeGridWeek: {
              dayHeaderFormat: { month: 'short', day: 'numeric' },
            },
          }}
        />
      </div>
    </Main>
  );
};

export default Planner;
