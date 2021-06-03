import React from 'react';
import DatePicker from './DatePicker';
import Input from './Input';
import CheckboxGroup from './CheckboxGroup';
import RadioButtons from './RadioButtons';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;

    case 'textarea':

    case 'select':

    case 'radio':
      return <RadioButtons {...rest} />;

    case 'checkbox':
      return <CheckboxGroup {...rest} />;

    case 'date':
      return <DatePicker {...rest} />;

    default:
      return null;
  }
}

export default FormikControl;
