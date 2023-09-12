import { Typography } from '@mui/material';
import React, { ReactNode } from 'react';
type Props = {
  title: string;
  children: ReactNode;
};
import styles from './PageHeader.module.css';

const PageHeader = (props: Props) => {
  return (
    <div className={styles.header}>
      <Typography variant="h1" sx={{ mb: '2rem' }}>
        {props.title}
      </Typography>
      <div style={{alignSelf: 'baseline'}}>{props.children}</div>
    </div>
  );
};

export default PageHeader;
