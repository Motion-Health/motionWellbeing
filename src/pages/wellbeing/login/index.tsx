import { LoginForm } from "@/components/forms/LoginForm"
import { useIsLoggedIn } from "@/services/isLoggedIn"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Login = () => {
  const { data: isLoggedIn } = useIsLoggedIn()

  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/wellbeing/dashboard")
    }
  }, [isLoggedIn])
  
  return (
    <>
      <Head>
        <title>Login | Motion Wellbeing</title>
      </Head>
      <LoginForm />
    </>
  );
};

export default Login;