import {
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import router from 'next/router';
import { useEffect, useState } from 'react';

import { useDashboardRatings } from '@/services/dashboard/useDashboardRatings';

import { DashboardMetricBox } from './DashboardMetricsBox';

export const DashboardMetrics = ({ accountId, accountStatus }) => {
  const [dateRangeFilter, setDateRangeFilter] = useState<string>('7-days');

  const handleDateFilterChange = (event: SelectChangeEvent) => {
    setDateRangeFilter(event.target.value);
  };

  useEffect(() => {
    refetchRatings();
  }, [dateRangeFilter]);

  const { data: averageRating, refetch: refetchRatings } = useDashboardRatings(
    accountId,
    accountStatus,
    dateRangeFilter
  );

  useEffect(() => {
    console.log('--------');
    console.log(accountStatus);
    console.log('--------');
  }, [accountStatus]);

  const [averageActivitiesRatingsDecimal, setAverageActivitiesRatingsDecimal] =
    useState<number | string | null>(null);
  const [averageActivitiesRatingsRounded, setAverageActivitiesRatingsRounded] =
    useState<number | null>(null);

  useEffect(() => {
    if (averageRating !== undefined) {
      const ratingRoundedUp = Math.ceil(parseFloat(averageRating));
      setAverageActivitiesRatingsRounded(ratingRoundedUp);
      setAverageActivitiesRatingsDecimal(averageRating);
    }
  }, [averageRating]);

  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          '@media (max-width: 600px)': {
            padding: '0px 10px',
          },
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h2">Your report</Typography>

          <Select
            id="date-range-filter"
            defaultValue={'7-days'}
            label="Date range"
            onChange={handleDateFilterChange}
            sx={{
              ml: '50%',
              width: '10rem',
              backgroundColor: 'transparent',
              border: 'none',
              '@media (max-width: 600px)': {
                display: 'none',
              },
            }}
          >
            <MenuItem value="7-days">WEEKLY</MenuItem>
            <MenuItem value="1-month">MONTHLY</MenuItem>
            <MenuItem value="all">TOTAL</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
        }}
        spacing={1}
      >
        {averageActivitiesRatingsDecimal !== 0 &&
          averageActivitiesRatingsRounded && (
            <Grid
              item
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                mr: '3rem',
                mt: '1.5rem',
                flexGrow: 1,
                display: 'grid',
              }}
            >
              <img
                src={`/assets/emotions/emotion-${averageActivitiesRatingsRounded}.svg`}
                alt={`${averageActivitiesRatingsRounded} / 5 face icon`}
              />
              <Typography variant="h3">
                {averageActivitiesRatingsDecimal} avg.
              </Typography>
            </Grid>
          )}

        {(accountStatus === 'admin' || accountStatus === 'group') && (
          <DashboardMetricBox
            metricName="Service providers"
            serviceName="accounts"
            dateRangeFilter={dateRangeFilter}
          />
        )}

        <DashboardMetricBox
          metricName="Activities complete"
          serviceName="activities_completed"
          dateRangeFilter={dateRangeFilter}
        />
        {accountStatus != 'gis' && (
          <DashboardMetricBox
            metricName="Participants"
            serviceName="activities_participants"
            dateRangeFilter={dateRangeFilter}
          />
        )}

        <Grid
          item
          sx={{
            maxWidth: '80%',
            backgroundColor: '#CBE8F3',
            borderRadius: 2,
            mt: '1.5rem',
          }}
        >
          <Grid
            container
            onClick={() => router.push('/wellbeing/planner')}
            sx={{
              mr: '1.5rem',
              cursor: 'pointer',
              height: '100%',
              width: { xs: '100%', sm: '250px' },
              position: 'relative',
              maxWidth: '100%',
            }}
          >
            <Grid
              container
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                mt: '1.5rem',
                mb: 0,
              }}
            >
              <img
                src="/assets/icons/ph_calendar-blank.svg"
                alt="Blank calendar icon"
                width="48px"
                height="52px"
              />
            </Grid>
            <Grid
              container
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                mb: '1.5rem',
              }}
            >
              <Typography variant="h3">My planner</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ flexWrap: 'nowrap', flexGrow: 1 }}></Grid>
    </>
  );
};
