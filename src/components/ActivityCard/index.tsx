import { useAccountContext } from "@/context/AccountContext";
import { categoryIcons } from "@/data/categoryIcons";
import { useActivityTimeLengths } from "@/services/activities/useActivityTimeLengths";
import { ActivityData } from "@/services/activities/useCreateActivity";
import { useListActivities } from "@/services/activities/useListActivities";
import { Button, Chip, Grid, Typography } from "@mui/material";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ActivitiesFormModal from "../modals/ActivitiesFormModal";
import { UpgradeModal } from "../modals/UpgradeModal";
import Image from "next/image";

type Props = {
  activity: ActivityData;
};

export const ActivityCard = (props: Props) => {
  const { activity } = props;
  const {
    account: { accountStatus },
  } = useAccountContext();
  const { refetch: refetchActivities } = useListActivities();
  const { data: timeLengths } = useActivityTimeLengths();

  const router = useRouter();

  const categoryIcon: string = categoryIcons[activity.category];

  const [timeLengthLabels, setTimeLengthLabels] = useState<null | object>(null);

  useEffect(() => {
    if (timeLengths?.length) {
      const timeLengthLabelsObject: any = {};
      timeLengths.forEach((timeLength: any) => {
        timeLengthLabelsObject[timeLength.value] = timeLength.label;
      });

      setTimeLengthLabels(timeLengthLabelsObject);
    }
  }, [timeLengths]);

  const [activityDisplayType, setActivityDisplayType] = useState<
    "normal" | "greyed-out" | "invisible"
  >("normal");

  useEffect(() => {
    const isAdmin = accountStatus === "admin";
    const isVisibleToUser = activity?.visibleToUsers?.includes(accountStatus!);

    const notVisibleToUser =
      !activity?.visibleToUsers?.length ||
      (accountStatus === "premium" &&
        !activity.visibleToUsers?.includes("premium")) ||
      (accountStatus === "group" &&
        !activity.visibleToUsers?.includes("premium"));

    const greyedOutToStandardUser =
      accountStatus === "standard" &&
      !activity.visibleToUsers?.includes("standard");

    if (isAdmin || isVisibleToUser) {
      setActivityDisplayType("normal");
    } else if (notVisibleToUser) {
      setActivityDisplayType("invisible");
    } else if (greyedOutToStandardUser) {
      setActivityDisplayType("greyed-out");
    }
  }, []);

  const [toggleActivitiesFormModal, setToggleActivitiesFormModal] =
    useState<number>(1);
  const [modalOpenAction, setModalOpenAction] = useState<string | null>(null);

  const onEditActivity = () => {
    setToggleActivitiesFormModal(Math.random());
    setModalOpenAction("edit-activity");
  };

  const handleActivitySaved = () => {
    refetchActivities();
  };

  const handleActivityCardClick = () => {
    if (activityDisplayType !== "greyed-out") {
      router.push(`/wellbeing/activities/${activity.activityId}`);
    } else {
      setToggleUpgradeModal(true);
    }
  };

  const [toggleUpgradeModal, setToggleUpgradeModal] = useState<boolean>(false);
  const handleCloseUpgradeModal = () => {
    setToggleUpgradeModal(false);
  };

  return (
    <Grid
      item
      md={12}
      lg={4}
      sx={{
        flexGrow: 1,
        mb: "1.5rem",
        px: "0.75rem",
        position: "relative",
        display: activityDisplayType !== "invisible" ? "auto" : "none",
      }}
    >
      {activityDisplayType === "greyed-out" && (
        <img
          src="/assets/icons/ph_premium-icon.svg"
          alt="Premium upgrade icon"
          style={{ position: "absolute", right: "1.5rem", top: "0.5rem" }}
        />
      )}

      <Grid
        item
        sx={{
          opacity: activityDisplayType !== "greyed-out" ? "1" : "0.2",
        }}
      >
        <UpgradeModal
          toggleUpgradeModal={toggleUpgradeModal}
          onCloseUpgradeModal={handleCloseUpgradeModal}
        />

        <ActivitiesFormModal
          toggleActivitiesFormModal={toggleActivitiesFormModal}
          modalOpenAction={modalOpenAction}
          activityData={activity}
          onActivitySaved={handleActivitySaved}
        />
        <div className="activtyCardImageWrapper">
          {activity.imageFileName ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/images/${activity.imageFileName}`}
              alt={`Image of ${activity.activityName}`}
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                objectPosition: "top",
                cursor: "pointer",
                borderRadius: 2,
              }}
              onClick={() => handleActivityCardClick()}
            />
          ) : (
            <img
              src="/assets/images/exercises/activity-placeholder.png"
              alt="Motion placeholder image"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "200px",
                cursor: "pointer",
                borderRadius: 2,
              }}
              onClick={() => handleActivityCardClick()}
            />
          )}
        </div>

        <Grid container justifyContent="space-between">
          <Typography
            variant="h3"
            style={{ cursor: "pointer" }}
            onClick={() => handleActivityCardClick()}
          >
            {activity.activityName}
          </Typography>
          {accountStatus === "admin" && (
            <Button
              sx={{
                height: "1.5rem",
                padding: "0",
                minWidth: "auto",
              }}
              onClick={() => onEditActivity()}
            >
              <img src="/assets/icons/ph_pencil-simple.svg" alt="Edit button" />
            </Button>
          )}
        </Grid>

        {activity.creditName && (
          <Typography variant="helper">by {activity.creditName}</Typography>
        )}

        <Grid
          container
          sx={{
            justifyContent: "space-between",
            mt: "1rem",
          }}
        >
          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <img src={categoryIcon} alt="Activity icon" />
            <Typography variant="helper" sx={{ marginLeft: "0.5rem" }}>
              {timeLengthLabels?.[activity?.timeLength]}
            </Typography>
          </Grid>
          {activity.lastCompletedDate && (
            <Chip
              label={moment(activity.lastCompletedDate).fromNow()}
              size="small"
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
