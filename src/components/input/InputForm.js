import React from 'react';
import FormikContainer from './FormikContainer';
import './InputForm.css';

function NewInputForm({ callback, savedValues }) {
  return <FormikContainer callback={callback} savedValues={savedValues} />;
}

export default NewInputForm;
