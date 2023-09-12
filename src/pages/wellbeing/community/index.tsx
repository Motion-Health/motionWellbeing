import { Button } from '@mui/material';

import CommunityTable from '@/components/CommunityTable';
import PageHeader from '@/components/PageHeader/index';
import { Main } from '@/templates/Main';
import { useAccountContext } from '@/context/AccountContext'
import ServiceProviderDetailsModal from '@/components/modals/ServiceProviderDetailsModal'
import { useState } from 'react'
import Head from 'next/head'

const Community = () => {
  const { account: { accountStatus} } = useAccountContext()

  const [toggleServiceProviderModal, setToggleServiceProviderModal] = useState<number>(1)
  const [modalOpenAction, setModalOpenAction] = useState<string | null>(null)
  return (
    <Main>
      <Head>
        <title>Community | Motion Wellbeing</title>
      </Head>
      <ServiceProviderDetailsModal toggleServiceProviderModal={toggleServiceProviderModal} modalOpenAction={modalOpenAction} serviceProviderData={null} />
      <PageHeader title="Community">
        {(accountStatus === "group" || accountStatus === "admin") && (
          <Button 
            variant="contained" 
            data-test-id="add-service-provider-button"
            onClick={() => {
              setToggleServiceProviderModal(Math.random())
              setModalOpenAction("add-service-provider")
            }}
          >
            Add Service Provider
          </Button>
        )}
      </PageHeader>

      <CommunityTable />
    </Main>
  );
};

export default Community;
