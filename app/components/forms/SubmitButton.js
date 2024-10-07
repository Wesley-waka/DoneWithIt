import React from 'react';
import AppButton from '../AppButton';
import { useFormikContext } from 'formik';

function SubmitButton({ title, navigation }) {
  const { handleSubmit } = useFormikContext();
  return (
    // <AppButton title={title} onPress={handleSubmit} />
    <AppButton title="Login" onPress={() => navigation.navigate('ItemListing')} />
  );
}

export default SubmitButton;