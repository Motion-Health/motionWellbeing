import { NewPasswordForm } from "@/components/forms/NewPasswordForm";
import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <title>New password | Motion Wellbeing</title>
      </Head>
      <NewPasswordForm />
    </>
  );
};

export default Login;
