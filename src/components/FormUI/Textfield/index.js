import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';

const TextfieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextfield = {
    ...otherProps,
    ...field,
    fullWidth: true,
    variant: 'outlined',
  };

  if (meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return <TextField {...configTextfield} />;
};

export default TextfieldWrapper;
