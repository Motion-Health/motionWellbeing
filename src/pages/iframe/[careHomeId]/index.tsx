import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import React from 'react';

import ActivitiesCompleted from '@/components/Iframe/ActivitiesCompleted';
import ActivitiesOverTime from '@/components/Iframe/ActivitiesOverTime';
import ActivityCoordinator from '@/components/Iframe/ActivityCoordinator';
import ActivityItem from '@/components/Iframe/ActivityItem';
import FacebookPage from '@/components/Iframe/FacebookPage';
import { trackEvent, trackPageView } from '@/components/Iframe/gtag/silver';
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
  const ACimage = '/assets/images/iframes/silver/AC.jpg';
  const ACalt = 'Lisa, Activities Coordinator';
  const ACtext =
    '“At Silver Healthcare we have our own dedicated activities team who plan, create and deliver holistic activities on a daily basis. Activities can be on a one-to-one basis, allowing the team to focus on the individual, which is particularly beneficial for residents with dementia. Group activities provide a chance for residents to socialise, create relationships and improve physical and emotional health; and range from musical entertainment to crafts to movement”';
  const facebookURL = 'https://www.facebook.com/SilverHealthCareLtd';
  // const url = { accountId: '5b9568ed-a9fa-4812-9330-7599f0d1ca97' };
  const enquiryURL = 'https://motion.example.com';

  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  const handleEnquiryClick = () => {
    trackEvent('click', {
      event_category: 'Enquiry Click',
      event_label: 'Make an enquiry',
      value: '1',
    });

    // Check if 'top' is not null before attempting to navigate
    if (top !== null) {
      top.location.href = enquiryURL;
    } else {
      console.error('Unable to navigate to the enquiry URL');
    }
  };
  //End of Analytics

  const router = useRouter();
  const url = router.query; // Use this if you want to get the query params in URL (e.g. ?accountId=123)
  const accountId = Array.isArray(url.accountId)
    ? url.accountId[0]
    : url.accountId ?? '4214027b-0cf6-4cde-a5b8-0739f56c4563';

  const { data: urldata } = useGetPublicAccount(accountId as string);
  // const url = { accountId: '5b9568ed-a9fa-4812-9330-7599f0d1ca97'

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
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v20.0"
        nonce="QwgXYBeW"
      ></script>
      <div className="p-4">
        <div className="bg-white m-3 p-4 shadow-md rounded-md text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ResidentMood rating={account?.moodRating} />
            <ActivitiesCompleted number={account?.activitesCompleted} />
            <ActivitiesOverTime dates={account?.activitiesPerMonth} />
          </div>
          <div className="mt-4">
            <div className="m-3 bg-gray-100 shadow-md rounded text-center">
              <h3 className="text-left p-1 text-gray-700">
                Recent Activities, Events & Key Benefits
              </h3>
            </div>

            {account?.recentActivities.map((activity) => (
              <ActivityItem
                key={activity.id}
                name={activity.details.activityName}
                time={activity.details.timeLength}
                category={activity.details.category}
                image={activity.details.imageFileName}
                rating={activity.rating}
                description={activity.details.description}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <ActivityCoordinator Image={ACimage} ImageALT={ACalt} text={ACtext} />
          <FacebookPage url={facebookURL} />
        </div>
      </div>

      <div className="text-white flex-col items-center py-8 m-4">
        <div
          className="w-full bg-[#68658F] rounded-md py-8 text-center cursor-pointer hover:bg-[#57567E] focus:bg-[#57567E] focus:outline-none focus:ring-2 focus:ring-[#4c4b63] transition-colors duration-150"
          onClick={handleEnquiryClick}
          role="button"
          tabIndex={0}
        >
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
    </>
  );
};

export default Dashboard;
