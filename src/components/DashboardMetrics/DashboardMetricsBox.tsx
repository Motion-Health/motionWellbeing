import { Grid, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useAccountContext } from "@/context/AccountContext";
import { useDashboardMetrics } from "@/services/dashboard/useDashboardMetrics";
import { useState, useEffect } from "react";

type DashboardMetricBoxProps = {
  metricName: string;
  serviceName: string;
  dateRangeFilter: string;
};

export const DashboardMetricBox = ({
  metricName,
  serviceName,
  dateRangeFilter,
}: DashboardMetricBoxProps) => {
  const {
    account: { accountId, accountStatus },
  } = useAccountContext();

  const { data: fetchedMetrics, refetch: refetchMetrics } = useDashboardMetrics(
    serviceName,
    accountId,
    accountStatus,
    dateRangeFilter
  );

  const [metricCount, setMetricCount] = useState<number | null>(null);
  const [metricChange, setMetricChange] = useState<number | null>(null);

  useEffect(() => {
    if (fetchedMetrics?.metricCount !== undefined) {
      setMetricCount(fetchedMetrics.metricCount);
      setMetricChange(fetchedMetrics.metricChange);
    }
  }, [fetchedMetrics]);

  useEffect(() => {
    refetchMetrics();
  }, [dateRangeFilter]);

  return (
    <Grid
      item
      sx={{
        minWidth: "20%",
        backgroundColor: "#010A7D80",
        borderRadius: 2,
        color: "#FFFFFF",
        mr: "1.5rem",
        mt: "1.5rem",
        flexGrow: 1,
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: "100%",
          alignItems: "center",
          pt: "1.5rem",
        }}
      >
        {metricChange !== 0 ? (
          <>
            <Typography
              variant="h1"
              sx={{
                fontSize: "4.5rem",
                flex: 1,
                width: "100%",
                height: "100%",
                textAlign: "right",
              }}
            >
              {metricCount}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: "1.5rem",
                flex: 1,
                width: "100%",
                height: "100%",
                textAlign: "left",
              }}
            >
              {metricChange < 0 && <ArrowDownwardIcon />}
              {metricChange > 0 && <ArrowUpwardIcon />}
              {metricChange}
            </Typography>
          </>
        ) : (
          <Typography
            variant="h1"
            sx={{
              fontSize: "4.5rem",
              flex: 1,
              width: "100%",
              height: "100%",
              textAlign: "center",
            }}
          >
            {metricCount}
          </Typography>
        )}

        <Grid container sx={{ justifyContent: "center", textAlign: "center" }}>
          <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
            {metricName}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
