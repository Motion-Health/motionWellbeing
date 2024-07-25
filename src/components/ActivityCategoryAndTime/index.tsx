import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { categoryIcons } from "@/data/categoryIcons";
import { useActivityTimeLengths } from "@/services/activities/useActivityTimeLengths";

type Props = {
  category: string;
  timeLength: string;
};

export const ActivityCategoryAndTime = (props: Props) => {
  const { category, timeLength } = props;

  const { data: timeLengths } = useActivityTimeLengths();
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

  const categoryIcon: string = categoryIcons[category];

  return (
    <Grid item sx={{ mr: "3rem" }}>
      <Grid container alignItems="center">
        <img src={categoryIcon} alt="Activity icon" />
        <Typography
          variant="helper"
          sx={{
            bottom: "0.4rem",
            left: "0.5rem",
            position: "initial",
            paddingLeft: "10px",
          }}
        >
          {timeLengthLabels?.[timeLength]}
        </Typography>
      </Grid>
    </Grid>
  );
};
