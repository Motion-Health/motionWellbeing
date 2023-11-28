import { zodResolver } from '@hookform/resolvers/zod';
import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'zod';

import { FormInputText } from '@/components/FormInputText';
import { FormSelect } from '@/components/FormSelect';
import { useAccountContext } from '@/context/AccountContext';
import { useLogoutAccount } from '@/services/auth/useLogoutAccount';
import { useUpdateAccount } from '@/services/auth/useUpdateAccount';
import { AppConfig } from '@/utils/AppConfig';
type Inputs = {
  UserRole: string;
  serviceProviderName: string;
  mainContactName: string;
  phoneNumber: string;
  city: string;
  isPartOfAGroup: string;
  howDidYouHearAboutUs: string;
  groupName: string;
};

const registerSchema = object({
  serviceProviderName: string().min(1, 'Name of service provider is required'),
  mainContactName: string().min(1, 'Your name is required'),
  phoneNumber: string()
    .min(1, 'Phone number is required')
    .regex(
      /^[0-9\s]{7,15}$/,
      'Please enter a valid phone number (between 7 and 15 numbers with no special characters)'
    ),
  city: string().optional(),
  isPartOfAGroup: string().optional(),
  howDidYouHearAboutUs: string().optional(),
  groupName: string().optional(),
  UserRole: string().min(1, 'Please select a role'),
});

export const AdditionalInformationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm({
    resolver: zodResolver(registerSchema),
  });
  const logout = useLogoutAccount();
  const { account } = useAccountContext();
  const logoutAccount = () => {
    logout.mutate({ accountId: account.accountId! });

    router.push('/wellbeing/login');
  };
  const { handleSubmit, watch } = methods;

  const [displayGroupNameField, setDisplayGroupNameField] = useState(false);
  const [groupDropdownWidth, setGroupDropdownWidth] = useState(12);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (value.isPartOfAGroup === 'Yes') {
        setDisplayGroupNameField(true);
        setGroupDropdownWidth(6);
      } else {
        setDisplayGroupNameField(false);
        setGroupDropdownWidth(12);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const router = useRouter();

  const additionalInformation = useUpdateAccount();

  const onSubmitHandler: SubmitHandler<Inputs> = async (values) => {
    additionalInformation.mutate(
      {
        ...values,
      },
      {
        onSuccess: () => {
          router.push(
            {
              pathname: '/wellbeing/dashboard/',
              query: { isFirstLogin: true },
            },
            '/wellbeing/dashboard/'
          ); // hide query params in address bar
          setIsLoading(true);
        },
        onError: () => {
          setAlertMessage('Something went wrong - please try again');
          setIsLoading(false);
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
          width: '100%',
        }}
      >
        <div style={{ padding: '3rem' }}>
          <img src={AppConfig.logo} alt="logo" />
        </div>

        <Typography variant="h1" sx={{ mb: '2rem', textAlign: 'center' }}>
          Additional information
        </Typography>

        <FormProvider {...methods}>
          <Box
            sx={{
              width: '60%',
              maxWidth: '54.25rem',
            }}
          >
            <Grid container spacing={{ sm: 0, md: 2 }}>
              <Grid item xs={12} sm={12} md={12}>
                <FormInputText
                  name="serviceProviderName"
                  label="Name of service provider"
                  type="text"
                  required
                  fullWidth
                  sx={{ mb: 3 }}
                ></FormInputText>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <FormInputText
                  name="mainContactName"
                  label="Your name"
                  type="text"
                  required
                  fullWidth
                  sx={{ mb: 3 }}
                ></FormInputText>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <FormInputText
                  name="phoneNumber"
                  label="Telephone number"
                  type="text"
                  required
                  fullWidth
                  sx={{ mb: 3 }}
                ></FormInputText>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <FormInputText
                  name="city"
                  label="City"
                  type="text"
                  fullWidth
                  sx={{ mb: 3 }}
                ></FormInputText>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <FormSelect
                  name="howDidYouHearAboutUs"
                  label="How did you hear about us?"
                  type="text"
                  fullWidth
                  sx={{ mb: 3 }}
                >
                  <MenuItem value="Word of mouth">Word of mouth</MenuItem>
                  <MenuItem value="Facebook">Facebook</MenuItem>
                  <MenuItem value="Email">Email</MenuItem>
                  <MenuItem value="LinkedIn">LinkedIn</MenuItem>
                  <MenuItem value="Social-Ability">Social-Ability</MenuItem>
                  <MenuItem value="Inspired-Inspirations">
                    Inspired Inspirations
                  </MenuItem>
                  <MenuItem value="Sheffield City Trust">
                    Sheffield City Trust
                  </MenuItem>
                </FormSelect>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <FormSelect
                  name="isPartOfAGroup"
                  label="Is your service provider part of a group?"
                  // defaultValue="No"
                  type="text"
                  fullWidth
                  sx={{ mb: 3 }}
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                  <MenuItem value="Not sure">Not sure</MenuItem>
                </FormSelect>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <FormSelect
                  name="UserRole"
                  label="Which option best describes your role?"
                  defaultValue={undefined}
                  type="text"
                  required
                  fullWidth
                  sx={{ mb: 3 }}
                >
                  <MenuItem value="Activity/Wellbeing Coordinator">
                    Activity/Wellbeing Coordinator
                  </MenuItem>
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="Owner/Director">Owner/Director</MenuItem>
                  <MenuItem value="Partner">Partner</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </FormSelect>
              </Grid>

              {displayGroupNameField && (
                <Grid item xs={12} sm={12} md={6}>
                  <FormInputText
                    name="groupName"
                    label="Name of group"
                    type="text"
                    fullWidth
                    sx={{ mb: 3 }}
                  ></FormInputText>
                </Grid>
              )}
            </Grid>
          </Box>
          <Grid item xs={12} sm={12} md={12} width="60%" maxWidth="54.25rem">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between', // This will ensure there's space between your buttons
                mt: 2, // Adding some margin-top for spacing
              }}
            >
              <Button
                variant="outlined"
                name="cancel"
                onClick={logoutAccount}
                sx={{
                  py: '0.8rem',
                  borderRadius: 50,
                  width: '100px', // Specified a width to ensure consistent button size
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                name="complete"
                type="submit"
                sx={{
                  py: '0.8rem',
                  borderRadius: 50,
                  width: '210px', // Maintained your width for the Complete button
                }}
              >
                Complete
              </Button>
            </Box>
          </Grid>
        </FormProvider>
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
        <Typography variant="h6" sx={{ ml: 2 }}>
          Creating Account...
        </Typography>
      </Backdrop>
    </Box>
  );
};
