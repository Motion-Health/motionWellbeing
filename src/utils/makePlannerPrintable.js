import jsPDF from 'jspdf';
import dayjs from 'dayjs';

function createPDF() {
  return new jsPDF({ orientation: 'landscape' });
}
function printMonthHeader(startOfMonth, pdf, accountName) {
  pdf.setFontSize(25);
  // if accountanme is too long then split int two lines and still if to long truncate it
  if (accountName.length > 20) {
    // Find the nearest space before the 20th character
    let splitIndex = accountName.lastIndexOf(' ', 20);
    if (splitIndex === -1) splitIndex = 20; // If no space found, default to 20

    const firstLine = accountName.substring(0, splitIndex);
    let secondLine = accountName.substring(splitIndex + 1);

    // Truncate the second line if it's too long
    if (secondLine.length > 20) {
      secondLine = secondLine.substring(0, 17) + '...';
    }

    pdf.text(firstLine, 10, 10, null, 'left');
    pdf.text(secondLine, 10, 20, null, 'left'); // Adjust the Y-coordinate as needed
  } else {
    pdf.text(accountName, 10, 20, null, 'left');
  }

  pdf.addImage('/assets/logos/PoweredByMotion.png', 'PNG', 250, 12, 36, 8);
  pdf.setFontSize(40);
  pdf.text(
    startOfMonth,
    pdf.internal.pageSize.getWidth() / 2,
    20,
    null,
    'center'
  );
}
function printDayLabels(pdf, startX, startY) {
  const dayLabels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const cellWidth = (pdf.internal.pageSize.getWidth() - 10) / dayLabels.length;

  pdf.setFontSize(12);
  dayLabels.forEach((label, index) => {
    const x = startX + index * cellWidth;
    const y = startY - 10;
    pdf.setFillColor(15, 82, 152);
    pdf.setTextColor(255);
    pdf.roundedRect(x + 2, y, cellWidth - 4, 8, 4, 4, 'DF');
    pdf.text(
      label,
      index * cellWidth + 5 + cellWidth / 2,
      startY - 5,
      null,
      'center'
    );
  });
  pdf.setTextColor(0);
}

export function createDaySlots(startOfMonth, daysInMonth) {
  let daySlots = new Array(42).fill(null); // 6 weeks * 7 days
  for (let i = 0; i < daysInMonth; i++) {
    const date = startOfMonth.add(i, 'day');
    const dayOfWeek = (date.day() + 6) % 7; // Adjust so Monday is 0, Sunday is 6
    const weekOfMonth = Math.floor(
      (date.date() - 1 + ((startOfMonth.day() + 6) % 7)) / 7
    );

    const index = weekOfMonth * 7 + dayOfWeek;
    daySlots[index] = date.format('D'); // Store only the day number for simplicity
  }
  return daySlots;
}

function drawCalendarGrid(daySlots, pdf, startX, startY) {
  const daysInWeek = 7;
  const firstDayIndex = daySlots.findIndex((day) => day != null); // Find the first non-null index
  const lastDayIndex =
    daySlots.length -
    1 -
    [...daySlots].reverse().findIndex((day) => day != null);

  // Calculate weekCount based on the indexes of the first and last days
  const weekCount = Math.ceil((lastDayIndex + 1) / daysInWeek);

  const cellWidth = (pdf.internal.pageSize.getWidth() - 10) / daysInWeek;
  const totalHeightAvailable = pdf.internal.pageSize.getHeight() - startY - 5;
  const cellHeight = totalHeightAvailable / weekCount;

  for (let i = 0; i < daysInWeek; i++) {
    for (let j = 0; j < weekCount; j++) {
      const x = startX + i * cellWidth;
      const y = j * cellHeight + startY;
      const index = j * daysInWeek + i; // Use a direct index without offset
      const day = daySlots[index];

      pdf.setDrawColor(0);
      pdf.setFillColor(255); // White color for days
      if (day) {
        pdf.setFillColor(191, 209, 231);

        pdf.roundedRect(
          x,
          y,
          cellWidth,
          cellHeight,
          3,
          3,
          j % 2 == 0 ? 'DF' : 'S'
        );
      } else {
        pdf.setFillColor(215, 215, 215);
        pdf.roundedRect(
          x,
          y,
          cellWidth,
          cellHeight,
          3,
          3,
          j % 2 == 0 ? 'DF' : 'S'
        );
      }
    }
  }
}
function drawWeeklyCalendarGrid(daySlots, pdf, startX, startY) {
  const daysInWeek = 7; // Assuming a week has 7 days

  // The week's data can be a subset of daySlots, or directly the daySlots if it already represents one week
  // Here, I'm assuming daySlots already represents a single week

  const cellWidth = (pdf.internal.pageSize.getWidth() - 10) / daysInWeek;
  const cellHeight = pdf.internal.pageSize.getHeight() - startY - 5;

  for (let i = 0; i < daysInWeek; i++) {
    const x = startX + i * cellWidth;
    const y = startY;
    const day = daySlots[i];

    pdf.setDrawColor(0);
    pdf.setFillColor(255); // White color for days
    if (i % 2 == 0) {
      pdf.setFillColor(191, 209, 231); // Highlighted color for days with data
    } else {
      pdf.setFillColor(247, 251, 254); // Highlighted color for days with data
    }
    pdf.roundedRect(x, y, cellWidth, cellHeight, 3, 3, 'DF');
  }
}

function addEventsToCalendar(
  daySlots,
  events,
  isToggled,
  pdf,
  startX,
  startY,
  month
) {
  const cellWidth = (pdf.internal.pageSize.getWidth() - 10) / 7; // 7 days in a week
  const daysInWeek = 7;
  const totalHeightAvailable = pdf.internal.pageSize.getHeight() - startY - 5;
  const lastDayIndex =
    daySlots.length -
    1 -
    [...daySlots].reverse().findIndex((day) => day != null);

  // Calculate weekCount based on the indexes of the first and last days
  const weekCount = Math.ceil((lastDayIndex + 1) / daysInWeek);
  const cellHeight = totalHeightAvailable / weekCount;

  pdf.setFontSize(10);

  daySlots.forEach((day, index) => {
    if (day) {
      const x = startX + (index % daysInWeek) * cellWidth;
      const y = Math.floor(index / daysInWeek) * cellHeight + startY + 5;

      pdf.text(day, x + 2, y); // Add the day of the month

      const eventsForDay = events
        .filter(
          (event) =>
            dayjs(event.start).format('D') === day &&
            dayjs(event.start).month() === month
        )
        .filter(
          (event) => event.isProtected === isToggled || !event.isProtected
        )
        .slice(0, 2); // Limiting to 2 events for simplicity

      eventsForDay.forEach((event, eventIndex) => {
        const lines = splitTextToLines(
          event.title.split('|')[0],
          cellWidth - 4,
          pdf
        );
        const timeText = dayjs(event.start).format('hh:mm A');
        pdf.text(lines[0], x + 2, y + 5 + eventIndex * 11);
        if (lines[1] && lines[1].length != 0) {
          const text = truncateString(lines[1], cellWidth - 31);
          pdf.text(text, x + 2, y + 9 + eventIndex * 12);
          if (timeText !== '00:00') {
            pdf.text(timeText, x + 24, y + 9 + eventIndex * 11);
          }
        } else {
          if (timeText !== '00:00') {
            pdf.text(timeText, x + 2, y + 9 + eventIndex * 11);
          }
        }
      });
    }
  });
}

function addWeeklyEventsToCalendar(
  daySlots,
  events,
  isToggled,
  pdf,
  startX,
  startY,
  week
) {
  console.log('week', week);
  const cellWidth = (pdf.internal.pageSize.getWidth() - 10) / 7; // 7 days in a week
  const daysInWeek = 7;
  const totalHeightAvailable = pdf.internal.pageSize.getHeight() - startY - 5;
  const start = dayjs(String(week).split('-')[0]);
  const currentDay = week.day();
  console.log('currentDay', currentDay);
  const lastDayIndex =
    daySlots.length -
    1 -
    [...daySlots].reverse().findIndex((day) => day != null);

  // Calculate weekCount based on the indexes of the first and last days
  const weekCount = Math.ceil((lastDayIndex + 1) / daysInWeek);
  const cellHeight = totalHeightAvailable / weekCount;

  // look 7 times
  for (let i = 0; i < daysInWeek; i++) {
    let day = start;
    if (i != 0) {
      day = start.add(i, 'day');
    }
    const x = 5 + i * cellWidth;
    const y = startY + 10; // Adjust as necessary
    pdf.setFontSize(20);
    pdf.text(day.format('DD'), x + cellWidth / 2, y, 'center'); // Add the day of the month
    pdf.setFontSize(10);
    const eventsForDay = events
      .filter(
        (event) =>
          dayjs(event.start).format('D') === day.format('D') &&
          dayjs(event.start).month() === day.month()
      )
      .filter((event) => event.isProtected === isToggled || !event.isProtected);

    eventsForDay.forEach((event, eventIndex) => {
      const lines = splitTextToLines(
        event.title.split('|')[0],
        cellWidth - 4,
        pdf
      );
      const timeText = dayjs(event.start).format('hh:mm A');
      pdf.text(lines[0], x + 2, y + 5 + eventIndex * 11);
      if (lines[1] && lines[1].length != 0) {
        const text = truncateString(lines[1], cellWidth - 31);
        pdf.text(text, x + 2, y + 9 + eventIndex * 12);
        if (timeText !== '00:00') {
          pdf.text(timeText, x + 24, y + 9 + eventIndex * 11);
        }
      } else {
        if (timeText !== '00:00') {
          pdf.text(timeText, x + 2, y + 9 + eventIndex * 11);
        }
      }
    });
  }
}

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num - 1) + '...'; // Subtract 1 to account for the length of the ellipsis
  } else {
    return str;
  }
}
export function createWeeklyDaySlots(startOfWeek) {
  let daySlots = new Array(7).fill(null); // 1 week * 7 days
  for (let i = 0; i < 7; i++) {
    const date = startOfWeek.add(i, 'day');
    daySlots[i] = date.format('D');
  }
  return daySlots;
}
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
      lines[lines.length - 1].substring(0, lines[lines.length - 1].length - 3) +
      '...';
  }
  return lines;
}

function openPDF(pdf) {
  window.open(pdf.output('bloburl'), '_blank');
}

export function printCalendarPDF(
  events,
  isToggled,
  accountName,
  calendarApi,
  week
) {
  const pdf = createPDF();
  pdf.setFont('Montserrat');
  const startOfMonth = dayjs(calendarApi.getDate()).startOf('month');
  console.log(week);
  const startOfWeek = week ? dayjs(week).startOf('week') : null;
  console.log(week);
  console.log('startOfWeek', startOfWeek);

  printMonthHeader(
    week ? week : startOfMonth.format('MMMM YYYY'),
    pdf,
    accountName
  );

  const startX = 5,
    startY = 45;
  printDayLabels(pdf, startX, startY);

  let daySlots;
  if (week) {
    daySlots = createWeeklyDaySlots(startOfWeek);
    drawWeeklyCalendarGrid(daySlots, pdf, startX, startY);
  } else {
    const daysInMonth = startOfMonth.endOf('month').date();
    daySlots = createDaySlots(startOfMonth, daysInMonth);
    drawCalendarGrid(daySlots, pdf, startX, startY);
  }
  week
    ? addWeeklyEventsToCalendar(
        daySlots,
        events,
        isToggled,
        pdf,
        startX,
        startY,
        dayjs(week, 'MMM DD')
      )
    : addEventsToCalendar(
        daySlots,
        events,
        isToggled,
        pdf,
        startX,
        startY,
        startOfMonth.month()
      );

  openPDF(pdf);
}
