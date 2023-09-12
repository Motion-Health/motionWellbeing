import YouTube from "react-youtube";

import { Button, Grid, Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import Link from "next/link";

import PageHeader from "@/components/PageHeader/index";
import { Main } from "@/templates/Main";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useActivityDetails } from "@/services/activities/useActivityDetails";
import { ActivityData } from "@/services/activities/useCreateActivity";
import { ActivityCategoryAndTime } from "@/components/ActivityCategoryAndTime";
import moment, { Moment } from "moment";
import { ActivityRatingModal } from "@/components/modals/ActivityRatingModal";
import { useCompleteActivity } from "@/services/activities/useCompleteActivity";
import { ActivityCommentModal } from "@/components/modals/ActivityCommentModal";
import { ActivityParticipantsModal } from "@/components/modals/ActivityParticipantsModal";
import { ActivityShareModal } from "@/components/modals/ActivityShareModal";
import { ActivityCommentsList } from "@/components/ActivityCommentsList";
import { useActivityMetrics } from "@/services/activities/useActivityMetrics";
import Head from "next/head";

const ActivityDetails = () => {
  const router = useRouter();

  const activityId = router.query.activityId as string;

  const { data: fetchedActivity, refetch: refetchActivity } =
    useActivityDetails(activityId);
  const [activity, setActivity] = useState<ActivityData | null>(null);

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
  }, [fetchedActivity]);

  const [parsedYouTubeEmbedCode, setParsedYouTubeEmbedCode] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (activity?.videoLink) {
      const urlEnd = activity?.videoLink.split("youtu.be/")[1];
      const embedCode = urlEnd?.slice(0, 11);
      setParsedYouTubeEmbedCode(embedCode);
    }
  }, [activity]);

  const [youtubePlayTimestamp, setVideoPlayTimestamp] = useState<Moment | null>(
    null,
  );
  const clickRef = useRef(null);

  useEffect(() => {
    function handleClick() {
      if (youtubePlayTimestamp) {
        const timeClicked = moment();
        const secondsAfterVideoPlay = moment
          .duration(timeClicked.diff(youtubePlayTimestamp))
          .asSeconds();

        if (secondsAfterVideoPlay > 60) {
          setVideoPlayTimestamp(null);
          setToggleRatingModalAction("video-timer");
        }
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [clickRef, youtubePlayTimestamp]);

  const [toggleRatingModalAction, setToggleRatingModalAction] = useState<
    "button-click" | "video-timer" | null
  >(null);

  const [activityCompletedId, setActivityCompletedId] = useState<string | null>(
    null,
  );

  const completeActivity = useCompleteActivity();

  const handleCompleteAndRate = () => {
    if (activity) {
      completeActivity.mutate(activity, {
        onSuccess: (res) => {
          const { activityCompletedId } = res.data;
          setActivityCompletedId(activityCompletedId);
          setToggleRatingModalAction("button-click");
        },
      });
    }
  };

  const [shouldOpenCommentsModal, setShouldOpenCommentsModal] =
    useState<boolean>(false);

  const onCloseRatingModal = (
    openCommentModal: boolean | null,
    activityCompletedId?: string | null,
  ) => {
    if (activityCompletedId) {
      setActivityCompletedId(activityCompletedId);
    }

    setToggleRatingModalAction(null);

    if (openCommentModal) setShouldOpenCommentsModal(true);

    refetchActivity();
    refetchMetrics();
  };

  const [shouldOpenParticipantsModal, setShouldOpenParticipantsModal] =
    useState<boolean>(false);

  const onCloseCommentsModal = () => {
    setShouldOpenCommentsModal(false);
    setShouldOpenParticipantsModal(true);
  };

  const [shouldOpenShareModal, setShouldOpenShareModal] =
    useState<boolean>(false);

  const onCloseParticipantsModal = () => {
    setShouldOpenParticipantsModal(false);
    setShouldOpenShareModal(true);
  };

  const onCloseShareModal = (shouldDisplayShareModal: boolean) => {
    if (!shouldDisplayShareModal) {
      setShouldOpenShareModal(false);
      refetchActivity();
      refetchMetrics();
    }
  };

  return (
    <div ref={clickRef}>
      {activity && (
        <Main>
          <Head>
            <title>{activity.activityName} | Motion Wellbeing</title>
          </Head>
          <ActivityRatingModal
            toggleRatingModalAction={toggleRatingModalAction}
            activityCompletedId={activityCompletedId}
            onCloseRatingModal={onCloseRatingModal}
            activityData={activity}
          />

          <ActivityCommentModal
            toggleCommentModalAction={shouldOpenCommentsModal}
            activityCompletedId={activityCompletedId}
            onCloseCommentsModal={onCloseCommentsModal}
          />

          <ActivityParticipantsModal
            toggleParticipantsModalAction={shouldOpenParticipantsModal}
            activityCompletedId={activityCompletedId}
            onCloseParticipantsModal={onCloseParticipantsModal}
          />

          <ActivityShareModal
            toggleShareModalAction={shouldOpenShareModal}
            onCloseShareModal={onCloseShareModal}
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

          <Grid container>
            <ActivityCategoryAndTime
              category={activity?.category}
              timeLength={activity?.timeLength}
            />

            {timesCompleted && (
              <Typography variant="helper" sx={{ mr: "3rem" }}>
                {`
                Completed 
                ${timesCompleted} 
                ${timesCompleted !== 1 ? "times" : "time"}
                `}
              </Typography>
            )}

            {roundedRating && (
              <Grid item sx={{ mr: "3rem" }}>
                <img
                  style={{ position: "relative", top: "-6px" }}
                  alt="rating"
                  src={`/assets/emotions/emotion-${roundedRating}.svg`}
                  width="24px"
                  height="24px"
                  alt="Face icon"
                />
                <Typography
                  variant="helper"
                  sx={{ ml: "0.5rem", position: "absolute" }}
                >
                  {decimalRating}
                </Typography>
              </Grid>
            )}
          </Grid>

          <Grid container spacing={2} sx={{ mt: "0rem" }}>
            {parsedYouTubeEmbedCode && (
              <Grid item sm={12} height="30rem" sx={{ mb: "3rem" }}>
                <YouTube
                  videoId={parsedYouTubeEmbedCode}
                  onPlay={() => setVideoPlayTimestamp(moment())}
                  opts={{
                    width: "100%",
                    height: "500",
                  }}
                />
              </Grid>
            )}

            <Grid item sm={12} md={9}>
              <Typography variant="h3">Description</Typography>
              <Typography variant="helper">{activity?.description}</Typography>
            </Grid>

            <Grid item sm={12} md={3}>
              <Typography variant="h3">Equipment</Typography>
              <Typography variant="helper">
                {activity?.equipmentRequired}
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
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="text"
          size="small"
          startIcon={<PrintIcon />}
          sx={{
            textTransform: "none",
            padding: 0,
            mt: "1.5rem",
          }}
        >
          Print activity sheet
        </Button>
      </Link>
    </Grid>
  );
};

export default ActivityDetails;
