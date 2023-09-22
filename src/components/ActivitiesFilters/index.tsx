import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useActivityTags } from '@/services/activities/useActivityTags';
import { useActivityTimeLengths } from '@/services/activities/useActivityTimeLengths';

type Props = {
  onFilterChange: (filters: string[]) => void;
};

export const ActivitiesFilters = (props: Props) => {
  const { onFilterChange } = props;

  const { data: activityTagsList } = useActivityTags();
  const { data: timeLengths } = useActivityTimeLengths();

  const [combinedFilters, setCombinedFilters] = useState<any[]>([]);

  useEffect(() => {
    if (activityTagsList?.length && timeLengths?.length) {
      const filterByAll = {
        value: 'all',
        label: 'All',
      };

      setCombinedFilters([filterByAll, ...timeLengths, ...activityTagsList]);
    }
  }, [activityTagsList, timeLengths]);

  const halfLength = Math.ceil(combinedFilters.length / 2);
  const leftFilters = combinedFilters.slice(0, halfLength);
  const rightFilters = combinedFilters.slice(halfLength);

  const [defaultValues, setDefaultValues] = useState({});

  useEffect(() => {
    if (combinedFilters.length) {
      const updatedDefaultValues = {};
      combinedFilters.forEach(
        (filter) => (updatedDefaultValues[filter.value] = false)
      );

      setDefaultValues(updatedDefaultValues);
    }
  }, []);

  const methods = useForm({
    defaultValues,
  });

  const { register, watch, reset } = methods;

  const [isCleared, setIsCleared] = useState(false);

  const clearFilters = () => {
    const resetValues = {};
    combinedFilters.forEach((filter) => (resetValues[filter.value] = false));

    reset(resetValues);

    // Toggle state to force a re-render, then set it back
    setIsCleared(true);
    setTimeout(() => setIsCleared(false), 0);
  };

  useEffect(() => {
    const subscription = watch((selectedFilters: any[]) => {
      const valueKeys = Object.keys(selectedFilters);
      const selectedValues = valueKeys.filter(
        (value) => selectedFilters[value]
      );

      onFilterChange(selectedValues);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <Grid
        container
        sx={{
          bgcolor: '#FFFFFF',
          boxShadow: 1,
          borderRadius: 2,
          padding: '1.5rem',
          position: 'absolute',
          marginTop: '3rem',
          zIndex: 1,
          right: 0,
          width: { xs: '10rem', sm: '20rem', md: '25rem' },
        }}
      >
        <FormProvider {...methods}>
          <Grid container direction="row">
            <Grid item xs={12} sm={6}>
              {leftFilters.map((filter) => (
                <FormGroup key={filter.value}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={!isCleared && !!watch(filter?.value)}
                        {...register(filter?.value)}
                      />
                    }
                    label={
                      <Typography variant="helper">{filter.label}</Typography>
                    }
                    value={true}
                  />
                </FormGroup>
              ))}
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              {rightFilters.map((filter) => (
                <FormGroup key={filter.value}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={!isCleared && !!watch(filter?.value)}
                        {...register(filter?.value)}
                      />
                    }
                    label={
                      <Typography variant="helper">{filter.label}</Typography>
                    }
                    value={true}
                  />
                </FormGroup>
              ))}
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" onClick={clearFilters}>
            Clear Filters
          </Button>
        </FormProvider>
      </Grid>
    </>
  );
};
