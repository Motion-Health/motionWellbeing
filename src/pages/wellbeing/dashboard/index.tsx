import { useEffect, useState } from "react";

import { Alert, Grid, Typography, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PrintIcon from "@mui/icons-material/Print";

import { useRouter } from "next/router";

import { Main } from "@/templates/Main";
import TutorialModal from "@/components/modals/TutorialModal";
import { useAccountContext } from "@/context/AccountContext";
import { ActivityData } from "@/services/activities/useCreateActivity";
import { ActivityCard } from "@/components/ActivityCard";
import { DashboardMetrics } from "@/components/DashboardMetrics";
import { useFavoriteActivities } from "@/services/activities/useFavoriteActivities"
import { useGetAnnouncement } from "@/services/announcements/useGetAnnouncement"
import Head from "next/head"

const Dashboard = () => {
  const router = useRouter();
  const isFirstLogin: boolean = router.query?.isFirstLogin === "true";

  const {
    account: { accountStatus },
  } = useAccountContext();

  const { data: favoriteActivities } = useFavoriteActivities()

  const [favoriteActivitiesList, setFavoriteActivitiesList] = useState<null | ActivityData[]>(null)

  useEffect(() => {
    if (favoriteActivities && favoriteActivities?.length !== 0) {
      setFavoriteActivitiesList([...favoriteActivities].slice(0, 3));
    }
  }, [favoriteActivities]);

  const [alertIsVisible, setAlertIsVisible] = useState(false);
  const { data: announcement } = useGetAnnouncement();

  useEffect(() => {
    setAlertIsVisible(false)
    if (announcement && announcement?.isActive) {
      setAlertIsVisible(true)
    }
  }, [announcement]);

  return (
    <Main>
      <Head>
        <title>Dashboard | Motion Wellbeing</title>
      </Head>
      {isFirstLogin && <TutorialModal />}

      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h1" sx={{ mb: "1rem" }}>
          Welcome back
        </Typography>
        <Button
          onClick={() => {
            window.print();
          }}
          variant="link"
          startIcon={<PrintIcon />}
        >
          Print Screen
        </Button>
      </Grid>
      {alertIsVisible && (
        <Alert
          onClose={() => setAlertIsVisible(false)}
          icon={false}
          severity={announcement.mode}
          sx={{
            position: "relative",
            marginTop: "1rem",
            marginBottom: "2rem",
            padding: "1.5rem",
          }}
        >
          {announcement.content}{" "}
          {announcement?.linkUrl && (
            <Link href={announcement?.linkUrl}>{announcement?.linkText}</Link>
          )}
        </Alert>
      )}

      <DashboardMetrics />

      <Grid sx={{ mt: "3rem" }}>
        <Typography variant="h2">Favourite activities</Typography>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
            mt: "1.5rem",
          }}
        >
          <Grid container>
            {favoriteActivitiesList?.map((activity: ActivityData) => (
              <ActivityCard key={activity.activityId} activity={activity} />
            ))}
          </Grid>
        </Box>
      </Grid>
    </Main>
  );
};

export default Dashboard;
