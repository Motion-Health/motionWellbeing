import PageHeader from "@/components/PageHeader/index";
import { Main } from "@/templates/Main";
import { Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

const Prompt = () => {
  const router = useRouter();

  return (
    <Main>
      <PageHeader />
      <div className="upgradeprompt-wrapper">
        <div className="upgradeprompt">
          <Typography variant="h3">
            This feature isn't available in your current plan.
          </Typography>
          <Typography variant="body">
            Upgrade to access this feature.
          </Typography>
          <Button
            onClick={() => {
              router.push("/wellbeing/upgrade");
            }}
            variant="contained"
          >
            Upgrade Now
          </Button>
        </div>
      </div>
    </Main>
  );
};

export default Prompt;
