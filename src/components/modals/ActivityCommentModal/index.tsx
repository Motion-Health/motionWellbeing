import {
  Box,
  Button,
  Dialog,
  Grid,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";

import theme from "@/styles/theme";
import { useUpdateCompletedActivity } from "@/services/activities/useUpdateCompletedActivity";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSelect } from "@/components/FormSelect";
import { FormInputText } from "@/components/FormInputText";

type Props = {
  toggleCommentModalAction: boolean;
  activityCompletedId: string | null;
  onCloseCommentsModal: () => void;
};

type Inputs = {
  wouldDoAgain: string;
  comment: string;
};

export const ActivityCommentModal = ({
  toggleCommentModalAction,
  activityCompletedId,
  onCloseCommentsModal,
}: Props) => {
  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const registerSchema = object({
    wouldDoAgain: string().nullable().optional(),
    comment: string().nullable().optional(),
  });

  const methods = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit } = methods;

  const updateCompletedActivity = useUpdateCompletedActivity();

  const onSubmitHandler: SubmitHandler<Inputs> = async (values) => {
    const { wouldDoAgain, comment } = values;

    if (activityCompletedId) {
      updateCompletedActivity.mutate(
        {
          activityCompletedId,
          wouldDoAgain,
          comment,
        },
        {
          onSuccess: (res) => {
            onCloseCommentsModal();
          },
        },
      );
    }
  };

  const onFormSubmitError = (err: any) => console.log("err", err);

  return (
    <Dialog
      open={toggleCommentModalAction}
      fullScreen={shouldDisplayFullScreen}
      className="activity-comment-modal-wrapper"
    >
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmitHandler, onFormSubmitError)}
        sx={{
          margin: "3rem",
          width: { md: "40rem" },
        }}
      >
        <Typography variant="h1">Leave a comment?</Typography>

        <FormProvider {...methods}>
          <Grid container spacing={{ sm: 0, md: 2 }}>
            <Grid item xs={12} sm={12} md={6}>
              <FormSelect
                name="wouldDoAgain"
                label="Would you do the activity again?"
                defaultValue={""}
                placeholder={"Please select"}
                type="text"
                fullWidth
                sx={{ mb: 3 }}
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </FormSelect>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                name="comment"
                label="Add a comment"
                placeholder=""
                type="text"
                fullWidth
                sx={{ mb: 3 }}
              ></FormInputText>
            </Grid>
          </Grid>

          <Grid container>
            <Button
              variant="contained"
              name="submit"
              fullWidth
              type="submit"
              sx={{
                py: "0.8rem",
                mt: "1rem",
                width: "210px",
                borderRadius: 50,
              }}
            >
              Continue
            </Button>

            <Button
              variant="text"
              name="cancel"
              fullWidth
              onClick={() => onCloseCommentsModal()}
              sx={{
                mt: "1rem",
                width: "110px",
                borderRadius: 50,
              }}
            >
              Skip
            </Button>
          </Grid>
        </FormProvider>
      </Box>
    </Dialog>
  );
};
