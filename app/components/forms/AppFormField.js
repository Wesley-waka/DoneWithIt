import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import { useFormik, useFormikContext } from 'formik';


function AppFormField({ name, width, ...otherprops }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext()
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherprops}
      />
      <ErrorMessage error={errors[name]} visble={touched[name]} />

    </>
  );
};

export default AppFormField;