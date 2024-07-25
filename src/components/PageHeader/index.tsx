import { Typography } from "@mui/material";
import React, { ReactNode } from "react";
type Props = {
  title: string;
  margin?: boolean;
  children: ReactNode;
};
import styles from "./PageHeader.module.css";

const PageHeader = (props: Props) => {
  const { title, margin = true, children } = props;
  return (
    <div
      className={styles.header}
      // style={{ display: margin ? 'none' : 'block' }}
    >
      <Typography variant="h1" sx={{ mb: margin ? "2rem" : "16px" }}>
        {title}
      </Typography>
      <div style={{ alignSelf: "baseline" }}>{children}</div>
    </div>
  );
};

export default PageHeader;
