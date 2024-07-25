import { TextField, TextFieldProps } from "@mui/material";

import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

type IFormInputProps = {
  name: string;
} & TextFieldProps;

export const FormInputText: FC<IFormInputProps> = ({ name, ...otherProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...otherProps}
          {...field}
          error={!!errors[name]}
          helperText={
            errors[name] ? errors?.[name]?.message : otherProps?.helperText
          }
          InputLabelProps={{
            shrink: true,
          }}
          data-test-id={name}
          variant="standard"
        />
      )}
    />
  );
};
