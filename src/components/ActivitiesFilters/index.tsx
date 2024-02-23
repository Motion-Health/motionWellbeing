import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';

import { useActivityTags } from '@/services/activities/useActivityTags';
import { useActivityTimeLengths } from '@/services/activities/useActivityTimeLengths';

type Props = {
  onFilterChange: (filters: string[]) => void;
  currentFilterValues: string[];
};

type Filter = {
  value: string;
  label: string;
};

export const ActivitiesFilters = ({
  onFilterChange,
  currentFilterValues,
}: Props) => {
  const { data: activityTagsList, isLoading: isTagsLoading } =
    useActivityTags();
  const { data: timeLengths, isLoading: isTimeLengthsLoading } =
    useActivityTimeLengths();

  const [combinedFilters, setCombinedFilters] = useState<Filter[]>([]);
  const [filterValues, setFilterValues] = useState<{ [key: string]: boolean }>(
    Object.fromEntries(currentFilterValues.map((value) => [value, true]))
  );

  useEffect(() => {
    if (activityTagsList?.length && timeLengths?.length) {
      setCombinedFilters([
        { value: 'all', label: 'All' },
        ...timeLengths,
        ...activityTagsList,
      ]);
    }
  }, [activityTagsList, timeLengths]);

  const clearFilters = () => setFilterValues({});

  useEffect(() => {
    onFilterChange(
      Object.keys(filterValues).filter((value) => filterValues[value])
    );
  }, [filterValues]);

  const { leftFilters, rightFilters } = useMemo(() => {
    const halfLength = Math.ceil(combinedFilters.length / 2);
    return {
      leftFilters: combinedFilters.slice(0, halfLength),
      rightFilters: combinedFilters.slice(halfLength),
    };
  }, [combinedFilters]);

  const style = {
    bgcolor: '#FFFFFF',
    boxShadow: 1,
    borderRadius: 2,
    padding: '1.5rem',
    marginTop: '3rem',
    position: 'fixed',
    zIndex: 10,
    right: 0,
    width: { xs: '100%', sm: '100%', md: '50%' },
    top: '105px',
  };

  const FilterGroup = ({ filters }: { filters: Filter[] }) => (
    <>
      {filters.map((filter) => (
        <FormGroup key={filter.value}>
          <FormControlLabel
            control={
              <Checkbox
                checked={filterValues[filter.value] || false}
                onChange={(e) =>
                  setFilterValues({
                    ...filterValues,
                    [filter.value]: e.target.checked,
                  })
                }
              />
            }
            label={<Typography variant="helper">{filter.label}</Typography>}
            value={true}
          />
        </FormGroup>
      ))}
    </>
  );
  if (combinedFilters.length === 0) {
    return null;
  }
  return (
    <Grid container sx={style}>
      <Grid container xs={12} direction="row">
        <Grid item xs={6} sm={6}>
          <FilterGroup filters={leftFilters} />
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <FilterGroup filters={rightFilters} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={clearFilters}>
          Clear Filters
        </Button>
      </Grid>
    </Grid>
  );
};
