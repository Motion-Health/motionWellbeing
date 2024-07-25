import { useState } from "react";

import { Alert } from "@mui/material";

export const AlertBanner = ({ shouldDisplay, message, severity }) => {
  const [alertIsOpen, setAlertIsOpen] = useState(true);

  const handleAlertClose = () => {
    setAlertIsOpen(false);
  };

  return shouldDisplay ? (
    alertIsOpen ? (
      <Alert
        onClose={handleAlertClose}
        icon={false}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    ) : null
  ) : null;
};
