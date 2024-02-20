import PrintIcon from '@mui/icons-material/Print';
import { Alert, Grid, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {useGetPublicAccount} from '@/services/account/useGetPublicAccount';
import { ActivityCard } from '@/components/ActivityCard';
import { DashboardMetrics } from '@/components/DashboardMetrics';
import TutorialModal from '@/components/modals/TutorialModal';
import { useFavoriteActivities } from '@/services/activities/useFavoriteActivities';
import { useGetAnnouncement } from '@/services/announcements/useGetAnnouncement';
import { Main } from '@/templates/Main';
import React from 'react';
const useSuccessBanner = (query) => {
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showFailBanner, setShowFailBanner] = useState(false);
  const [failMessage, setFailMessage] = useState(null);


  return [showSuccessBanner, successMessage, setShowSuccessBanner];
};

const Dashboard = () => {
  const router = useRouter();
  const { accountId } = router.query;
  console.log('accountId', accountId);
  const account = useGetPublicAccount(accountId);
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

  useEffect(() => {
    console.log('account', account);
  }, [account]);
  return (
    <Main>
      <Head>
        <title>Window Into Wellbeing | Motion Wellbeing</title>
      </Head>
      

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
        <Typography variant="h1">Wellbeing Report</Typography>
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
      <DashboardMetrics accountId="123" accountStatus="active" />/
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
