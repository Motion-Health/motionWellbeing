import {
  Alert,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ActivitiesFilters } from '@/components/ActivitiesFilters';
import { ActivityCard } from '@/components/ActivityCard';
import ActivitySearch from '@/components/ActivitySearch';
import { GameCard } from '@/components/GameCard';
import ActivitiesFormModal from '@/components/modals/ActivitiesFormModal';
import PageHeader from '@/components/PageHeader/index';
import { useAccountContext } from '@/context/AccountContext';
import { categories } from '@/data/categories.ts';
import { useActivityTags } from '@/services/activities/useActivityTags';
import { useActivityTimeLengths } from '@/services/activities/useActivityTimeLengths';
import { ActivityData } from '@/services/activities/useCreateActivity';
import { useListActivities } from '@/services/activities/useListActivities';
import { Main } from '@/templates/Main';

import activityStyle from './activityStyle.module.css';
const Activities = () => {
  const {
    account: { accountStatus },
  } = useAccountContext();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const router = useRouter();
  const [showFailBanner, setShowFailBanner] = useState(false);
  const [failMessage, setFailMessage] = useState(null);
  const categoryQuery: string | string[] = router.query.filter || '';
  const games = [
    {
      id: 1,
      name: 'Snake',
      description: 'A classic game of snake',
      instructions:
        'Use the arrow keys to move the snake around the screen. Eat the apples to grow longer. Avoid hitting yourself.',
      link: '/wellbeing/games/snake-game',
    },
    {
      id: 2,
      name: 'Quizzical',
      description: 'A quiz game',
      instructions: 'Answer the questions to get points.',
      link: '/wellbeing/games/quizzical',
    },
    {
      id: 3,
      name: 'Colour Memory',
      description: 'A memory game',
      instructions:
        "Remember the colours your have clicked and don't repeat them.",
      link: '/wellbeing/games/colour-game',
    },
    {
      id: 4,
      name: 'Noughts and Crosses',
      description: 'A classic game of noughts and crosses',
      instructions:
        'Get three in a row to win! Click the button below to go back to the Wellbeing page.',
      link: '/wellbeing/games/noughts-crosses',
    },
    {
      id: 5,
      name: 'Hangman',
      description: 'A classic game of hangman',
      instructions:
        'Guess the word by clicking on the letters. You have 6 lives.',
      link: '/wellbeing/games/hangman',
    },
    // {
    //   id: 6,
    //   name: 'Tetris',
    //   description: 'A classic game of Tetris',
    //   instructions:
    //     'Use the arrow keys to move the blocks around the screen. Use the space bar to rotate the blocks. Fill a row to clear it.',
    //   link: '/wellbeing/games/tetris',
    // },
    {
      id: 7,
      name: 'Sudoku',
      description: 'A classic game of sudoku',
      instructions:
        'Use the arrow keys to move the blocks around the screen. Use the space bar to rotate the blocks. Fill a row to clear it.',
      link: '/wellbeing/games/sudoku',
    },
    {
      id: 8,
      name: 'Pong',
      description: 'A classic game of pong',
      instructions:
        'Use the arrow keys to move the blocks around the screen. Use the space bar to rotate the blocks. Fill a row to clear it.',
      link: '/wellbeing/games/pong',
    },
  ];
  useEffect(() => {
    if (router.query.task === 'complete') {
      setSuccessMessage('Success, activity completed!');
      setShowSuccessBanner(true);
      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, task: undefined },
        },
        undefined,
        { shallow: true }
      );
    } else if (router.query.task === 'not-found') {
      setFailMessage('Activity not found!');
      setShowFailBanner(true);
      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, task: undefined },
        },
        undefined,
        { shallow: true }
      );
    }
  }, [router.query]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggleActivitiesFormModal, setToggleActivitiesFormModal] =
    useState<number>(1);
  const [modalOpenAction, setModalOpenAction] = useState<string | null>(null);

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
    // Get initial filter values from the URL
    const initialFilterValues = Object.values(router.query);
    setFilterValues(initialFilterValues);
  }, []);
  useEffect(() => {
    // Restore filter values from the URL
    const filterValuesFromURL = Object.values(router.query);
    setFilterValues(filterValuesFromURL);
  }, [router.query]);

  useEffect(() => {
    if (!filterValues.includes('all') && filterValues?.length) {
      const activityTagValues = activityTags?.map((tag) => tag.value);
      if (activityTagValues?.length) {
        const filterByTags = filterValues.filter((filter) =>
          activityTagValues.includes(filter)
        );
        setFilterByTags(filterByTags);
      }

      const timeLengthsValues = timeLengths?.map(
        (timeLength) => timeLength.value
      );
      if (timeLengthsValues?.length) {
        const filterByTimeLengths = filterValues.filter((filter) =>
          timeLengthsValues.includes(filter)
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
    filterByTimeLengths
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

    if (accountStatus === 'group' || accountStatus === 'premium') {
      const hasPremiumActivities = displayActivities?.find((activity) =>
        activity.visibleToUsers?.includes('premium')
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
    setModalOpenAction('create-activity');
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
  const [showScrollButton, setShowScrollButton] = useState(true);

  const handleScrollForMore = () => {
    document.body.scrollBy({
      top: 400, // Scroll down by 400 pixels
      behavior: 'smooth',
    });
  };

  const checkScrollPosition = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.body;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setShowScrollButton(false);
    } else {
      setShowScrollButton(true);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    document.body.addEventListener('scroll', checkScrollPosition);
    return () => {
      document.body.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <Main>
      <Head>
        <title>Wellbeing activities | Motion Wellbeing</title>
        <meta name="description" content="Wellbeing activities" />
      </Head>
      {showFailBanner && failMessage && (
        <Alert
          sx={{ position: 'inherit', marginBottom: '1rem' }}
          severity="error"
          onClose={() => setShowFailBanner(false)}
        >
          {failMessage}
        </Alert>
      )}
      {showSuccessBanner && successMessage && (
        <>
          <Alert
            severity="success"
            sx={{ mt: '1rem', mb: '1rem', width: '100%', position: 'relative' }}
            onClose={() => setShowSuccessBanner(false)} // Add this line for close button
          >
            {successMessage}
          </Alert>
        </>
      )}

      <ActivitiesFormModal
        toggleActivitiesFormModal={toggleActivitiesFormModal}
        modalOpenAction={modalOpenAction}
        activityData={null}
        onActivitySaved={handleActivitySaved}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <PageHeader title="Wellbeing activities">
        {accountStatus === 'admin' && (
          <Button variant="contained" onClick={() => onCreateActivity()}>
            Create activity
          </Button>
        )}
      </PageHeader>

      <ActivitySearch
        className={activityStyle.search}
        placeholder="Search activities..."
        data={activities}
        searchKey="activityName"
        searchedData={handleSearchedData}
      >
        <Grid container item sx={{ position: 'relative', width: 'auto' }}>
          <List sx={{ padding: 0, display: 'flex' }}>
            {categories.map((category) => (
              <ListItem
                key={category.title}
                onClick={() =>
                  router.push(
                    {
                      pathname: page.path,
                      query: { filter: category.filter },
                    },
                    page.path
                  )
                }
                style={{ width: 'fit-content' }}
                disablePadding
              >
                <ListItemButton style={{ padding: '0', paddingRight: '5px' }}>
                  <ListItemText
                    primary={category.title}
                    className={activityStyle.listItem}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button
            variant="link"
            sx={{ width: 'max-content' }}
            onClick={() => onFilterButtonClick()}
          >
            Filters &nbsp;
            {toggleFilterIsOpen ? (
              <img
                src="/assets/icons/ph_x.svg"
                width="24"
                height="24"
                alt="close"
              />
            ) : (
              <img
                src="/assets/icons/ph_sliders.svg"
                width="24"
                height="24"
                alt="slider"
              />
            )}
          </Button>

          {toggleFilterIsOpen && (
            <ActivitiesFilters
              currentFilterValues={filterValues}
              onFilterChange={handleFilterChange}
            />
          )}
        </Grid>
      </ActivitySearch>
      <div className="activities_parent">
        <Grid
          className="curved-corners activities"
          container
          sx={{
            py: '1.5rem',
            minWidth: 300,
            mt: '1.5rem',
          }}
        >
          {displayActivities?.length !== 0 &&
            displayActivities?.map((activity: ActivityData, index: number) => {
              const game = games[Math.floor(index / 3) % games.length];

              return (
                <>
                  <ActivityCard key={activity.activityId} activity={activity} />
                  {index % 3 === 2 && <GameCard key={game.id} game={game} />}
                </>
              );
            })}

          {games
            .slice(Math.ceil((displayActivities?.length || 0) / 3))
            .map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          {(displayActivities?.length === 0 || allActivitiesAreHidden) && (
            <Typography sx={{ textAlign: 'center' }}>
              There are no activities to display
            </Typography>
          )}
        </Grid>
        {showScrollButton && (
          <div className="scroll-for-more" onClick={handleScrollForMore}>
            <div className="arrow">↓</div>
          </div>
        )}
      </div>
    </Main>
  );
};

export default Activities;
