import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className='formGroup'>
      <label htmlFor={name}>{label}</label>
      <Field type='text' id={name} name={name} {...rest} />
      <ErrorMessage name='city' component={TextError} />
    </div>
  );
}

export default Input;
