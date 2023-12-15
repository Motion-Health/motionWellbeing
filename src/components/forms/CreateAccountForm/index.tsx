import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { literal, object, string } from 'zod';

import { FormInputText } from '@/components/FormInputText';
import { useAccountContext } from '@/context/AccountContext';
import { useCreateAccount } from '@/services/auth/useCreateAccount';
import { AppConfig } from '@/utils/AppConfig';

type Inputs = {
  email: string;
  password: string;
  terms: boolean;
};

const registerSchema = object({
  email: string()
    .min(1, { message: 'Email is required' })
    .email('Email is invalid'),
  password: string()
    .min(1, { message: 'Password is required' })
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be less than 32 characters')
    .regex(/\d/, 'Password must contain a number')
    .regex(/^[^\s]*$/, 'Password must not contain a space'),
  terms: literal(true, {
    errorMap: () => ({ message: 'Please accept the Terms and Privacy Policy' }),
  }),
});

export const CreateAccountForm = () => {
  const methods = useForm({
    resolver: zodResolver(registerSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = methods;

  const router = useRouter();

  const { updateAccount } = useAccountContext();

  const createAccount = useCreateAccount();

  const onSubmitHandler: SubmitHandler<Inputs> = (values) => {
    const { email, password } = values;

    createAccount.mutate(
      { email, password },
      {
        onSuccess: (response: any) => {
          const { accountId, accountStatus } = response.data[0];
          updateAccount({ accountId, accountStatus });

          router.push(
            {
              pathname: '/wellbeing/additional-information',
              query: {
                accountId,
                email,
              },
            },
            '/wellbeing/additional-information'
          ); // hide query params in address bar
        },
        onError: (error: any) => {
          if (error?.response?.data?.code === 23505) {
            setError('email', {
              type: 'custom',
              message:
                'This email address is already registered. Please log in or create a new account.',
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
          sx={{
            width: '80%',
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
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
        <div
          sx={{
            padding: '3rem',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <img
            src={AppConfig.logo}
            alt="logo"
            width={328}
            height={132}
            layout="responsive"
          />
        </div>

        <Typography variant="h1" sx={{ mb: '2rem' }}>
          Create account
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
            label="Create password"
            helperText="Password must contain at least 8 characters and include 1 number"
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

          <Typography variant="helper" sx={{ mt: '1.5rem', mb: '1.5rem' }}>
            Your information is always safe and secure when using Motion.
          </Typography>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox required />}
              {...register('terms')}
              label={
                <Typography variant="helper">
                  Please confirm that you agree to our{' '}
                  <Link
                    href="https://drive.google.com/file/d/138Am_zcbcrhDX6ilYS1FZNBG9zIHW11s/view"
                    target="_blank"
                  >
                    Terms
                  </Link>
                  &nbsp;and&nbsp;
                  <Link
                    href="https://drive.google.com/file/d/1PfAysSMBXxV4gvrAIawmx_wChW0aHMuE/view"
                    target="_blank"
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              }
            />
            <FormHelperText
              error={!!errors['terms']}
              data-test-id="terms-error"
            >
              {errors['terms'] ? errors['terms'].message : ''}
            </FormHelperText>
          </FormGroup>

          <Button
            variant="contained"
            name="sign-up"
            fullWidth
            type="submit"
            sx={{
              py: '0.8rem',
              mt: '1rem',
              width: '210px',
              borderRadius: 50,
            }}
          >
            Sign up
          </Button>

          <Button
            variant="text"
            fullWidth
            sx={{
              py: '0.8rem',
              mt: '1rem',
            }}
            name="navigate-login"
            data-test-id="navigate-login"
            onClick={() => router.push('/wellbeing/login')}
          >
            Already have an account? Log in
          </Button>
        </FormProvider>
      </Box>
    </Box>
  );
};
