import PrintIcon from '@mui/icons-material/Print';
import { Button, Grid, Typography } from '@mui/material';
import moment, { Moment } from 'moment';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Page, pdfjs } from 'react-pdf';
import YouTube from 'react-youtube';

import { ActivityCategoryAndTime } from '@/components/ActivityCategoryAndTime';
import { ActivityCommentsList } from '@/components/ActivityCommentsList';
import { ActivityStepper } from '@/components/modals/ActivitiesStepper';
import { ActivityRatingModal } from '@/components/modals/ActivityRatingModal';
import PageHeader from '@/components/PageHeader/index';
import { useAccountContext } from '@/context/AccountContext';
import { useActivityDetails } from '@/services/activities/useActivityDetails';
import { useActivityMetrics } from '@/services/activities/useActivityMetrics';
import { useCompleteActivity } from '@/services/activities/useCompleteActivity';
import { ActivityData } from '@/services/activities/useCreateActivity';
import { Main } from '@/templates/Main';

const ActivityDetails = () => {
  const [open, setOpen] = useState(false);
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  const DynamicDocument = dynamic(
    () => import('react-pdf').then((module) => module.Document),
    { ssr: false }
  );
  const openStepper = () => {
    setOpen(true);
  };

  const handleCloseStepper = () => {
    setOpen(false);
  };

  const {
    account: { accountStatus },
  } = useAccountContext();
  const [shouldRenderVideo, setShouldRenderVideo] = useState(true);

  const router = useRouter();

  const activityId = router.query.activityId as string;

  const { data: fetchedActivity, refetch: refetchActivity } =
    useActivityDetails(activityId);
  const [activity, setActivity] = useState<ActivityData | null>(null);

  //Has to be rendered after the rest of the code in order to overwrite the teamly function
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('pageFullyRendered', function () {
        getUpdatedCookieWhitelistByTermly = function () {
          window.location.reload();
        };
      });
      document.dispatchEvent(new Event('pageFullyRendered'));
    }
  }, []);

  useEffect(() => {
    if (
      accountStatus == 'standard' &&
      activity?.visibleToUsers?.includes('premium') &&
      !activity?.visibleToUsers?.includes('standard')
    ) {
      setShouldRenderVideo(false);
      router.push('/wellbeing/upgrade');
    }
  }, [accountStatus, activity?.visibleToUsers]);
  const { data: activityMetrics, refetch: refetchMetrics } =
    useActivityMetrics(activityId);
  const [timesCompleted, setTimesCompleted] = useState<number | null>(null);

  const [roundedRating, setRoundedRating] = useState<number | null>(null);
  const [decimalRating, setDecimalRating] = useState<string | null>(null);
  useEffect(() => {
    if (activityMetrics?.timesCompleted) {
      setTimesCompleted(activityMetrics.timesCompleted);
    }

    if (activityMetrics?.averageRating) {
      const ratingRoundedUp = Math.ceil(activityMetrics.averageRating);
      setRoundedRating(ratingRoundedUp);

      const ratingTwoDecimalPlaces = activityMetrics.averageRating.toFixed(2);
      setDecimalRating(ratingTwoDecimalPlaces);
    }
  }, [activityMetrics]);

  useEffect(() => {
    setActivity(fetchedActivity);
    if (fetchedActivity == undefined) {
      console.log('Loading');
    } else if (!fetchedActivity) {
      console.log('no activity');
      router.push('/wellbeing/activities?task=not-found');
    }
  }, [fetchedActivity]);

  const handleDownload = () => {
    const url = `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/documents/${activity?.documentFileName}`;
    window.open(url, '_blank');
  };

  const renderYouTubeOrCookieMessage = () => {
    if (Termly.getConsentState().advertising == false) {
      return (
        <Grid item sm={20} height="10rem" sx={{ mb: '3rem' }}>
          <Grid
            container
            height="10rem"
            spacing={2}
            marginTop="0"
            alignItems="center"
            justifyContent="center"
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                Please accept analytics and any advertising cookies to view the
                video
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => displayPreferenceModal()}
                style={{ margin: 'auto', display: 'block' }}
              >
                Manage Cookies
              </Button>
            </Grid>
          </Grid>
        </Grid>
      );
    } else if (shouldRenderVideo && parsedYouTubeEmbedCode) {
      return (
        <Grid item sm={12} height="30rem" sx={{ mb: '3rem' }}>
          <YouTube
            videoId={parsedYouTubeEmbedCode}
            onPlay={() => setVideoPlayTimestamp(moment())}
            onStateChange={(e) => handleVideoStateChange(e)}
            opts={{
              width: '100%',
              height: '500',
            }}
          />
        </Grid>
      );
    } else if (activity?.documentFileName) {
      console.log(
        `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/documents/${activity?.documentFileName}`
      );
      console.log('activity?.documentFileName', activity?.documentFileName);
      console.log('rendering document');
      return (
        <Grid
          item
          sm={12}
          justifyContent="center"
          alignItems="center"
          height="30rem"
          sx={{ mb: '3rem' }}
          className="pdf-container"
          onClick={handleDownload}
        >
          <DynamicDocument
            renderTextLayer={false}
            file={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/documents/${activity?.documentFileName}`}
            onLoadError={(error) =>
              console.error('Error while loading document:', error)
            }
          >
            <div className="download-message">Click to Download</div>
            <Page pageNumber={1} renderTextLayer={false} height={400} />
          </DynamicDocument>
        </Grid>
      );
    }
  };

  const [parsedYouTubeEmbedCode, setParsedYouTubeEmbedCode] = useState<
    string | null
  >(null);
  const [isSixtyPercentWatched, setIsSixtyPercentWatched] = useState(false);
  const [openRatingModal, setOpenRatingModal] = useState(false);
  useEffect(() => {
    if (activity?.videoLink) {
      const urlEnd = activity?.videoLink.split('youtu.be/')[1];
      const embedCode = urlEnd?.slice(0, 11);
      setParsedYouTubeEmbedCode(embedCode);
    }
  }, [activity]);

  const [youtubePlayTimestamp, setVideoPlayTimestamp] = useState<Moment | null>(
    null
  );
  const clickRef = useRef(null);

  const handleVideoStateChange = (e) => {
    const player = e.target;
    const duration = player.getDuration();
    const currentTime = player.getCurrentTime();

    if (
      currentTime / duration >= 0.6 &&
      !isSixtyPercentWatched &&
      !activityCompletedId
    ) {
      setIsSixtyPercentWatched(true);
      setToggleRatingModalAction('video-timer');
      const newActivity = {
        activityId: activity?.activityId,
        rating: null,
      };
      if (toggleRatingModalAction !== 'video-timer') {
        completeActivity.mutate(newActivity, {
          onSuccess: (res) => {
            console.log('res', res);
            const { activityCompletedId } = res.data;
            setActivityCompletedId(activityCompletedId);
            setToggleRatingModalAction('video-timer');
            console.log('activityCompletedId', activityCompletedId);
          },
          onError: (err) => {
            console.log('err', err);
          },
        });
      }
    }
  };

  const [toggleRatingModalAction, setToggleRatingModalAction] = useState<
    'button-click' | 'video-timer' | null
  >(null);

  const [activityCompletedId, setActivityCompletedId] = useState<string | null>(
    null
  );

  const completeActivity = useCompleteActivity();

  const handleCompleteAndRate = () => {
    if (activity) {
      setToggleRatingModalAction('button-click');
    } else {
      setToggleRatingModalAction('video-timer');
    }
    setOpenRatingModal(true);
  };

  const [shouldOpenStepperModal, setShouldOpenStepperModal] =
    useState<boolean>(false);

  const onCloseRatingModal = (
    openStepperModal: boolean | null,
    activityCompletedId?: string | null
  ) => {
    if (activityCompletedId) {
      setActivityCompletedId(activityCompletedId);
    }

    if (openStepperModal) setShouldOpenStepperModal(true);
    // if (activityCompletedId) openStepper();
    setOpenRatingModal(false);

    refetchActivity();
    refetchMetrics();
  };
  const onCloseStepperModal = () => {
    setShouldOpenStepperModal(false);
    router.push('/wellbeing/activities?task=complete');
  };

  return (
    <div ref={clickRef}>
      {activity && (
        <Main>
          <Head>
            <title>{activity.activityName} | Motion Wellbeing</title>
          </Head>
          <ActivityRatingModal
            openRatingModal={openRatingModal}
            toggleRatingModalAction={toggleRatingModalAction}
            activityCompletedId={activityCompletedId}
            onCloseRatingModal={onCloseRatingModal}
            activityData={activity}
          />

          <ActivityStepper
            toggleStepperModalAction={shouldOpenStepperModal}
            activityCompletedId={activityCompletedId}
            onCloseStepperModal={onCloseStepperModal}
          />

          <PageHeader title={activity.activityName}>
            <button
              className="animatedButton"
              onClick={() => handleCompleteAndRate()}
            >
              <svg
                className="animatedButtonSVG"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="28" cy="28" r="28" fill="white" />
                <path
                  d="M24.2502 38C23.9189 37.9955 23.6012 37.8673 23.3596 37.6406L14.6096 28.8906C14.4102 28.6477 14.3084 28.3394 14.3238 28.0256C14.3392 27.7117 14.4708 27.4149 14.693 27.1927C14.9151 26.9705 15.212 26.839 15.5258 26.8235C15.8396 26.8081 16.148 26.91 16.3908 27.1093L24.2502 34.9843L40.8596 18.3593C41.1024 18.16 41.4108 18.0581 41.7246 18.0735C42.0384 18.089 42.3353 18.2205 42.5574 18.4427C42.7796 18.6649 42.9112 18.9617 42.9266 19.2756C42.942 19.5894 42.8401 19.8977 42.6408 20.1406L25.1408 37.6406C24.8992 37.8673 24.5815 37.9955 24.2502 38V38Z"
                  fill="#0C437D"
                />
              </svg>
              <span>Complete and rate activity</span>
            </button>
          </PageHeader>

          <Grid
            container
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ActivityCategoryAndTime
              category={activity?.category}
              timeLength={activity?.timeLength}
            />

            {timesCompleted && (
              <Typography variant="helper" sx={{ mr: '3rem' }}>
                {`
                Completed 
                ${timesCompleted} 
                ${timesCompleted !== 1 ? 'times' : 'time'}
                `}
              </Typography>
            )}

            {roundedRating && (
              <Grid item sx={{ mr: '3rem' }}>
                <Grid container alignItems="center">
                  <img
                    src={`/assets/emotions/emotion-${roundedRating}.svg`}
                    width="24px"
                    height="24px"
                    alt="Face icon"
                    sx={{ verticalAlign: 'middle' }}
                  />
                  <Typography
                    variant="helper"
                    sx={{ ml: '0.5rem', position: 'relative' }}
                  >
                    {decimalRating}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid container spacing={2} sx={{ mt: '0rem' }}>
            {renderYouTubeOrCookieMessage()}

            <Grid item sm={12} md={9}>
              <Typography variant="h3">Description</Typography>
              <Typography variant="helper">{activity?.description}</Typography>
            </Grid>

            <Grid item sm={12} md={3}>
              <Typography variant="h3">Equipment</Typography>
              <Typography variant="helper">
                {activity?.equipmentRequired?.trim()
                  ? activity.equipmentRequired
                  : 'No Equipment Required'}
              </Typography>

              {activity?.documentFileName && (
                <PrintActivitySheet
                  documentFileName={activity.documentFileName}
                />
              )}
            </Grid>

            <ActivityCommentsList activityId={activityId} />
          </Grid>
        </Main>
      )}
    </div>
  );
};

const PrintActivitySheet = ({
  documentFileName,
}: {
  documentFileName: string;
}) => {
  return (
    <Grid item>
      <Link
        href={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/documents/${documentFileName}`}
        target="_blank"
        style={{ textDecoration: 'none' }}
      >
        <Button
          variant="text"
          size="small"
          startIcon={<PrintIcon />}
          sx={{
            textTransform: 'none',
            padding: 0,
            mt: '1.5rem',
          }}
        >
          Print activity sheet
        </Button>
      </Link>
    </Grid>
  );
};

export default ActivityDetails;
