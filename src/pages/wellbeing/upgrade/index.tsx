import PageHeader from "@/components/PageHeader/index";
import UpgradeCard from "@/components/Card/upgradeCards";
import { Main } from "@/templates/Main";
import { Alert } from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head"

const Upgrade = () => {
  const router = useRouter();

  const { canceled } = router.query;

  return (
    <Main>
      <Head>
        <title>Upgrade | Motion Wellbeing</title>
      </Head>
      <PageHeader title="Upgrade" />
      {canceled == "true" && (
        <Alert
          onClose={() => setAlertIsVisible(false)}
          icon={false}
          severity="error"
          sx={{ position: "relative", my: "1rem", padding: "1.5rem" }}
        >
          You've cancelled your upgrade, your billing amount will stay the same.
        </Alert>
      )}
      <UpgradeCard />
    </Main>
  );
};

export default Upgrade;
