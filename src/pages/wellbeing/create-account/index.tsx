import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import Head from "next/head";
import router from "next/router";

import { CreateAccountForm } from "@/components/forms/CreateAccountForm";

const CreateAccount = () => {
  return (
    <>
      <Head>
        <title>Create account | Motion Wellbeing</title>
      </Head>
      <IconButton
        color="primary"
        onClick={() => router.push("https://motion.org.uk")}
        sx={{ padding: 3 }}
      >
        <ArrowBackIcon />
      </IconButton>
      <CreateAccountForm />
    </>
  );
};

export default CreateAccount;
