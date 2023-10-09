// src/components/LoginForm.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { FormInputText } from '@/components/FormInputText';
import { useAccountContext } from '@/context/AccountContext';
import { registerSchema } from '@/schemas/registerSchema';
import { useLoginAccount } from '@/services/auth/useLoginAccount';
import { Inputs } from '@/types/Inputs';
import { AppConfig } from '@/utils/AppConfig';

import styles from './LoginForm.module.css';

// Assuming you've created a CSS module

const ERROR_MESSAGES = {
  passwordResetExpired:
    'Password reset link expired. Please login or request a new reset link.',
  incorrectCredentials: 'Incorrect username or password. Please try again.',
  unknownError: 'Something went wrong - please try again',
};

export const LoginForm = () => {
  const methods = useForm({
    resolver: useMemo(() => zodResolver(registerSchema), []),
  });

  const { handleSubmit, setError } = methods;
  const router = useRouter();
  const { query } = router;
  const login = useLoginAccount();
  const { updateAccount } = useAccountContext();
  const [showPassword, setShowPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState<null | string>(null);

  useEffect(() => {
    if (query?.passwordResetExpired) {
      setAlertMessage(ERROR_MESSAGES.passwordResetExpired);
    }
  }, [query?.passwordResetExpired]);

  const onSubmitHandler: SubmitHandler<Inputs> = (values) => {
    const { email, password } = values;

    login.mutate(
      { email, password },
      {
        onSuccess: (res) => {
          router.push('/wellbeing/dashboard');
          const { accountId, accountStatus } = res.data;
          updateAccount({ accountId, accountStatus });
          setAlertMessage(null);
        },
        onError: (error) => {
          if (
            error?.response?.data?.message === 'Incorrect username or password'
          ) {
            setError('email', { type: 'custom', message: '' });
            setError('password', {
              type: 'custom',
              message: ERROR_MESSAGES.incorrectCredentials,
            });
          } else {
            setAlertMessage(ERROR_MESSAGES.unknownError);
          }
        },
      }
    );
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <Box className={styles.container}>
      {alertMessage && (
        <Alert
          onClose={() => setAlertMessage(null)}
          icon={false}
          severity="error"
          className={styles.alert}
        >
          {alertMessage}
        </Alert>
      )}

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmitHandler)}
        className={styles.form}
      >
        <div className={styles.logoContainer}>
          <img
            src={AppConfig.logo}
            alt="logo"
            width={144}
            height={95}
            layout="responsive"
          />
        </div>

        <Typography variant="h1" className={styles.heading}>
          Log in
        </Typography>

        <FormProvider {...methods}>
          <FormInputText
            name="email"
            type="email"
            label="Email"
            required
            fullWidth
            className={styles.input}
          />
          <FormInputText
            name="password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            required
            fullWidth
            className={styles.input}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="text"
            fullWidth
            className={styles.button}
            name="navigate-reset-password"
            data-test-id="navigate-reset-password"
            onClick={() => router.push('/wellbeing/reset-password')}
          >
            Forgotten password?
          </Button>

          <Button
            variant="contained"
            name="login"
            fullWidth
            type="submit"
            className={styles.loginButton}
          >
            Log in
          </Button>

          <Button
            variant="text"
            fullWidth
            sx={{
              py: '0.8rem',
              mt: '1rem',
            }}
            name="navigate-create-account"
            data-test-id="navigate-create-account"
            onClick={() => router.push('/wellbeing/create-account')}
          >
            Don't have an account? Register now
          </Button>
        </FormProvider>
      </Box>
    </Box>
  );
};
