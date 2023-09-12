import { Dialog, Grid, Typography, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import theme from "@/styles/theme";
import { useUpdateCompletedActivity } from "@/services/activities/useUpdateCompletedActivity";
import { ActivityData } from "@/services/activities/useCreateActivity";
import { useCompleteActivity } from "@/services/activities/useCompleteActivity";

type Props = {
  toggleRatingModalAction: "button-click" | "video-timer" | null;
  onCloseRatingModal: (
    openCommentModal: boolean | null,
    activityCompletedId?: string | null,
  ) => void;
  activityCompletedId: string | null;
  activityData: ActivityData | null;
};

export const ActivityRatingModal = ({
  toggleRatingModalAction,
  onCloseRatingModal,
  activityCompletedId,
  activityData,
}: Props) => {
  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const completeActivity = useCompleteActivity();
  const updateCompletedActivity = useUpdateCompletedActivity();

  const handleAddRating = (rating: number) => {
    if (toggleRatingModalAction === "button-click") {
      const updatedCompletedActivity = {
        activityCompletedId,
        rating,
      };

      updateCompletedActivity.mutate(updatedCompletedActivity, {
        onSuccess: (res) => {
          const { activityCompletedId } = res.data;
          onCloseRatingModal(true, activityCompletedId);
        },
        onError: (err) => console.log("err", err),
      });
    }

    if (toggleRatingModalAction === "video-timer") {
      const newActivity = {
        ...activityData,
        rating,
      };

      completeActivity.mutate(newActivity, {
        onSuccess: (res) => {
          const { activityCompletedId } = res.data;
          onCloseRatingModal(true, activityCompletedId);
        },
        onError: (err) => {
          console.log("err", err);
        },
      });
    }
  };

  return (
    <Dialog
      open={!!toggleRatingModalAction}
      fullScreen={shouldDisplayFullScreen}
      className="activity-rating-modal-wrapper"
    >
      {toggleRatingModalAction === "video-timer" && (
        <CloseIcon
          onClick={() => onCloseRatingModal(false)}
          style={{
            position: "absolute",
            right: "1.5rem",
            top: "1.5rem",
            cursor: "pointer",
          }}
        />
      )}

      <Grid container sx={{ padding: "1.5rem" }}>
        <Grid container>
          <Typography variant="h1">
            How did the participant(s) find the activity?
          </Typography>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              position: "relative",
              flexWrap: "initial",
            }}
          >
            {ratingsOptions.map((option) => (
              <Grid
                item
                key={option.label}
                sx={{
                  mr: "1.5rem",
                  flexShrink: 1,
                  flexDirection: "row",
                  flexWrap: "initial",
                  position: "relative",
                  margin: 0,
                  padding: "0.75rem",
                  maxWidth: "10rem",
                  cursor: "pointer",
                }}
                onClick={() => handleAddRating(option.value)}
              >
                <img
                  src={option.icon}
                  alt="Face icon"
                  style={{ maxWidth: "160px", width: "100%" }}
                />
                <Typography variant="h3" textAlign={"center"}>
                  {option.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

const ratingsOptions = [
  {
    value: 1,
    label: "Very bad",
    icon: "/assets/emotions/emotion-1.svg",
  },
  {
    value: 2,
    label: "Poor",
    icon: "/assets/emotions/emotion-2.svg",
  },
  {
    value: 3,
    label: "Average",
    icon: "/assets/emotions/emotion-3.svg",
  },
  {
    value: 4,
    label: "Good",
    icon: "/assets/emotions/emotion-4.svg",
  },
  {
    value: 5,
    label: "Excellent",
    icon: "/assets/emotions/emotion-5.svg",
  },
];
