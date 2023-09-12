import { Box, Button, Dialog, Grid, MenuItem, Typography, useMediaQuery } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close";

import theme from "@/styles/theme"
import { useRouter } from "next/router"

type Props = {
  toggleUpgradeModal: boolean
  onCloseUpgradeModal: () => void
}

export const UpgradeModal = ({ toggleUpgradeModal, onCloseUpgradeModal }: Props) => {
  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const router = useRouter()

  return (
    <Dialog 
      open={toggleUpgradeModal}
      fullScreen={shouldDisplayFullScreen}
      className="upgrade-modal-wrapper"
    >
      <Box 
        sx={{
          margin: "3rem", 
          width: {md: '40rem'}
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
            <Grid
              item
              sx={{ textAlign: 'center' }}  
            >
              <Typography variant='h3'>This feature isn't available on your current plan</Typography>
              <Typography variant='p'>Upgrade now to access this feature</Typography>
            </Grid>

            <Button
                variant='contained'
                name='upgrade-now'
                fullWidth
                onClick={() => router.push(`/wellbeing/upgrade`)}
                sx={{ 
                  mt: '1rem', 
                  borderRadius: 50
                }}
              >
                Upgrade now
              </Button>
      </Box>
    </Dialog>
  )
}