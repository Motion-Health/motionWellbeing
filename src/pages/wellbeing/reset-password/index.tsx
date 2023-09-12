import { ResetPasswordForm } from "@/components/forms/ResetPasswordForm"
import Head from "next/head"

const Login = () => {
  return (
    <>
      <Head>
        <title>Reset password | Motion Wellbeing</title>
      </Head>
      <ResetPasswordForm />
    </>
  );
};

export default Login;