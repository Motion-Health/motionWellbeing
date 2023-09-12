import { useActivityComments } from "@/services/activities/useActivityComments"
import { Grid, Typography } from "@mui/material"

type Props = {
  activityId?: string
}

export const ActivityCommentsList = ({activityId}: Props) => {
  const { data: activityCommentsContent } = useActivityComments(activityId)

  return (
    <Grid container sx={{padding: '1rem'}}>
      <Typography variant='h2'>Comments</Typography>
      {activityCommentsContent?.length !== 0 && (
        <Grid item sx={{width: '100%', backgroundColor: '#FFFFFF', borderRadius: '0.5rem', marginY: '1.5rem', paddingBottom: '1.5rem'}}>
          {activityCommentsContent?.map((commentContent) => {
            const {comment, rating, serviceProviderName} = commentContent
            return (
              <Grid container sx={{height: '5rem', padding: '1.5rem'}}>
                <Grid container>
                  <Grid item sx={{mr: '1rem'}}>
                    <img src={`/assets/emotions/emotion-${rating}.svg`} width='40px' alt={`${rating}/5 rating face icon`} />
                  </Grid>

                  <Grid item>
                    <Typography variant='h3'>{serviceProviderName}</Typography>
                    <Typography variant='helper'>{comment}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      )}

      {activityCommentsContent?.length === 0 && (
        <Grid container>
          <Typography variant='helper' sx={{mt: '1rem'}}>There are no comments yet for this activity</Typography>
        </Grid>
      )}
    </Grid>
  )
}