import { useEffect, useState } from "react"

import { Alert, Box, Button, Dialog, Typography, useMediaQuery } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'

import theme from "@/styles/theme"
import { Account } from "@/models/Account"
import { useDeleteAccount } from "@/services/account/useDeleteAccount"
import { useRouter } from "next/router"

type Props = {
  toggleDeleteModal: number
  accountToDelete: Account
}

const DeleteModal = (props: Props) => {
  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const { toggleDeleteModal, accountToDelete } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  useEffect(() => {
    if (toggleDeleteModal !== 1) {
      setIsModalOpen(true)
    }
  }, [toggleDeleteModal])
  
  const [showServerErrorAlert, setShowServerErrorAlert] = useState<boolean>(false)

  const router = useRouter()
  const deleteAccount = useDeleteAccount()

  const handleDeleteAccount = () => {
    const { accountId } = accountToDelete

    deleteAccount.mutate(
      accountId, 
      {
        onSuccess: (res) => {
          const { serviceProviderName } = res.data
          setIsModalOpen(false)
          router.push({
            pathname: "/wellbeing/community", 
              query: { deletedAccount: serviceProviderName }
          }, "/wellbeing/community")

        }, 
        onError: (err) => {
          setShowServerErrorAlert(true)
        }
      }
    ) 
  }

  return (
    <Dialog 
      open={isModalOpen}
      fullScreen={shouldDisplayFullScreen}
      className="delete-modal-wrapper"
    >

      <CloseIcon 
        onClick={() => setIsModalOpen(false)} 
        style={{
          position: 'absolute',
          right: '1.5rem',
          top: '1.5rem', 
          cursor: 'pointer'
        }}
      />

      <Box 
        sx={{
          margin: "3rem", 
        }}
      >
        {showServerErrorAlert && (
          <Alert icon={false} severity="error" sx={{position: "relative", my: "1rem"}} onClose={() => setShowServerErrorAlert(false)}>
            Something went wrong - please try again
          </Alert>
        )}
        
        <Typography variant="h1">Confirm delete</Typography>

        <Typography variant="body2">Are you sure you want to delete {accountToDelete?.serviceProviderName || 'this service provider'}?</Typography>
        <Typography variant="body2">This action cannot be undone</Typography>
        
        <Button
          variant='contained'
          name='saveChanges'
          fullWidth
          onClick={() => handleDeleteAccount()}
          sx={{ 
            py: '0.8rem', 
            mt: '1rem', 
            width: '210px', 
            borderRadius: 50
          }}
        >
          Delete
        </Button>
  
        <Button
          variant='text'
          name='cancel'
          fullWidth
          onClick={() => setIsModalOpen(false)}
          sx={{ 
            py: '0.8rem', 
            mt: '1rem', 
            ml: '1rem',
            width: '210px', 
            borderRadius: 50
          }}
        >
          Cancel
        </Button>
      </Box>

    </Dialog>
  )
}
export default DeleteModal