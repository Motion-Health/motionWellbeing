import { FormControl, FormHelperText, InputLabel, Select } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export const FormSelect = ({
  name,
  label,
  children,
  defaultValue,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const isErrorState = !!errors[name];

  return (
    <FormControl {...props}>
      <InputLabel
        shrink={true}
        error={isErrorState}
        sx={{
          margin: '0 0 0 -12px',
          top: '0',
        }}
      >
        {label}
      </InputLabel>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Select
            {...props}
            {...field}
            defaultValue={defaultValue}
            error={isErrorState}
            helperText={errors[name] ? errors[name].message : ''}
            name={name}
            data-test-id={name}
            sx={{
              marginTop: '15px',
            }}
          >
            {children}
          </Select>
        )}
      />
      <FormHelperText error={isErrorState}>
        {errors[name] ? errors[name].message : ''}
      </FormHelperText>
    </FormControl>
  );
};
