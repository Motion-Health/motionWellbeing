import { CreateAccountForm } from "@/components/forms/CreateAccountForm"
import Head from "next/head"

const CreateAccount = () => {
  return (
    <>
      <Head>
        <title>Create account | Motion Wellbeing</title>
      </Head>
      <CreateAccountForm />
    </>
  );
};

export default CreateAccount;