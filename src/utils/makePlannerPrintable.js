// printPdfPlanner.js

import jsPDF from 'jspdf';
import dayjs from 'dayjs';
// ... other necessary imports

export function createPDF() {
  return new jsPDF({ orientation: 'landscape' });
}

export function printMonthHeader(startOfMonth, pdf, accountName, logo) {
  pdf.setFont('helvetica', 'bold');
  pdf.text(accountName, 10, 10);
  pdf.addImage(logo, 'PNG', 10, 15, 60, 20);

  pdf.setFontSize(17);
  pdf.text(
    startOfMonth.format('MMMM YYYY'),
    pdf.internal.pageSize.getWidth() / 2,
    10,
    null,
    'center'
  );
  pdf.setFont('helvetica', 'normal');
}

export function printDayLabels(pdf, startX, startY) {
  const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const cellWidth = (pdf.internal.pageSize.getWidth() - 10) / dayLabels.length;

  pdf.setFontSize(12);
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

export function drawCalendarGrid(daySlots, pdf, startX, startY) {
  const daysInWeek = 7;
  const weekCount = Math.ceil(daySlots.length / daysInWeek);
  const cellWidth = (pdf.internal.pageSize.getWidth() - 10) / daysInWeek;
  const totalHeightAvailable = pdf.internal.pageSize.getHeight() - startY - 20;
  const cellHeight = totalHeightAvailable / weekCount;

  for (let i = 0; i < daysInWeek; i++) {
    for (let j = 0; j < weekCount; j++) {
      const x = startX + i * cellWidth;
      const y = j * cellHeight + startY;
      const index = j * daysInWeek + i;
      const day = daySlots[index];

      const fill = j % 2 === 0 ? 'DF' : 'S';
      pdf.setFillColor(day ? 230 : 0, day ? 230 : 0, day ? 230 : 0);
      pdf.rect(x, y, cellWidth, cellHeight, fill);
    }
  }
}

export function addEventsToCalendar(
  daySlots,
  events,
  isToggled,
  pdf,
  startX,
  startY
) {
  const cellWidth = (pdf.internal.pageSize.getWidth() - 10) / 7; // 7 days in a week
  const daysInWeek = 7;
  const totalHeightAvailable = pdf.internal.pageSize.getHeight() - startY - 20;
  const weekCount = Math.ceil(daySlots.length / daysInWeek);
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
            dayjs(event.start).month() === dayjs().month()
        )
        .filter(
          (event) => event.isProtected === isToggled || !event.isProtected
        )
        .slice(0, 2); // Limiting to 2 events for simplicity

      eventsForDay.forEach((event, eventIndex) => {
        const eventTitle = event.title.split('|')[0]; // Assuming title is separated by '|'
        const timeText = dayjs(event.start).format('HH:mm'); // Assuming 24-hour format

        pdf.text(eventTitle, x + 2, y + 10 + eventIndex * 10); // Positioning might need adjustment
        pdf.text(timeText, x + cellWidth - 15, y + 10 + eventIndex * 10); // Adjust as needed
      });
    }
  });
}

export function openPDF(pdf) {
  window.open(pdf.output('bloburl'), '_blank');
}

function printCalendarPDF(events, isToggled, accountName, logo) {
  const pdf = createPDF();
  const startOfMonth = dayjs().startOf('month'); // or any other start date you want
  printMonthHeader(startOfMonth, pdf, accountName, logo);
  const startX = 5,
    startY = 45;
  printDayLabels(pdf, startX, startY);

  const daysInMonth = dayjs().endOf('month').date();
  const daySlots = createDaySlots(startOfMonth, daysInMonth);
  drawCalendarGrid(daySlots, pdf, startX, startY);
  addEventsToCalendar(daySlots, events, isToggled, pdf, startX, startY);

  openPDF(pdf);
}
