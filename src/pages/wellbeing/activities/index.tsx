import { Alert, Button, Grid, List, ListItem, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ActivitiesFilters } from '@/components/ActivitiesFilters';
import { ActivityCard } from '@/components/ActivityCard';
import ActivitySearch from '@/components/ActivitySearch';
import Categories from '@/components/ActivitySearch/Cagegories';
import { GameCard } from '@/components/GameCard';
import ActivitiesFormModal from '@/components/modals/ActivitiesFormModal';
import { useAccountContext } from '@/context/AccountContext';
import { categories as categoriesData } from '@/data/categories';
import { useActivityTags } from '@/services/activities/useActivityTags';
import { useActivityTimeLengths } from '@/services/activities/useActivityTimeLengths';
import { ActivityData } from '@/services/activities/useCreateActivity';
import { useListActivities } from '@/services/activities/useListActivities';
import { Main } from '@/templates/Main';

import activityStyle from './activityStyle.module.css';
import React from 'react';
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
      players: '1 Player',
      instructions: `Use the arrow keys to move the snake around the screen
        Eat the apples to grow longer
        Avoid bumping into yourself.`,
      link: '/wellbeing/games/snake-game',
      image: '/assets/images/games/Snake.webp',
    },
    {
      id: 2,
      name: 'Quizzical',
      players: 'Multi player',
      instructions: `Test your knowledge with general knowledge questions
      Answer 10 questions then 'Check answers'
      Highest score wins.`,
      link: '/wellbeing/games/quizzical',
      image: '/assets/images/games/Quizzical.webp',
    },
    {
      id: 3,
      name: 'Colour memory',
      players: '1 player',
      instructions: `Select a colour and try to remember it
        Avoid selecting the same colour twice in a row
        Highest score wins.`,
      link: '/wellbeing/games/colour-game',
      image: '/assets/images/games/ColourGame.webp',
    },
    {
      id: 4,
      name: 'Noughts and crosses',
      players: '2 player',
      instructions: `Taking turns, place a nought or cross on the grid
        Aim to get 3 of the same symbol in a row
        3 in a row wins.`,
      link: '/wellbeing/games/noughts-crosses',
      image: '/assets/images/games/NoughtsCrosses.webp',
    },
    {
      id: 5,
      name: 'Hangman',
      players: '1 player',
      instructions: `Select letters to complete the word
        Selecting the wrong letter will add a body part to the man
        Fill in the word before all the body parts are added.`,
      link: '/wellbeing/games/hangman',
      image: '/assets/images/games/Hangman.webp',
    },
    // {
    //   id: 6,
    //   name: 'Tetris',
    //   players: 'A classic game of Tetris',
    //   instructions:
    //     'Use the arrow keys to move the blocks around the screen. Use the space bar to rotate the blocks. Fill a row to clear it.',
    //   link: '/wellbeing/games/tetris',
    // },
    {
      id: 7,
      name: 'Sudoku',
      players: '1 player',
      instructions: `9x9 square must be filled with numbers 1-9
      No numbers can be repeated vertically or horizontally.`,
      link: '/wellbeing/games/sudoku',
      image: '/assets/images/games/Sudoku.webp',
    },
    {
      id: 8,
      name: 'Pong',
      players: '1 player',
      instructions: `Hit the ball past your opponent
        Use your paddle to prevent the ball going past you
        To win score more points than the 'Computer'.`,
      link: '/wellbeing/games/pong',
      image: '/assets/images/games/Pong.webp',
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
  const [showCategories, setShowCategories] = useState(false);
  const handleCategoryClick = () => {
    setShowCategories(!showCategories);
  };

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
        <title>Activities | Motion Wellbeing</title>
        <meta name="description" content="Activities" />
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

      <ActivitiesFormModal
        toggleActivitiesFormModal={toggleActivitiesFormModal}
        modalOpenAction={modalOpenAction}
        activityData={null}
        onActivitySaved={handleActivitySaved}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <div className={activityStyle.fixedTopBar}>
        <div className={activityStyle.fixedTopBarAlignment}>
          <div className={activityStyle.header}>
            <Typography className={activityStyle.title}
            variant="h1" sx={{ mb: '16px' }}>
              Activities
            </Typography>
          </div>
          {accountStatus === 'admin' && (
            <Button variant="contained" onClick={() => onCreateActivity()}>
              Create activity
            </Button>
          )}

          <ActivitySearch
            className={activityStyle.search}
            placeholder="Search activities..."
            data={activities}
            searchKey="activityName"
            searchedData={handleSearchedData}
          >
            <Button
              variant="link"
              sx={{ width: 'max-content', minWidth: 'fit-content',
              '@media (min-width: 900px)': {
                display: 'none',
              }
             }}
              onClick={() => handleCategoryClick()}
            >
              Categories &nbsp;
              {showCategories ? (
                <img
                  src="/assets/icons/ph_x.svg"
                  width="24"
                  height="24"
                  alt="close"
                />
              ) : (
                <img
                  src="/assets/icons/categories.svg"
                  width="24"
                  height="24"
                  alt="slider"
                />
              )}
            </Button>
            <Button
              variant="link"
              sx={{ width: 'max-content', minWidth: 'fit-content' }}
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
          </ActivitySearch>
        </div>
        <Grid
          container
          item
          sx={{
            position: 'relative',
            width: 'auto',
            flexWrap: 'nowrap',
            flexGrow: 1,
            minWidth: 0,
            overflow: 'hidden',
            '@media (max-width: 900px)': {
              display: 'none',
            }
          }}
        >
          <List
            sx={{
              padding: 0,
              display: 'flex',
              flexGrow: 1,
              minWidth: 0,
              overflow: 'hidden',
            }
            }
          >
            <Categories categories={categoriesData} />
          </List>
        </Grid>
      </div>

      {toggleFilterIsOpen && (
        <ActivitiesFilters
          currentFilterValues={filterValues}
          onFilterChange={handleFilterChange}
        />
      )}
       {showCategories && (
      <List className={activityStyle.categoriesMobile}>
        {categoriesData.map((category) => (
          <ListItem key={category.id}>{category.title}</ListItem>
        ))}
      </List>
    )}
      <div className="activities_parent">
        {showSuccessBanner && successMessage && (
          <>
            <Alert
              severity="success"
              sx={{
                margin: '1rem 1%',
                position: 'relative',
                top: '120px',
              }}
              onClose={() => setShowSuccessBanner(false)} // Add this line for close button
            >
              {successMessage}
            </Alert>
          </>
        )}
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
              return (
                <ActivityCard key={activity.activityId} activity={activity} />
              );
            })}

          {categoryQuery == 'Games' && (
            <>
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </>
          )}

          {(displayActivities?.length === 0 || allActivitiesAreHidden) &&
            categoryQuery != 'Games' && (
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
