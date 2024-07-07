// src/lib/gtag.js
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-FWQ8CBP68Y'; // Replace with your actual Measurement ID
ReactGA.initialize(GA_MEASUREMENT_ID);

// Function to track page views
export const trackPageView = (url) => {
  ReactGA.send({ hitType: 'pageview', page: url });
};

// Function to track custom events
export const trackEvent = (action, params) => {
  ReactGA.event({
    category: params.event_category,
    action: action,
    label: params.event_label,
    value: params.value,
  });
};