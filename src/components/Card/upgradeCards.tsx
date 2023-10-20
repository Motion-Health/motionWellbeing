import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import * as React from 'react';

import { useAccountContext } from '@/context/AccountContext';
import { checkout, GetPrice, GetProductsFromStripe } from '@/services/stripe';

export default function upgradeCard() {
  const [packages, setPackages] = useState([]);
  const {
    account: { accountId, accountStatus },
  } = useAccountContext();

  useEffect(() => {
    async function fetchProducts() {
      const products = await GetProductsFromStripe();
      const productArr = [];

      for (const product of products) {
        console.log(product);
        console.log('default', product.default_price);
        const formattedPrice = await GetPrice(product.default_price);
        console.log(formattedPrice);
        const formatted = {
          id: product.id,
          name: product.name,
          description: product.description,
          order: product.metadata.order,
          type: product.metadata.type,
          meta: product.metadata,
          priceId: product.default_price,
          features: Object.values(product.metadata).filter((value, index) => {
            return Object.keys(product.metadata)[index].startsWith('feature-');
          }),

          image: product.images[0],
          price: formattedPrice,
        };
        console.log(formatted);
        productArr.push(formatted);
      }
      console.log('productArr');
      console.log(productArr);
      setPackages(orderByOrder(productArr));
    }

    fetchProducts();
  }, []);

  function orderByOrder(array) {
    const sortedArray = array.sort((a, b) => {
      return a.order - b.order;
    });
    return sortedArray;
  }

  return (
    <Grid container>
      {packages.length > 1 &&
        packages
          ?.filter(
            (product) =>
              product.name === 'Standard' ||
              product.name === 'Premium' ||
              product.name === 'Group'
          )
          .map((product) => (
            <Grid key={product.id} item xs={12} lg={4} md={6} sm={12}>
              <div className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="product-content">
                  <Typography variant="h2">{product.name}</Typography>
                  <Typography variant="body" sx={{ my: '1rem' }}>
                    {product.description}
                  </Typography>
                  {product.type == 'group' && (
                    <Typography variant="h1">POA</Typography>
                  )}
                  {product.type == 'standard' && (
                    <Typography variant="h1">Free</Typography>
                  )}
                  {product.type != 'group' && product.type != 'standard' && (
                    <>
                      <div>
                        <Typography variant="h1">£{product.price}</Typography>
                        <Typography variant="body">per month</Typography>
                      </div>
                    </>
                  )}
                  <ul>
                    <li>
                      {' '}
                      <Typography variant="h3">You get..</Typography>
                    </li>
                    {product.features.map((feature) => (
                      <li key={feature}>
                        <Typography variant="body" component="p">
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                  {accountStatus == product.type && (
                    <Button variant="contained" fullWidth disabled>
                      Your Current Plan
                    </Button>
                  )}
                  {product.type == 'group' && accountStatus != product.type && (
                    <Button variant="contained" fullWidth href="/#contact">
                      GET A QUOTE
                    </Button>
                  )}
                  {product.type === 'premium' &&
                    accountStatus != product.type && (
                      <Button
                        variant="contained"
                        type="button"
                        onClick={() =>
                          checkout(product.priceId, product.type, accountId)
                        }
                        fullWidth
                      >
                        Upgrade Now
                      </Button>
                    )}
                </div>
              </div>
            </Grid>
          ))}
    </Grid>
  );
}
