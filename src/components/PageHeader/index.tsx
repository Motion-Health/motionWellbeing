import { Typography } from '@mui/material';
import React from 'react';
type Props = {
  title: string;
  margin?: boolean;
  children?: React.ReactNode;
};
import styles from './PageHeader.module.css';

const PageHeader = (props: Props) => {
  const { title, margin = true, children } = props;
  return (
    <div
      className={styles.header}
      // style={{ display: margin ? 'none' : 'block' }}
    >
      <Typography
        variant="h1"
        color="primary"
        sx={{
          mb: margin ? '2rem' : '16px',
          mt: '6rem',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>
      {children && <div style={{ alignSelf: 'baseline' }}>{children}</div>}
    </div>
  );
};

export default PageHeader;
