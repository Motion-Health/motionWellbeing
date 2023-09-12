import React from "react";

import PageHeader from "@/components/PageHeader/index";
import { Main } from "@/templates/Main";
import { AnnouncementsForm } from "@/components/forms/AnnouncementsForm";
import Head from "next/head"
const Announcements = () => {
  return (
    <Main>
      <Head>
        <title>Announcements | Motion Wellbeing</title>
      </Head>
      <PageHeader title="Announcements"></PageHeader>
      <AnnouncementsForm />​
    </Main>
  );
};

export default Announcements;
