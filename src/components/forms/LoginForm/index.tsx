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
import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'zod';

import { FormInputText } from '@/components/FormInputText';
import { useAccountContext } from '@/context/AccountContext';
import { useLoginAccount } from '@/services/auth/useLoginAccount';
import { AppConfig } from '@/utils/AppConfig';

type Inputs = {
  email: string;
  password: string;
};

const registerSchema = object({
  email: string({ required_error: 'Email is required' }).email(
    'Email is invalid'
  ),
  password: string({ required_error: 'Password is required' })
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be less than 32 characters')
    .regex(/\d/, 'Password must contain a number')
    .regex(/^[^\s]*$/, 'Password must not contain a space'),
});

export const LoginForm = () => {
  const methods = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit, setError } = methods;

  const router = useRouter();
  const login = useLoginAccount();

  const { updateAccount } = useAccountContext();

  useEffect(() => {
    if (router.query?.passwordResetExpired) {
      setAlertMessage(
        'Password reset link expired. Please login or request a new reset link.'
      );
    } else {
      setAlertMessage(null);
    }
  }, [router.query?.passwordResetExpired]);

  const onSubmitHandler: SubmitHandler<Inputs> = (values) => {
    const { email, password } = values;

    login.mutate(
      { email, password },
      {
        onSuccess: (res) => {
          // TODO: get "additional-information" to make sure account setup completed
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
              message: 'Incorrect username or password. Please try again.',
            });
          } else {
            setAlertMessage('Something went wrong - please try again');
          }
        },
      }
    );
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [alertMessage, setAlertMessage] = useState<null | string>(null);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {alertMessage && (
        <Alert
          onClose={() => setAlertMessage(null)}
          icon={false}
          severity="error"
          sx={{ width: '100%' }}
        >
          {alertMessage}
        </Alert>
      )}

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmitHandler)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '27rem',
        }}
      >
        <div style={{ padding: '3rem' }}>
          <img src={AppConfig.logo} alt="logo" />
        </div>

        <Typography variant="h1" sx={{ mb: '2rem' }}>
          Log in
        </Typography>

        <FormProvider {...methods}>
          <FormInputText
            name="email"
            type="email"
            label="Email"
            required
            fullWidth
            sx={{ mb: 3 }}
          ></FormInputText>

          <FormInputText
            name="password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            required
            fullWidth
            sx={{ mb: 3 }}
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
          ></FormInputText>

          <Button
            variant="text"
            fullWidth
            sx={{
              py: '0.8rem',
              mt: '1rem',
            }}
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
            sx={{
              py: '0.8rem',
              mt: '1rem',
              width: '210px',
              borderRadius: 50,
            }}
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
