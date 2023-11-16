import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useEffect, useState } from 'react';

import ServiceProviderDetailsContent from '@/components/modals/ServiceProviderDetailsContent';
import { Account, Account } from '@/models/Account';
import theme from '@/styles/theme';

type Props = {
  toggleServiceProviderModal: number;
  modalOpenAction: string | null;
  serviceProviderData: Account | null;
};

const ServiceProviderDetailsModal = (props: Props) => {
  const { toggleServiceProviderModal, modalOpenAction, serviceProviderData } =
    props;

  const handleFormSubmit = (formData) => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (toggleServiceProviderModal !== 1) {
      setIsModalOpen(true);
    }
  }, [toggleServiceProviderModal]);

  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Dialog
      open={isModalOpen}
      fullScreen={shouldDisplayFullScreen}
      className="service-provider-details-modal-wrapper"
    >
      <CloseIcon
        onClick={() => setIsModalOpen(false)}
        style={{
          position: 'absolute',
          right: '1.5rem',
          top: '1.5rem',
          cursor: 'pointer',
        }}
      />
      <Box
        sx={{
          margin: '2rem',
        }}
      >
        <Typography variant="h1">Service provider details</Typography>
        <ServiceProviderDetailsContent
          toggleServiceProviderModal={toggleServiceProviderModal}
          modalOpenAction={modalOpenAction}
          serviceProviderData={serviceProviderData}
          onFormSubmit={handleFormSubmit}
        >
          <Button
            variant="text"
            name="cancel"
            fullWidth
            onClick={() => setIsModalOpen(false)}
            sx={{
              py: '0.8rem',
              mt: '1rem',
              ml: '1rem',
              width: '210px',
              borderRadius: 50,
            }}
          >
            Cancel
          </Button>
        </ServiceProviderDetailsContent>
      </Box>
    </Dialog>
  );
};

export default ServiceProviderDetailsModal;
