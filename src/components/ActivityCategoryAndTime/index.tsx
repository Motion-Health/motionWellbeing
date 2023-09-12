import { categoryIcons } from "@/data/categoryIcons"
import { useActivityTimeLengths } from "@/services/activities/useActivityTimeLengths"
import { Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"

type Props = {
  category: string
  timeLength: string
}

export const ActivityCategoryAndTime = (props: Props) => {
  const {category, timeLength} = props

  const {data: timeLengths} = useActivityTimeLengths()
  const [timeLengthLabels, setTimeLengthLabels] = useState<null | object>(null)

  useEffect(() => {
    if (timeLengths?.length) {
      const timeLengthLabelsObject: any = {}
      timeLengths.forEach((timeLength: any) => {
        timeLengthLabelsObject[timeLength.value] = timeLength.label
      })
      
      setTimeLengthLabels(timeLengthLabelsObject)
    }

  }, [timeLengths])

  const categoryIcon: string = categoryIcons[category]

  return (
    <Grid item sx={{mr: '3rem'}}>
      <img src={categoryIcon} alt="Activity icon" />
      <Typography variant='helper' sx={{position: 'relative', bottom: '0.4rem', left: '0.5rem'}}>{timeLengthLabels?.[timeLength]}</Typography>
    </Grid>
  )
}