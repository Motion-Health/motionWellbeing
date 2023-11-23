import { Alert, AlertColor } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ServiceProviderDetailsContent from '@/components/modals/ServiceProviderDetailsContent';
import PageHeader from '@/components/PageHeader/index';
import { useGetAccount } from '@/services/account/useGetAccount';
import { Main } from '@/templates/Main';
const Profile = () => {
  const [toggleServiceProviderModal, setToggleServiceProviderModal] =
    useState(1);
  const [serviceProviderData, setServiceProviderData] = useState(null);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>('success');
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const accountService = useGetAccount();
  const router = useRouter();
  // Fetch data once
  useEffect(() => {
    if (accountService.isSuccess) {
      setServiceProviderData(accountService.data);
    }
  }, [accountService.isSuccess, accountService.data]);

  // Update modal toggle when data is fetched
  useEffect(() => {
    if (serviceProviderData) {
      console.log('increasing toggleServiceProviderModal');
      setToggleServiceProviderModal((prev) => prev + 1); // Or any other logic to change the value
    }
  }, [serviceProviderData]);
  useEffect(() => {
    if (router.query?.accountUpdated !== undefined) {
      setAlertMessage(
        `Success - The details for ${
          router.query?.accountUpdated || 'service provider'
        } have been updated`
      );
      setAlertSeverity('success');
    }

    if (router.query?.accountCreated !== undefined) {
      setAlertMessage(
        `Success - ${
          router.query?.accountCreated || 'Service provider'
        } has been created. An email has been sent to the admin.`
      );
      setAlertSeverity('success');
    }

    if (router.query?.deletedAccount !== undefined) {
      setAlertMessage(
        `Success - ${
          router.query?.deletedAccount || 'service provider'
        } has been deleted. The admin will no longer have access.`
      );
      setAlertSeverity('success');
    }

    if (router.query?.passwordReset) {
      setAlertMessage(
        `Success - A password reset link has been sent to ${router.query?.passwordReset}`
      );
      setAlertSeverity('success');
    }
  }, [router.query]);
  return (
    <Main>
      <Head>
        <title>Profile | Motion Wellbeing</title>
      </Head>
      <PageHeader title="Profile" />
      {alertMessage && (
        <Alert
          icon={false}
          severity={alertSeverity}
          sx={{
            position: 'relative',
            my: '3rem',
            padding: '1rem',
            marginTop: 0,
          }}
          onClose={() => setAlertMessage(null)}
        >
          {alertMessage}
        </Alert>
      )}
      <ServiceProviderDetailsContent
        toggleServiceProviderModal={toggleServiceProviderModal}
        modalOpenAction={'edit-service-provider'}
        serviceProviderData={serviceProviderData}
        onFormSubmit={() => {}}
      />
    </Main>
  );
};

export default Profile;
