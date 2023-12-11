import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import React from 'react';
import styles from 'src/components/Blog/BlogCard.module.css';

export default function BlogCard({ blog }) {
  const router = useRouter();
  blog.link = blog.name.replace(/ /g, '-').replace(/[^a-zA-Z0-9-]/g, '');

  return (
    <Grid key={blog.id} item xs={12} lg={4} md={6} sm={12}>
      <div
        className={styles.Card}
        onClick={() => router.push('/blog/[link]', `/blog/${blog.link}`)}
      >
        <img
          src={`/assets/images/blogs/blog${blog.id}/thumbnail.webp`}
          alt={blog.name}
        />
        <div className={styles.Content}>
          <Typography variant="h2">{blog.name}</Typography>
        </div>
        <Button
          variant="contained"
          type="button"
          className={styles.learnMore}
          onClick={() => router.push('/blog/[link]', `/blog/${blog.link}`)}
          fullWidth
        >
          Read blog
          <img
            src="/assets/icons/ph_arrow-right.svg"
            className={styles.arrow}
            alt={blog.name}
          />
        </Button>
      </div>
    </Grid>
  );
}
