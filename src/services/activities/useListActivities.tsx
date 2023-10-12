import moment from 'moment';
import { useQuery } from 'react-query';

import { API } from '../api';
import { ActivityData } from './useCreateActivity';

const listActivities = async () => {
  const { data } = await API.get('/activities/');

  return data;
};

export const useListActivities = (
  filterByCategory?: string | string[] | null,
  filterByTags?: string | string[] | null,
  filterByTimeLengths?: string | string[] | null
) => {
  return useQuery(['list_activities'], listActivities, {
    select: (activitiesData) => {
      let filteredData = activitiesData;

      if (filterByCategory === 'new') {
        const fourteenDaysAgo = moment().subtract(14, 'days');

        filteredData = filteredData.filter((activity: ActivityData) => {
          const createdAtDate = moment(activity.createdAt);
          return fourteenDaysAgo < createdAtDate;
        });
      } else if (filterByCategory) {
        console.log('filterByCategory', filterByCategory);
        filteredData = filteredData.filter(
          (activity: ActivityData) => activity.category === filterByCategory
        );
      }

      if (filterByTags?.length) {
        filteredData = filteredData.filter((activity: ActivityData) => {
          return activity.tags?.some((tag) => filterByTags.includes(tag));
        });
      }

      if (filterByTimeLengths?.length) {
        filteredData = filteredData.filter((activity: ActivityData) => {
          return filterByTimeLengths.includes(activity.timeLength);
        });
      }

      return filteredData;
    },
  });
};
