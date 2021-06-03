import React, { useState } from 'react';
import DateView from 'react-datepicker';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker(props) {
  const { label, name, ...rest } = props;

  return (
    <div className='formGroup'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          const [startDate, endDate] = value;

          return (
            <div className='customDatePickerWidth'>
              <DateView
                className='date-picker'
                calendarClassName='rasta-stripes'
                id={name}
                {...field}
                {...rest}
                onChange={(val) => setFieldValue(name, val)}
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                minDate={new Date()}
                showDisabledMonthNavigation
              />
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DatePicker;
