import PrintIcon from '@mui/icons-material/Print';
import { Alert, Grid, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ActivityCard } from '@/components/ActivityCard';
import { DashboardMetrics } from '@/components/DashboardMetrics';
import TutorialModal from '@/components/modals/TutorialModal';
import { useAccountContext } from '@/context/AccountContext';
import { useFavoriteActivities } from '@/services/activities/useFavoriteActivities';
import { useGetAnnouncement } from '@/services/announcements/useGetAnnouncement';
import { Main } from '@/templates/Main';
const useSuccessBanner = (query) => {
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showFailBanner, setShowFailBanner] = useState(false);
  const [failMessage, setFailMessage] = useState(null);

  useEffect(() => {
    const { task, success, upgrade } = query;
    console.log('task', task);
    if (task === 'complete') {
      setSuccessMessage('Success, activity completed!');
      setShowSuccessBanner(true);
    } else if (success === 'true' && upgrade === 'premium') {
      setSuccessMessage('Success, you are now a premium member!');
      setShowSuccessBanner(true);
    } else if (task === 'not-found') {
      console.log('task not found');
      setFailMessage('Activity not found!');
      setShowFailBanner(true);
    }
  }, [query]);

  return [showSuccessBanner, successMessage, setShowSuccessBanner];
};

const Dashboard = () => {
  const router = useRouter();
  const { isFirstLogin } = router.query;
  const {
    account: { accountStatus },
  } = useAccountContext();
  const [showSuccessBanner, successMessage, setShowSuccessBanner] =
    useSuccessBanner(router.query);

  const { data: favoriteActivities } = useFavoriteActivities();
  const [favoriteActivitiesList, setFavoriteActivitiesList] = useState([]);
  useEffect(() => {
    if (favoriteActivities?.length) {
      setFavoriteActivitiesList(favoriteActivities.slice(0, 3));
    }
  }, [favoriteActivities]);

  const { data: announcement } = useGetAnnouncement();
  const [alertIsVisible, setAlertIsVisible] = useState(false);
  useEffect(() => {
    setAlertIsVisible(announcement?.isActive || false);
  }, [announcement]);

  return (
    <Main>
      <Head>
        <title>Dashboard | Motion Wellbeing</title>
      </Head>
      {isFirstLogin && <TutorialModal />}

      {showSuccessBanner && successMessage && (
        <Alert
          sx={{ position: 'inherit' }}
          severity="success"
          onClose={() => setShowSuccessBanner(false)}
        >
          {successMessage}
        </Alert>
      )}
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h1">Welcome back</Typography>
        {/* if not GIS acount type */}
        {accountStatus !== 'gis' && (
          <Button
            variant="link"
            startIcon={<PrintIcon />}
            onClick={() => window.print()}
          >
            Print Screen
          </Button>
        )}
      </Grid>
      {alertIsVisible && (
        <Alert
          onClose={() => setAlertIsVisible(false)}
          severity={announcement.mode}
        >
          {announcement.content}
          {announcement?.linkUrl && (
            <Link href={announcement.linkUrl}>{announcement.linkText}</Link>
          )}
        </Alert>
      )}
      <DashboardMetrics accountStatus={accountStatus} />
      <Grid sx={{ mt: '3rem' }}>
        <Typography variant="h2">Favourite activities</Typography>
        <Box
          sx={{
            borderRadius: 2,
            minWidth: 300,
          }}
        >
          <Grid
            className="curved-corners activities"
            container
            sx={{
              minWidth: 300,
            }}
          >
            {Array.isArray(favoriteActivitiesList) &&
              favoriteActivitiesList?.map((activity) => (
                <ActivityCard key={activity.activityId} activity={activity} />
              ))}
          </Grid>
        </Box>
      </Grid>
    </Main>
  );
};

export default Dashboard;
