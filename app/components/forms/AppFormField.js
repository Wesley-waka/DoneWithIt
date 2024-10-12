import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import { useFormik, useFormikContext } from 'formik';


function AppFormField({ name, width, ...otherprops }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext()
  return (
    <>
      <AppTextInput
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherprops}
      />
      <ErrorMessage error={errors[name]} visble={touched[name]} />

    </>
  );
};

export default AppFormField;