// src/lib/gtag.js
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-FWQ8CBP68Y'; // Replace with your actual Measurement ID
ReactGA.initialize(GA_MEASUREMENT_ID);

export const trackPageView = (url) => {
  ReactGA.send({ hitType: 'pageview', page: url });
};
