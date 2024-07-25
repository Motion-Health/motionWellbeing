import { Button, Dialog, Grid, Typography, useMediaQuery } from "@mui/material";

import theme from "@/styles/theme";

type Props = {
  toggleShareModalAction: boolean;
  onCloseShareModal: (shouldDisplayShareModal: boolean) => void;
};

export const ActivityShareModal = ({
  toggleShareModalAction,
  onCloseShareModal,
}: Props) => {
  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={!!toggleShareModalAction}
      fullScreen={shouldDisplayFullScreen}
      className="activity-share-modal-wrapper"
    >
      <Grid container>
        <Grid
          container
          sx={{
            position: "relative",
            flexWrap: "initial",
            flexDirection: "column",
            margin: "3rem",
          }}
        >
          <Grid item>
            <Typography variant="h1">Share to your Facebook</Typography>
          </Grid>

          <Grid item>
            <img
              src="/assets/images/og-image.jpg"
              alt="Image of a Motion group activity"
              style={{ maxWidth: "848px", width: "100%" }}
            />
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
              onClick={() => {
                window.open(
                  "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmotionexercise.co.uk",
                  "newwindow",
                  "width=300,height=250"
                );
                onCloseShareModal(false);
              }}
            >
              Share
            </Button>

            <Button
              variant="text"
              name="cancel"
              fullWidth
              onClick={() => onCloseShareModal(false)}
              sx={{
                mt: "1rem",
                width: "150px",
                borderRadius: 50,
              }}
            >
              Complete Activity
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};
