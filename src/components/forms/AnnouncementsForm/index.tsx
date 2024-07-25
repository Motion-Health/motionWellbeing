import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Alert,
  Checkbox,
  FormGroup,
  MenuItem,
  FormControlLabel,
} from "@mui/material";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { object, string, boolean } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInputText } from "@/components/FormInputText";
import { useRouter } from "next/router";
import { useCreateAnnouncement } from "@/services/announcements/useCreateAnnouncement";
import { FormSelect } from "@/components/FormSelect";
import { useGetAnnouncement } from "@/services/announcements/useGetAnnouncement";

type Inputs = {
  content: string;
  mode: string;
  isActive: boolean;
  linkUrl?: string;
  linkText?: string;
};

const registerSchema = object({
  content: string({ required_error: "Banner content is required" }),
  linkUrl: string().optional(),
  linkText: string().optional(),
  mode: string({ required_error: "Banner type is required" }),
  isActive: boolean().optional(),
});

export const AnnouncementsForm = () => {
  const { data: announcementData } = useGetAnnouncement();

  useEffect(() => {
    if (announcementData?.content) {
      methods.reset(announcementData);
    }
  }, [announcementData]);

  const methods = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit, register } = methods;

  const router = useRouter();
  const createAnnouncement = useCreateAnnouncement();

  const onSubmitHandler: SubmitHandler<Inputs> = (announcementData) => {
    createAnnouncement.mutate(
      { ...announcementData },
      {
        onSuccess: (res) => {
          router.push("/wellbeing/dashboard");
        },
      }
    );
  };

  const [alertMessage, setAlertMessage] = useState<null | string>(null);

  return (
    <div className="announcements">
      <div>
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
        >
          <FormProvider {...methods}>
            <FormInputText
              name="content"
              type="text"
              label="Banner Content"
              required
              multiline
              rows={4}
              fullWidth
              sx={{ mb: 3 }}
            ></FormInputText>
            <FormInputText
              name="linkUrl"
              type="text"
              label="Link (optional)"
              helperText="e.g. http://www.motionexercise.co.uk/activities/1/"
              fullWidth
              sx={{ mb: 3 }}
            ></FormInputText>
            <FormInputText
              name="linkText"
              type="text"
              label="Link text (optional)"
              helperText="e.g. 'Try it now'"
              fullWidth
              sx={{ mb: 3 }}
            ></FormInputText>
            <FormSelect
              name="mode"
              label="Banner Type"
              type="text"
              fullWidth
              sx={{ mb: 3 }}
            >
              <MenuItem value="info">Information</MenuItem>
              <MenuItem value="success">Success</MenuItem>
              <MenuItem value="warning">Warning</MenuItem>
              <MenuItem value="error">Error</MenuItem>
            </FormSelect>

            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox defaultChecked={announcementData?.isActive} />
                }
                {...register("isActive")}
                label="Is Active"
              />
            </FormGroup>
            <Button
              className="announcementBtn"
              variant="contained"
              name="save"
              type="submit"
            >
              Save Announcement
            </Button>
          </FormProvider>
        </Box>
      </div>
    </div>
  );
};
