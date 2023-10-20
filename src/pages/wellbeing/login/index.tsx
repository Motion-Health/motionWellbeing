import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Alert, IconButton } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { LoginForm } from '@/components/forms/LoginForm';
import { useIsLoggedIn } from '@/services/isLoggedIn';

const Login = () => {
  const { data: isLoggedIn } = useIsLoggedIn();
  const router = useRouter();
  const [notification, setNotification] = useState(router.query.notification);

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/wellbeing/dashboard');
    }
  }, [isLoggedIn]);

  const handleLogin = async (credentials) => {
    // Assume login function makes a request to your login endpoint
    const success = await login(credentials);
    if (success) {
      router.push('/wellbeing/dashboard');
    }
  };

  return (
    <>
      <Head>
        <title>Login | Motion Wellbeing</title>
        <meta
          name="description"
          content="Log in to access your account and explore our services."
        />
      </Head>
      {notification == 'resetPasswordSuccess' && (
        <Alert
          sx={{ width: '100%' }}
          onClose={() => setNotification(null)}
          severity="success"
        >
          Your password has been reset successfully. Please login with your new
          password.
        </Alert>
      )}
      <IconButton
        color="primary"
        onClick={() => router.push('/')}
        sx={{ padding: 3 }}
      >
        <ArrowBackIcon />
      </IconButton>

      <LoginForm onLogin={handleLogin} />
    </>
  );
};

export default Login;
