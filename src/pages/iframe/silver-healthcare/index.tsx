import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
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
  const url = { accountId: '5b9568ed-a9fa-4812-9330-7599f0d1ca97' };
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
  // const url = router.query; // Use this if you want to get the query params in URL (e.g. ?accountId=123)

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

  // Create a ref for the Facebook script container
  const scriptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scriptRef.current) {
      // Load the Facebook SDK script
      const script = document.createElement('script');
      script.src =
        'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v20.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      scriptRef.current.appendChild(script);

      // Cleaning up the Facebook script on unmount
      return () => {
        if (scriptRef.current) {
          scriptRef.current.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="font-Montserrat">
      <div id="fb-root"></div>
      <div ref={scriptRef}></div>
      <div className="p-4">
        <div className="bg-white m-3 p-4 shadow-md rounded-md text-center">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
            <ResidentMood rating={account?.moodRating} />
            <ActivitiesCompleted number={account?.activitesCompleted} />
            <ActivitiesOverTime dates={account?.activitiesPerMonth} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="mt-4 md:col-span-3">
              <div className="bg-gray-100 shadow-md rounded text-center">
                <h3 className="text-left p-1 text-gray-700">
                  Recent Activities and Events
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
            <div className="md:col-span-1 flex flex-col w-full h-full">
              <FacebookPage url={facebookURL} width="550px" height="100%" />
            </div>
          </div>
        </div>

        <div className="">
          <ActivityCoordinator Image={ACimage} ImageALT={ACalt} text={ACtext} />
        </div>
      </div>

      <div className="text-white flex-col items-center m-4 p-3  pt-0 mt-0">
        <div
          className="w-full bg-[#68658F] rounded-md shadow-md py-8 text-center cursor-pointer hover:bg-[#57567E] focus:bg-[#57567E] focus:outline-none focus:ring-2 focus:ring-[#4c4b63] transition-colors duration-150 "
          onClick={handleEnquiryClick}
          role="button"
          tabIndex={0}
        >
          <h2 className="text-xl font-bold">Make an Enquiry</h2>
        </div>
        <div className="flex text-right mt-4 flex-row-reverse">
          <a
            href="https://motion.example.com"
            className="ml-2 text-blue-600 my-auto ml-4 font-black"
          >
            Click here to learn more
          </a>
          <img
            src="/assets/logos/PoweredByMotion.png"
            alt="Motion Logo"
            className="ml-2 h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
