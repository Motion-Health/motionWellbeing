import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayjs, { Dayjs } from "dayjs";
import moment from "moment";
import Head from "next/head";
import router from "next/router";
import { useEffect, useRef, useState } from "react";

import PrintOptionsModal from "@/components/modals/PrintOptionsModal"; // Adjust the path as necessary
import ScheduleModal from "@/components/modals/ScheduleModal";
import { useAccountContext } from "@/context/AccountContext";
import { Event } from "@/models/Event";
import { useGetAccount } from "@/services/account/useGetAccount";
import { usePlannerEvents } from "@/services/planner/usePlannerEvents";
import { Main } from "@/templates/Main";
import { printCalendarPDF } from "@/utils/makePlannerPrintable.js";

import styles from "./planner.module.css";

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

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calendarRef = useRef(null);
  useEffect(() => {
    // Check if the calendar API is available and set it
    if (calendarRef.current) {
      const api = calendarRef.current.getApi();
      setCalendarApi(api); // Update the state with the calendar API
      api.changeView(isMobile ? "dayGridDay" : "dayGridMonth");
    }
  }, [isMobile]);

  const {
    account: { accountId, accountStatus },
  } = useAccountContext();
  const [showButtons, setShowButtons] = useState<null | Event>(null);
  const [threeDots, setThreeDots] = useState(false);
  const threeDotsRef = useRef(null); // Create a ref for the three dots container

  // Function to close the menu
  const closeMenu = () => setThreeDots(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        threeDotsRef.current &&
        !threeDotsRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [threeDotsRef]);
  const { data: events, refetch: refetchPlannerEvents } =
    usePlannerEvents(accountId);
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const [toggleScheduleModal, setToggleScheduleModal] = useState<number>(1);
  const [modalOpenAction, setModalOpenAction] = useState<
    "add-event" | "edit-event" | null
  >(null);
  const [editEventData, setEditEventData] = useState<Event | null>(null);
  const [addEventStartDate, setAddEventStartDate] = useState<Dayjs | null>(
    null
  );
  useEffect(() => {
    if (accountStatus == "standard") {
      // Redirect to upgrade page
      router.push("/wellbeing/upgrade");
    }
  }, [accountStatus]);

  useEffect(() => {
    refetchPlannerEvents();
  }, [modalOpenAction]);

  function handleDateClick(fullCalendarDateInfo: any) {
    const selectedDate = fullCalendarDateInfo.date;

    setToggleScheduleModal(Math.random());
    setModalOpenAction("add-event");
    setAddEventStartDate(dayjs(selectedDate));
  }

  function handleEdit(eventData: Event) {
    if (!eventData.isProtected) {
      setToggleScheduleModal(Math.random());
      setModalOpenAction("edit-event");
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
  const [togglePrintModal, setTogglePrintModal] = useState(1);

  function renderEventContent(eventInfo: any) {
    const isDayGridMonth = calendarApi?.view?.type === "dayGridMonth";
    const eventData = {
      eventId: eventInfo.event.extendedProps.eventId,
      accountId: eventInfo.event.extendedProps.accountId,
      activityId: eventInfo.event.extendedProps.activityId,
      title: eventInfo.event.title,
      start: eventInfo.event.start,
      end: eventInfo.event.end,
      isProtected: eventInfo.event.extendedProps.isProtected,
    };

    let timeText = moment(eventInfo.event.start).format("HH:mm");
    if (timeText === "00:00") timeText = ""; // remove labels for all-day events which start at midnight

    return (
      <div
        className={styles.eventContainer}
        style={{
          backgroundColor:
            showButtons &&
            showButtons.eventId === eventData.eventId &&
            !showButtons.isProtected &&
            isDayGridMonth === "dayGridMonth"
              ? "#f0f0f0"
              : "transparent",
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
  const handlePrint = () => {
    if (printOption === "weekly") {
      console.log("print weekly");
    } else {
      printCalendarPDF(
        events,
        isToggled,
        fullAccount.serviceProviderName,
        calendarRef.current.getApi()
      );
      console.log("print monthly");
    }
    setShowPrintModal(false);
  };

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
      <PrintOptionsModal
        togglePrintModal={togglePrintModal}
        api={calendarApi}
        events={events}
        isToggled={isToggled}
        serviceName={fullAccount?.serviceProviderName || "This weeks plan"}
      />

      <div
        className={`${styles.threeDotsContainer} ${
          threeDots ? styles.open : ""
        }`}
        ref={threeDotsRef}
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
            onClick={() => changeView("dayGridDay")}
          >
            Day
          </button>
          <button
            className={styles.weekButton}
            onClick={() => changeView("timeGridWeek")}
          >
            Week
          </button>
          <button
            className={styles.monthButton}
            onClick={() => changeView("dayGridMonth")}
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
          initialView={isMobile ? "dayGridDay" : "timeGridWeek"}
          headerToolbar={{
            left: isMobile ? "prev,next" : "prev title next",
            right: isMobile ? "" : "printButton scheduleButton threeDots",
          }}
          customButtons={{
            printButton: {
              text: "Print my planner",
              click: function () {
                if (events) {
                  setTogglePrintModal(Math.random()); // This will open the PrintOptionsModal
                  // printCalendarPDF(
                  //   events,
                  //   isToggled,
                  //   fullAccount.serviceProviderName,
                  //   calendarRef.current.getApi()
                  // );
                }
              },
            },
            scheduleButton: {
              text: "Schedule Activity",
              click: function () {
                setToggleScheduleModal(Math.random());
                setModalOpenAction("add-event");
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
            hour: "2-digit",
            minute: "2-digit",
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
              dayHeaderFormat: { month: "short", day: "numeric" },
            },
          }}
        />
      </div>
    </Main>
  );
};

export default Planner;
