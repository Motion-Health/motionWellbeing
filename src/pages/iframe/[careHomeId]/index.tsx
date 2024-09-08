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
  const router = useRouter();
  const url = router.query; // Use this if you want to get the query params in URL (e.g. ?accountId=123)
  var careHomeId = Array.isArray(url.accountId)
    ? url.careHomeId[0]
    : url.careHomeId ?? '4f0fcecc-352d-462e-a6e0-3627dcb3dac0';

  var ACimage = '/assets/images/iframes/silverHealthcare.jpg';
  var ACalt = 'Lisa, Activities Coordinator';
  var ACtext =
    '“At Silver Healthcare we have our own dedicated activities team who plan, create and deliver holistic activities on a daily basis. Activities can be on a one-to-one basis, allowing the team to focus on the individual, which is particularly beneficial for residents with dementia. Group activities provide a chance for residents to socialise, create relationships and improve physical and emotional health; and range from musical entertainment to crafts to movement”';
  var facebookURL = 'https://www.facebook.com/SilverHealthcareLtd';

  // Hardcoded care home details (for now)
  if (
    careHomeId == 'silver-healthcare' ||
    careHomeId == '4f0fcecc-352d-462e-a6e0-3627dcb3dac0'
  ) {
    careHomeId = '4f0fcecc-352d-462e-a6e0-3627dcb3dac0';
    ACimage = '/assets/images/iframes/silverHealthcare.jpg';
    ACalt = 'Lisa, Activities Coordinator';
    ACtext =
      '“At Silver Healthcare we have our own dedicated activities team who plan, create and deliver holistic activities on a daily basis. Activities can be on a one-to-one basis, allowing the team to focus on the individual, which is particularly beneficial for residents with dementia. Group activities provide a chance for residents to socialise, create relationships and improve physical and emotional health; and range from musical entertainment to crafts to movement”';
    facebookURL = 'https://www.facebook.com/SilverHealthcareLtd';
  } else if (
    careHomeId == 'westbourne-house' ||
    careHomeId == 'e0a05325-7bed-411b-a5c6-3ab96d552c1b'
  ) {
    careHomeId = 'e0a05325-7bed-411b-a5c6-3ab96d552c1b';
    ACimage = '/assets/images/iframes/palmsRow.jpg';
    ACalt = 'Amy, Activities Coordinator';
    ACtext =
      '“At Westbourne House we pride ourselves on delivering person-centred wellbeing activities tailored to the unique needs and preferences of each resident. We organise a variety of engaging and therapeutic activities, including art and music therapy, gardening, gentle exercise classes, and social events. These activities are designed to promote physical health, mental stimulation, and emotional satisfaction, ensuring that each resident feels valued, respected, and part of a vibrant community. By focusing on individual interests and abilities, we create a supportive environment where residents can thrive and enjoy a high quality of life.”';
    facebookURL = 'https://www.facebook.com/PalmsRowHealthcare';
  } else if (
    careHomeId == 'northfield' ||
    careHomeId == 'e0a05325-7bed-411b-a5c6-3ab96d552c1b'
  ) {
    careHomeId = 'e0a05325-7bed-411b-a5c6-3ab96d552c1b';
    ACimage = '/assets/images/iframes/palmsRow.jpg';
    ACalt = 'Amy, Activities Coordinator';
    ACtext =
      '“At Northfield Nursing Home we are dedicated to providing person-centred wellbeing activities that are tailored to each resident’s individual needs and preferences. Our caring staff facilitates a range of engaging and therapeutic experiences, including art and music therapy, gardening, light exercise sessions, and social events. These activities aim to improve physical health, stimulate the mind, and foster emotional well-being, ensuring that every resident feels cherished, respected, and connected to our lively community. By prioritising personal interests and capabilities, we cultivate an environment where residents can thrive and enjoy a fulfilling quality of life.”';
    facebookURL = 'https://www.facebook.com/PalmsRowHealthcare';
  } else if (
    careHomeId == 'lee-mount' ||
    careHomeId == '99552814-387e-4f10-93ab-4752ca43f599'
  ) {
    careHomeId = '99552814-387e-4f10-93ab-4752ca43f599';
    ACimage = '/assets/images/iframes/leeMount.jpg';
    ACalt = 'Sherrie, Activities Manager';
    ACtext =
      '“At Lee Mount Care Home, we are committed to delivering person-centred wellbeing activities that are especially tailored to the individual needs and preferences of each resident. Our dedicated team offers a variety of personalised activities, including art and music therapy sessions, sensory games, and tailored exercise routines. By focusing on what each resident enjoys and can participate in, we ensure activities that promote physical health, mental engagement, and emotional well-being. This personalised approach fosters a sense of belonging and fulfilment, allowing every individual to thrive in a supportive and nurturing environment.”';
    facebookURL = 'https://www.facebook.com/leeMountcare';
  }

  const { data: urldata } = useGetPublicAccount(careHomeId as string);

  // Check if urldata and urldata.account exist before logging and using them
  if (urldata && urldata.account) {
    console.log('Account Info', urldata.account);
  }

  const account = urldata?.account; // Use optional chaining to safely access account
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

  // Determine the type of activities
  const activities = account?.activitiesToDisplay || [];
  const hasUpcomingActivities = activities.some(
    (activity) => activity.activityType === 'upcoming'
  );

  return (
    <div className="font-Montserrat">
      <div id="fb-root"></div>
      <div ref={scriptRef}></div>
      <div className="p-4">
        <div className="bg-white m-3 p-4 shadow-md rounded-md text-center">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
            <ResidentMood rating={account?.moodRating} />
            <ActivitiesCompleted number={account?.activitiesCompleted} />
            <ActivitiesOverTime dates={account?.activitiesPerMonth} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="mt-4 md:col-span-3">
              <div className="bg-gray-100 shadow-md rounded text-center">
                <h3 className="text-left p-1 text-gray-700">
                  Recent Activities and Events
                </h3>
              </div>

              {account?.activitiesToDisplay
                .filter((activity) => activity.activityType === 'recent')
                .map((activity) => (
                  <ActivityItem
                    key={activity.id}
                    name={activity.details?.activityName ?? 'undefined'}
                    time={activity.details?.timeLength ?? 'undefined'}
                    category={activity.details?.category ?? 'undefined'}
                    image={
                      activity.details?.imageFileName ??
                      '/assets/images/exercises/activity-placeholder.png'
                    }
                    rating={activity.rating}
                    description={activity.details?.description ?? 'undefined'}
                    activityType={activity.details?.activityType ?? 'undefined'}
                  />
                ))}
            </div>
            <div className="md:col-span-1 flex flex-col w-full h-full">
              <FacebookPage url={facebookURL} width="550px" height="100%" />
            </div>

            {/* For later use
            
            <div className="mt-4 md:col-span-3">
              <div className="bg-gray-100 shadow-md rounded text-center">
                <h3 className="text-left p-1 text-gray-700">
                  Upcoming Activities and Events
                </h3>
              </div>

              {account?.activitiesToDisplay
                .filter((activity) => activity.activityType === 'upcoming')
                .map(
                  (activity) => (
                    console.log('activity*!*!*!*!:', activity),
                    (
                      <ActivityItem
                        key={activity.id}
                        name={activity.details?.activityName ?? 'undefined'}
                        time={activity.details?.timeLength ?? 'undefined'}
                        category={activity.details?.category ?? 'undefined'}
                        image={
                          activity.details?.imageFileName ??
                          '/assets/images/exercises/activity-placeholder.png'
                        }
                        rating={activity.rating}
                        description={
                          activity.details?.description ?? 'undefined'
                        }
                        activityType={
                          activity.details?.activityType ?? 'undefined'
                        }
                      />
                    )
                  )
                )}
            </div> */}
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
