import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import React from 'react';

import ActivitiesCompleted from '@/components/Iframe/ActivitiesCompleted';
import ActivityCoordinator from '@/components/Iframe/ActivityCoordinator';
import ActivityItem from '@/components/Iframe/ActivityItem';
import IFrameAnalytics from '@/components/Iframe/Analytics';
import Gallery from '@/components/Iframe/Gallery';
import ResidentMood from '@/components/Iframe/ResidentMood';
import { useGetPublicAccount } from '@/services/account/useGetPublicAccount';
import { useFavoriteActivities } from '@/services/activities/useFavoriteActivities';
const useSuccessBanner = (query) => {
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showFailBanner, setShowFailBanner] = useState(false);
  const [failMessage, setFailMessage] = useState(null);

  return [showSuccessBanner, successMessage, setShowSuccessBanner];
};

const Dashboard = () => {
  const ACimage = '/assets/images/iframes/silver/AC.png';
  const ACalt = 'Carole, Activity Coordinator';
  const ACtext =
    '“At Twelve Trees we have our own dedicated activities team who plan, create and deliver holistic activities on a daily basis. Activities can be on a one-to-one basis, allowing the team to focus on the individual, which is particularly beneficial for residents with dementia. Group activities provide a chance for residents to socialise, create relationships and improve physical and emotional health; and range from musical entertainment to crafts to movement.”';

  const router = useRouter();
  const url = router.query;
  console.log('accountId', url.accountId);
  const { data: urldata } = useGetPublicAccount(url.accountId);

  // Check if urldata and urldata.account exist before logging and using them
  if (urldata && urldata.account) {
    console.log('Account Info', urldata.account);
  }
  const account = urldata?.account; // Use optional chaining to safely access account

  const { data: favoriteActivities } = useFavoriteActivities();
  const [favoriteActivitiesList, setFavoriteActivitiesList] = useState([]);
  useEffect(() => {
    if (favoriteActivities?.length) {
      setFavoriteActivitiesList(favoriteActivities.slice(0, 3));
    }
  }, [favoriteActivities]);

  return (
    <>
      <div className="p-4">
        <div className="bg-white m-3 p-4 shadow-md rounded-md text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ResidentMood rating={account?.moodRating} />
            <ActivitiesCompleted number={account?.activityCount} />
            <IFrameAnalytics />
          </div>
          <div className="mt-4">
            <div className="m-3 bg-gray-100 shadow-md rounded text-center">
              <h3 className="text-left p-1 text-gray-700">
                Recent Activities, Events & Key Benefits
              </h3>
            </div>
            <ActivityItem
              title="The White Cliffs of Dover, Moon River"
              type="Sing and Dance"
            />
            <ActivityItem title="Chair movement | Rowing" type="Movement" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <ActivityCoordinator Image={ACimage} ImageALT={ACalt} text={ACtext} />
          <Gallery />
        </div>
      </div>

      <div className="text-white flex-col items-center py-8 m-4">
        <div className="w-full bg-[#68658F] rounded-md py-8 text-center">
          <h2 className="text-xl font-bold">Make an Enquiry</h2>
        </div>
        <div className="flex text-right mt-4">
          <img
            src="/assets/logos/PoweredByMotion.png"
            alt="Motion Logo"
            className="ml-2 h-8"
          />
          <a
            href="https://motion.example.com"
            className="ml-2 text-blue-500 underline"
          >
            Click here to learn more
          </a>
        </div>
      </div>

      <p>{JSON.stringify(account)}</p>
    </>
  );
};

export default Dashboard;
