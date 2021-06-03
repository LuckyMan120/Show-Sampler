import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function CheckboxGroup(props) {
  const { label, name, options, open, ...rest } = props;
  return (
    <>
      <div
        style={{ display: open ? 'flex' : 'none' }}
        className='checkbox-group'
      >
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <div style={checkboxStyle} key={option.key}>
                  <input
                    type='checkbox'
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
}
const checkboxStyle = {
  marginRight: '1rem',
  display: 'flex',
  flexDirection: 'row',
};

export default CheckboxGroup;
