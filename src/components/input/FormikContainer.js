import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import CollapsableCheckbox from './CollabsableCheckbox';

function FormikContainer({ callback, savedValues }) {
  const checkboxOptions = [
    // { key: 'select an option', value: '' },
    { key: 'All Genres', value: 'coption 1' },
    { key: 'Electronic / Dance', value: 'coption 2' },
    { key: 'Country', value: 'coption 3' },
    { key: 'Rock', value: 'coption 4' },
    { key: 'Metal', value: 'coption 5' },
    { key: 'Indie', value: 'coption 6' },
  ];

  const addSevenDays = (date) => {
    var result = new Date(date);
    result.setDate(result.getDate() + 7);
    return result;
  };

  const initialValues = {
    city: '',
    date: [new Date(), addSevenDays(new Date())],
    checkboxOption: ['coption 1'],
  };
  const validationSchema = Yup.object({
    city: Yup.string().required('Required'),
    date: Yup.array().of(Yup.date()),
    checkboxOption: Yup.array().required(
      'Required. Please select at least one genre.'
    ),
  });

  return (
    <Formik
      initialValues={savedValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={callback}
      enableReinitialize
    >
      {(formik) => (
        <Form>
          <FormikControl control='input' type='text' label='City' name='city' />
          {/* <FormikControl control='date' label='Pick a Date' name='date' />
          <CollapsableCheckbox label={'Genre'} options={checkboxOptions} /> */}
          <button
            className='form-button'
            type='submit'
            // disabled={formik.isSubmitting}
          >
            Generate Playlist
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
