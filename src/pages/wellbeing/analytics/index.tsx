import React from "react";

import PageHeader from "@/components/PageHeader/index";
import { Main } from "@/templates/Main";
import { AnalyticsTable } from "@/components/AnalyticsTable";
import Head from "next/head"
const Analytics = () => {
  return (
    <Main>
      <Head>
        <title>Analytics | Motion Wellbeing</title>
      </Head>
      <PageHeader title="Analytics"></PageHeader>
      <AnalyticsTable />​
    </Main>
  );
};

export default Analytics;