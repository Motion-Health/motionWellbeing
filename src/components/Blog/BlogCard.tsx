import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import React from 'react';
import styles from 'src/components/Blog/BlogCard.module.css';

export default function BlogCard({ blog }) {
  const router = useRouter();

  return (
    <Grid key={blog.id} item xs={12} lg={4} md={6} sm={12}>
      <div
        className={styles.Card}
        onClick={() => router.push('/blog/[name]', `/blog/${blog.name}`)}
      >
        <img src={blog.image} alt={blog.name} />
        <div className={styles.Content}>
          <Typography variant="h2">{blog.name}</Typography>
          <Typography variant="body2" sx={{ my: '1rem' }}>
            {blog.description}
          </Typography>
          <Button
            variant="contained"
            type="button"
            className={styles.learnMore}
            onClick={() => router.push('/blog/[name]', `/blog/${blog.name}`)}
            fullWidth
          >
            Learn more
            <img
              src="/assets/icons/ph_arrow-right.svg"
              className={styles.arrow}
              alt="arrow"
            />
          </Button>
        </div>
      </div>
    </Grid>
  );
}
