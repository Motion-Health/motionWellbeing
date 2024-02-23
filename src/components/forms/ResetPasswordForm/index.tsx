import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'zod';

import { FormInputText } from '@/components/FormInputText';
import { useRequestNewPassword } from '@/services/auth/useRequestNewPassword';
import { AppConfig } from '@/utils/AppConfig';

type Inputs = {
  email: string;
  password: string;
  terms: boolean;
};

const registerSchema = object({
  email: string().min(1, 'Email is required').email('Email is invalid'),
});

export const ResetPasswordForm = () => {
  const methods = useForm({
    resolver: zodResolver(registerSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    setError,
  } = methods;

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');

  const requestNewPassword = useRequestNewPassword();

  const onSubmitHandler: SubmitHandler<Inputs> = async (values) => {
    const { email } = values;
    setEmailAddress(email);

    requestNewPassword.mutate(
      { email },
      {
        onSuccess: () => {
          setShowConfirmation(true);
        },
        onError: () => {
          setAlertMessage('Something went wrong - please try again');
        },
      }
    );
  };

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
          maxWidth: '-webkit-fill-available',
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
          Reset password
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

          <Button
            variant="contained"
            name="reset-password"
            data-test-id="reset-password"
            fullWidth
            type="submit"
            sx={{
              py: '0.8rem',
              mt: '1rem',
              width: '210px',
              borderRadius: 50,
            }}
          >
            Reset password
          </Button>

          {showConfirmation && (
            <p style={{ textAlign: 'center' }}>
              If that email is linked to an account, we will send a password
              reset email to {emailAddress}.
            </p>
          )}
        </FormProvider>
      </Box>
    </Box>
  );
};
