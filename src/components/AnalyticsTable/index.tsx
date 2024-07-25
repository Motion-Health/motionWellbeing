import { Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useGetAllAccounts } from "@/services/account/useGetAllAccounts";
import { useCompletedActivities } from "@/services/activities/useCompletedActivities";
import { ActivityData } from "@/services/activities/useCreateActivity";
import { useListActivitiesWithMetrics } from "@/services/activities/useListActivitiesWithMetrics";

import table from "./table.module.css";
export const AnalyticsTable = () => {
  const { data: loadedAccounts, refetch: refetchAccounts } =
    useGetAllAccounts();
  const { data: activities, refetch: refetchActivities } =
    useListActivitiesWithMetrics();
  const { data: completedActivities, refetch: refetchCompletedActivities } =
    useCompletedActivities();

  const [displayActivities, setDisplayActivities] = useState<
    ActivityData[] | null
  >(null);

  useEffect(() => {
    if (activities?.length !== undefined) {
      setDisplayActivities(activities);
    }
  }, [activities]);

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="announcements">
      <div>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Accounts" />
          <Tab label="Actvitiy Data" />
          <Tab label="Logging Data" />
        </Tabs>
        {tabValue === 0 && (
          <table className={table.table}>
            <thead>
              <tr>
                <th> Account ID</th>
                <th>Service Provider Name</th>
                <th>Account Status</th>
                <th>Activities Completed</th>
              </tr>
            </thead>
            <tbody>
              {tabValue === 0 &&
                loadedAccounts?.allAccounts
                  .filter((account) => account.serviceProviderName !== "REYT")
                  .map((account) => (
                    <tr key={account.accountId}>
                      <td> {account.accountId}</td>

                      <td>{account.serviceProviderName}</td>
                      <td>{account.accountStatus}</td>
                      <td>{account.activitiesCompleted}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        )}

        {tabValue === 1 && (
          <table className={table.table}>
            <thead>
              <tr>
                <th>Activity Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Times Completed</th>
              </tr>
            </thead>
            <tbody>
              {tabValue === 1 &&
                displayActivities &&
                displayActivities.map((activity) => (
                  <tr key={activity.activityId}>
                    <td>{activity.activityName}</td>
                    <td>{activity.category}</td>
                    <td>{activity.description}</td>
                    <td>{activity.metrics.timesCompleted}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}

        {tabValue === 2 && (
          <table className={table.table}>
            <thead>
              <tr>
                <th>Activity</th>
                <th>Account</th>
                <th>Date</th>
                <th>Comment</th>
                <th>Participants</th>
                <th>Rating</th>
                <th>Would Do Again</th>
              </tr>
            </thead>
            <tbody>
              {tabValue === 2 &&
                completedActivities &&
                completedActivities.map((activity) => {
                  console.log(activity);
                  return (
                    <tr key={activity.logId}>
                      <td>
                        {
                          displayActivities?.find(
                            (activity) =>
                              activity.activityId === activity.activityId
                          )?.activityName
                        }
                      </td>
                      <td>
                        {
                          loadedAccounts?.allAccounts.find(
                            (account) =>
                              account.accountId === activity.accountId
                          )?.serviceProviderName
                        }
                      </td>

                      <td>
                        {new Date(activity.createdAt).toLocaleDateString() +
                          " " +
                          new Date(activity.createdAt).toLocaleTimeString()}
                      </td>
                      <td>{activity.comment}</td>
                      <td
                        style={{
                          maxWidth: "200px",
                        }}
                      >
                        {activity.participants}
                      </td>
                      <td>{activity.rating}</td>
                      <td>{activity.wouldDoAgain}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
