import {
  Box,
  Button,
  InputAdornment,
  IconButton,
  Alert,
  Typography,
} from '@mui/material';

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { object, string } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { AppConfig } from '@/utils/AppConfig';
import { FormInputText } from '@/components/FormInputText';
import { useRouter } from 'next/router'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useSetNewPassword } from '@/services/auth/useSetNewPassword'
import { useGetPasswordResetRecord } from '@/services/auth/useGetPasswordResetRecord'

type Inputs = {
  password: string,
};

const registerSchema = object({
  password: string({required_error: "Password is required"})
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be less than 32 characters')
    .regex(/\d/, 'Password must contain a number')
    .regex(/^[^\s]*$/, 'Password must not contain a space'),
})

export const NewPasswordForm = () => {
  const methods = useForm({
    resolver: zodResolver(registerSchema),
  })

  const {
    handleSubmit,
    formState: { errors },
    setError,
  } = methods;

  const router = useRouter()
  const { isReady: routerIsReady } = useRouter()

  const getPasswordResetRecord = useGetPasswordResetRecord()

  const [resetPasswordId, setResetPasswordId] = useState<string | null>(null)
  useEffect(() => {
    if (routerIsReady) {
      if (router.query?.resetPasswordId) {
        setResetPasswordId(router.query.resetPasswordId)
      } else {
        router.push({
          pathname: '/wellbeing/login',
          query: { passwordResetExpired: true }
        }, '/wellbeing/login') // hide query params in address bar
      }
    }
  }, [routerIsReady])

  useEffect(() => {
    if (resetPasswordId){
      getPasswordResetRecord.mutate(
        { resetPasswordId }, 
        {
          onError: (error: any) => {
            if (error?.response?.statusCode === 404) {      
              router.push({
                pathname: '/wellbeing/login',
                query: { passwordResetExpired: true }
              }, '/wellbeing/login') // hide query params in address bar
            } else {
              setAlertMessage("Something went wrong - please try again")
            }
          }
        }
      )
    }
  }, [resetPasswordId])

  const setNewPassword = useSetNewPassword()

  const onSubmitHandler: SubmitHandler<Inputs> = async (values) => {
    const { password } = values

    if (resetPasswordId) {
      setNewPassword.mutate(
        { resetPasswordId, password },
        {
          onSuccess: () => {
            router.push("/wellbeing/login")
          }, 
          onError: () => {
            setAlertMessage("Something went wrong - please try again")
          }
        }
      )
    }
  }

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [alertMessage, setAlertMessage] = useState<null | string>(null)

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>

      {alertMessage && (
        <Alert onClose={() => setAlertMessage(null)} icon={false} severity="error" sx={{ width: '100%' }}>
            {alertMessage}
        </Alert>
      )}

      <Box
        component='form'
        noValidate
        onSubmit={handleSubmit(onSubmitHandler)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '27rem'
        }}
      >

        <div style={{padding: '3rem'}}>
          <img src={AppConfig.logo} alt="logo" />
        </div>

        <Typography variant='h1' sx={{mb: '2rem'}}>New password</Typography>

        <FormProvider {...methods}>
            <FormInputText
              name='password'
              type={showPassword ? 'text' : 'password'}
              label='Password'
              required
              fullWidth
              sx={{ mb: 3 }}
              InputProps={{
                endAdornment: 
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                  {showPassword ? <VisibilityOff /> : <Visibility /> }
                  </IconButton>
                </InputAdornment>
              }}
            >
            </FormInputText>

            <Button
              variant='contained'
              name='login'
              fullWidth
              type='submit'
              sx={{ 
                py: '0.8rem', 
                mt: '1rem', 
                width: '210px', 
                borderRadius: 50
              }}
            >
              Reset password
            </Button>
        </FormProvider>      
      </Box>
    </Box>
  )
}