import axios from 'axios';

import { API } from '../services/api';

export const GetProductsFromStripe = async () => {
  const products = await axios
    .get('https://api.stripe.com/v1/products', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`,
      },
    })
    .then((data) => {
      return data.data.data.filter((price) => price.active);
    });
  return products;
};

export const GetPrice = async (priceCode) => {
  const price = await axios
    .get('https://api.stripe.com/v1/prices/' + priceCode, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`,
      },
    })
    .then((data) => {
      return data.data;
    });

  return price.unit_amount / 100;
};

export const checkout = async (priceId, type) => {
  const session_url = await API.post('/create-checkout-session', {
    priceId,
    type,
  }).then((data) => {
    window.location.href = data.data.url;
  });
  return session_url;
};
