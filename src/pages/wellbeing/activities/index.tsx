import { Button, Grid, Typography } from "@mui/material";

import PageHeader from "@/components/PageHeader/index";
import ActivitySearch from "@/components/ActivitySearch";
import { Main } from "@/templates/Main";
import { useListActivities } from "@/services/activities/useListActivities";
import { useEffect, useState } from "react";
import ActivitiesFormModal from "@/components/modals/ActivitiesFormModal";
import { ActivityData } from "@/services/activities/useCreateActivity";
import { ActivityCard } from "@/components/ActivityCard";
import { useAccountContext } from "@/context/AccountContext";
import { useRouter } from "next/router";
import { ActivitiesFilters } from "@/components/ActivitiesFilters";
import { useActivityTags } from "@/services/activities/useActivityTags";
import { useActivityTimeLengths } from "@/services/activities/useActivityTimeLengths";
import Head from "next/head";

const Activities = () => {
  const {
    account: { accountStatus },
  } = useAccountContext();

  const [toggleActivitiesFormModal, setToggleActivitiesFormModal] =
    useState<number>(1);
  const [modalOpenAction, setModalOpenAction] = useState<string | null>(null);

  const router = useRouter();
  const categoryQuery: string | string[] = router.query.filter || "";

  const [filterByCategory, setFilterByCategory] = useState<string | null>(null);

  useEffect(() => {
    setFilterByCategory(categoryQuery);
  }, [categoryQuery]);

  const { data: activityTags } = useActivityTags();
  const { data: timeLengths } = useActivityTimeLengths();

  const [filterValues, setFilterValues] = useState<any[]>([]);
  const [filterByTags, setFilterByTags] = useState<string[]>([]);
  const [filterByTimeLengths, setFilterByTimeLengths] = useState<string[]>([]);

  const handleFilterChange = (filterValues: any[]) => {
    setFilterValues(filterValues);
  };

  useEffect(() => {
    if (!filterValues.includes("all") && filterValues?.length) {
      const activityTagValues = activityTags?.map((tag) => tag.value);
      if (activityTagValues?.length) {
        const filterByTags = filterValues.filter((filter) =>
          activityTagValues.includes(filter),
        );
        setFilterByTags(filterByTags);
      }

      const timeLengthsValues = timeLengths?.map(
        (timeLength) => timeLength.value,
      );
      if (timeLengthsValues?.length) {
        const filterByTimeLengths = filterValues.filter((filter) =>
          timeLengthsValues.includes(filter),
        );
        setFilterByTimeLengths(filterByTimeLengths);
      }
    } else {
      setFilterByTags([]);
      setFilterByTimeLengths([]);
    }
  }, [filterValues]);

  const { data: activities, refetch: refetchActivities } = useListActivities(
    filterByCategory,
    filterByTags,
    filterByTimeLengths,
  );

  const [displayActivities, setDisplayActivities] = useState<
    ActivityData[] | null
  >(null);

  useEffect(() => {
    if (activities?.length !== undefined) {
      setDisplayActivities(activities);
    }
  }, [activities]);

  const [allActivitiesAreHidden, setAllActivitiesAreHidden] =
    useState<boolean>(false);
  useEffect(() => {
    setAllActivitiesAreHidden(false);

    if (accountStatus === "group" || accountStatus === "premium") {
      const hasPremiumActivities = displayActivities?.find((activity) =>
        activity.visibleToUsers?.includes("premium"),
      );

      setAllActivitiesAreHidden(!hasPremiumActivities);
    }

    let visibleToUsersCount = 0;
    displayActivities?.forEach((activity) => {
      if (activity.visibleToUsers) {
        visibleToUsersCount += activity.visibleToUsers?.length;
      }
    });

    if (visibleToUsersCount === 0) {
      setAllActivitiesAreHidden(true);
    }
  }, [displayActivities]);

  const onCreateActivity = () => {
    setToggleActivitiesFormModal(Math.random());
    setModalOpenAction("create-activity");
  };

  const handleActivitySaved = (newActivity: ActivityData) => {
    refetchActivities();
  };

  const handleSearchedData = (searchedActivities: ActivityData[]) => {
    if (searchedActivities !== null) {
      setDisplayActivities(searchedActivities);
    } else {
      setDisplayActivities(activities);
    }
  };

  const [toggleFilterIsOpen, setToggleFilterIsOpen] = useState<boolean>(false);

  const onFilterButtonClick = () => {
    if (!toggleFilterIsOpen) {
      setToggleFilterIsOpen(true);
    } else {
      setToggleFilterIsOpen(false);
    }
  };

  return (
    <Main>
      <Head>
        <title>Wellbeing activities | Motion Wellbeing</title>
      </Head>
      <ActivitiesFormModal
        toggleActivitiesFormModal={toggleActivitiesFormModal}
        modalOpenAction={modalOpenAction}
        activityData={null}
        onActivitySaved={handleActivitySaved}
      />

      <PageHeader title="Wellbeing activities">
        {accountStatus === "admin" && (
          <Button variant="contained" onClick={() => onCreateActivity()}>
            Create activity
          </Button>
        )}
      </PageHeader>

      <ActivitySearch
        placeholder="Search activities..."
        data={activities}
        searchKey="activityName"
        searchedData={handleSearchedData}
      >
        <Grid item sx={{ position: "relative" }}>
          <Button variant="link" onClick={() => onFilterButtonClick()}>
            Filters &nbsp;
            {toggleFilterIsOpen ? (
              <img src="/assets/icons/ph_x.svg" alt="close" />
            ) : (
              <img src="/assets/icons/ph_sliders.svg" alt="slider" />
            )}
          </Button>

          {toggleFilterIsOpen && (
            <ActivitiesFilters onFilterChange={handleFilterChange} />
          )}
        </Grid>
      </ActivitySearch>

      <Grid
        container
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          px: "1rem",
          py: "1.5rem",
          minWidth: 300,
          mt: "1.5rem",
        }}
      >
        {displayActivities?.length !== 0 &&
          displayActivities?.map((activity: ActivityData) => (
            <ActivityCard key={activity.activityId} activity={activity} />
          ))}

        {(displayActivities?.length === 0 || allActivitiesAreHidden) && (
          <Typography sx={{ textAlign: "center" }}>
            There are no activities to display
          </Typography>
        )}
      </Grid>
    </Main>
  );
};

export default Activities;
