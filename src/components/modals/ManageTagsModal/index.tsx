import { useEffect, useState } from "react"

import { Box, Button, Checkbox, Dialog, FormControlLabel, FormGroup, Grid, Typography, useMediaQuery } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

import theme from "@/styles/theme"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { object, string } from "zod"
import { TagData, useActivityTags } from "@/services/activities/useActivityTags"

type Props = {
  toggleManageTagsModal: number
  activityTags: string[] | null
  onTagsEdit: (tags: string[]) => void
  onCloseManageTagsModal: () => void
}

const ManageTagsModal = ({ toggleManageTagsModal, activityTags, onTagsEdit, onCloseManageTagsModal }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  
  useEffect(() => {
    if (toggleManageTagsModal !== 1) {
      setIsModalOpen(true)
    }
  }, [toggleManageTagsModal])

  useEffect(() => {
    if (!isModalOpen) {
      onCloseManageTagsModal()
    }
  }, [isModalOpen])

  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const { data: activityTagsList }: { data: TagData[] } = useActivityTags();

  const registerSchema = object({
    tags: string().array().optional(),
  })

  const methods = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: activityTags
  })

  const {
    handleSubmit, 
    register,
  } = methods

  const onSubmitHandler: SubmitHandler<any> = async (values) => {
    onTagsEdit(values.tags)
    setIsModalOpen(false)
  }

  const onFormSubmitError = (err: any) => console.log("onFormSubmitError", err)
  
  return (
    <Dialog 
      open={isModalOpen}
      fullScreen={shouldDisplayFullScreen}
      className="manage-tags-modal-wrapper"
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
        component='form'
        noValidate
        onSubmit={handleSubmit(onSubmitHandler, onFormSubmitError)}
        sx={{
          margin: "3rem", 
        }}
      >
        <Typography variant="h1">Manage tags</Typography>

        <FormProvider {...methods}> 
            
          <Grid container direction="row">
            {activityTagsList?.length && activityTagsList?.map((tag) => (
              <Grid item xs={12} sm={12} md={6} key={tag.activityTagId}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked={activityTags?.includes(tag.value)} />}
                    {...register('tags')}
                    label={
                      <Typography variant='helper'>
                        {tag.label}
                      </Typography>
                    }
                    value={tag.value}
                  />
                </FormGroup> 
              </Grid>
            ))}
          </Grid>
  
          <Button
            variant='contained'
            name='apply'
            fullWidth
            type="submit"
            sx={{ 
              py: '0.8rem', 
              mt: '1rem', 
              width: '210px', 
              borderRadius: 50
            }}
          >
            Apply
          </Button>
        </FormProvider>
      </Box>
    </Dialog>
  )
}

export default ManageTagsModal