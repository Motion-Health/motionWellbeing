import { useState, useEffect } from "react";
import { Alert, Box, Button, Grid, MenuItem, Typography } from "@mui/material";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { AppConfig } from "@/utils/AppConfig";
import { FormInputText } from "@/components/FormInputText";
import { FormSelect } from "@/components/FormSelect";
import { useRouter } from "next/router";
import { useUpdateAccount } from "@/services/auth/useUpdateAccount";

type Inputs = {
  serviceProviderName: string;
  mainContactName: string;
  phoneNumber: string;
  city: string;
  isPartOfAGroup: string;
  howDidYouHearAboutUs: string;
  groupName: string;
};

const registerSchema = object({
  serviceProviderName: string({
    required_error: "Name of service provider is required",
  }),
  mainContactName: string({ required_error: "Your name is required" }),
  phoneNumber: string({ required_error: "Phone number is required" }).regex(
    /^[0-9\s]{7,15}$/,
    "Please enter a valid phone number (between 7 and 15 numbers with no special characters)",
  ),
  city: string().optional(),
  isPartOfAGroup: string().optional(),
  howDidYouHearAboutUs: string().optional(),
  groupName: string().optional(),
});

export const AdditionalInformationForm = () => {
  const methods = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit, watch } = methods;

  const [displayGroupNameField, setDisplayGroupNameField] = useState(false);
  const [groupDropdownWidth, setGroupDropdownWidth] = useState(12);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (value.isPartOfAGroup === "Yes") {
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
      { ...values },
      {
        onSuccess: () => {
          router.push(
            {
              pathname: "/wellbeing/dashboard",
              query: { isFirstLogin: true },
            },
            "/",
          ); // hide query params in address bar
        },
        onError: () => {
          setAlertMessage("Something went wrong - please try again");
        },
      },
    );
  };

  const [alertMessage, setAlertMessage] = useState<null | string>(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {alertMessage && (
        <Alert
          onClose={() => setAlertMessage(null)}
          icon={false}
          severity="error"
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      )}

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmitHandler)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ padding: "3rem" }}>
          <img src={AppConfig.logo} alt="logo" />
        </div>

        <Typography variant="h1" sx={{ mb: "2rem", textAlign: "center" }}>
          Additional information
        </Typography>

        <FormProvider {...methods}>
          <Box
            sx={{
              width: "60%",
              maxWidth: "54.25rem",
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
                  <MenuItem value="Sheffield City Trust">
                    Sheffield City Trust
                  </MenuItem>
                </FormSelect>
              </Grid>

              <Grid item xs={12} sm={12} md={groupDropdownWidth}>
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

          <Button
            variant="contained"
            name="complete"
            fullWidth
            type="submit"
            sx={{
              py: "0.8rem",
              mt: "1rem",
              width: "210px",
              borderRadius: 50,
            }}
          >
            Complete
          </Button>
        </FormProvider>
      </Box>
    </Box>
  );
};
