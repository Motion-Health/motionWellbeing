import { ResetPasswordForm } from "@/components/forms/ResetPasswordForm"
import Head from "next/head"

const ResetPassword = () => {
  return (
    <>
      <Head>
        <title>Reset password | Motion Wellbeing</title>
      </Head>
      <ResetPasswordForm />
    </>
  );
};

export default ResetPassword;