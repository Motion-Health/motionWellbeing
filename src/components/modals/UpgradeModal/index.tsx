import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";

import theme from "@/styles/theme";

type Props = {
  toggleUpgradeModal: boolean;
  onCloseUpgradeModal: () => void;
};

export const UpgradeModal = ({
  toggleUpgradeModal,
  onCloseUpgradeModal,
}: Props) => {
  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const router = useRouter();

  return (
    <Dialog
      open={toggleUpgradeModal}
      fullScreen={shouldDisplayFullScreen}
      className="upgrade-modal-wrapper"
    >
      <Box
        sx={{
          margin: "3rem",
          width: { md: "40rem" },
        }}
      >
        <CloseIcon
          onClick={() => onCloseUpgradeModal()}
          style={{
            position: "absolute",
            right: "1.5rem",
            top: "1.5rem",
            cursor: "pointer",
          }}
        />
        <Grid item sx={{ textAlign: "center" }}>
          <Typography variant="h3">
            This activity isn't available on your current plan
          </Typography>
          <Typography variant="p">
            Upgrade now to access this activity
          </Typography>
        </Grid>

        <Button
          variant="contained"
          name="upgrade-now"
          fullWidth
          onClick={() => router.push(`/wellbeing/upgrade`)}
          sx={{
            mt: "1rem",
            borderRadius: 50,
          }}
        >
          Upgrade now
        </Button>
      </Box>
    </Dialog>
  );
};
