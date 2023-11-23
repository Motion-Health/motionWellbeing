import { CalendarApi } from '@fullcalendar/react'; // Assuming getWeeksInMonth is a helper function from FullCalendar or similar
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Dialog,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { useEffect, useState } from 'react';

import theme from '@/styles/theme';
import { printCalendarPDF } from '@/utils/makePlannerPrintable.js';

import styles from './printOptions.module.css';

type PrintOptionsModalProps = {
  togglePrintModal: number;
  api: CalendarApi | null; // Assuming api is of type CalendarApi, adjust if different
  events: Event[]; // Assuming events is an array of Event type, adjust if different
  isToggled: boolean;
  serviceName: string;
};

const PrintOptionsModal: React.FC<PrintOptionsModalProps> = ({
  togglePrintModal,
  api,
  events,
  isToggled,
  serviceName,
}) => {
  dayjs.extend(weekOfYear);
  dayjs.extend(weekday);
  // dayjs.locale('custom', {
  //   weekStart: 1, // Set Monday as the first day of the week
  // });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [printOption, setPrintOption] = useState('monthly'); // 'weekly' or 'monthly'
  const [selectedWeek, setSelectedWeek] = useState(1);
  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setIsModalOpen(togglePrintModal !== 1);
  }, [togglePrintModal]);

  const handlePrint = () => {
    if (printOption === 'weekly') {
      printCalendarPDF(events, isToggled, serviceName, api, selectedWeek);
    } else {
      printCalendarPDF(events, isToggled, serviceName, api, null);
    }
    setIsModalOpen(false);
  };

  const [weeksInMonth, setWeeksInMonth] = useState<string[]>([]);

  useEffect(() => {
    setIsModalOpen(togglePrintModal !== 1);
    if (api) {
      calculateWeeks();
    }
  }, [togglePrintModal, api]);

  const calculateWeeks = () => {
    dayjs.locale('en-gb'); // Set locale where week starts on Monday

    const currentMonth = dayjs(api.getDate()).month();
    const currentYear = dayjs(api.getDate()).year();
    const startOfMonth = dayjs(new Date(currentYear, currentMonth, 1));
    const endOfMonth = dayjs(new Date(currentYear, currentMonth + 1, 0));
    const weekRanges = [];

    // Start from the Monday of the week that includes the start of the month
    let currentWeekStart = startOfMonth.day(1); // If the first day of the month is Monday, this will be the same as startOfMonth

    while (
      currentWeekStart.isBefore(endOfMonth) ||
      currentWeekStart.isSame(endOfMonth)
    ) {
      const currentWeekEnd = currentWeekStart.add(6, 'day'); // 6 days after Monday is Sunday
      weekRanges.push(
        `${currentWeekStart.format('MMM DD')} - ${currentWeekEnd.format(
          'MMM DD'
        )}`
      );
      currentWeekStart = currentWeekEnd.add(1, 'day');
    }

    setWeeksInMonth(weekRanges);
    setSelectedWeek(weekRanges[0]);
  };

  return (
    <Dialog
      open={isModalOpen}
      fullScreen={shouldDisplayFullScreen}
      className="print-options-modal-wrapper"
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

      <Box sx={{ margin: '3rem' }}>
        <Typography variant="h1">Print options</Typography>

        <FormControl component="fieldset" style={{ display: 'flex' }}>
          <RadioGroup
            aria-label="print-option"
            name="print-option"
            value={printOption}
            onChange={(event) => setPrintOption(event.target.value)}
          >
            <FormControlLabel
              value="weekly"
              control={<Radio />}
              label="Weekly"
            />
            <FormControlLabel
              value="monthly"
              control={<Radio />}
              label="Monthly"
            />
          </RadioGroup>

          {printOption === 'weekly' && (
            <FormControl fullWidth>
              <Select
                labelId="week-selector-label"
                id="week-selector"
                value={selectedWeek}
                label="Week"
                onChange={(event) => setSelectedWeek(event.target.value)}
              >
                {weeksInMonth.map((weekNumber) => (
                  <MenuItem key={weekNumber} value={weekNumber}>
                    {weekNumber}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </FormControl>
      </Box>
      <Button
        className={styles.printButton}
        variant="contained"
        onClick={handlePrint}
        sx={{ mt: '1rem', mr: '1rem' }}
      >
        Print
      </Button>
      <Button
        className={styles.cancelButton}
        variant="text"
        onClick={() => setIsModalOpen(false)}
        sx={{ mt: '1rem' }}
      >
        Cancel
      </Button>
    </Dialog>
  );
};

export default PrintOptionsModal;
