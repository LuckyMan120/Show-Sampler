// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import textError from './TextError';
// import * as Yup from 'yup';

// import './InputForm.css';

// //TODO:
// //   use local storage to save form data session,
// //   populate form with past data if available

// const initialValues = {
//   city: '',
//   date: {
//     start: '',
//     end: '',
//   },
//   genre: '',
// };

// const onSubmit = (values) => {
//   console.log('Form Data: ', values);
// };

// const validationSchema = Yup.object({
//   city: Yup.string().required('City name is required'),
//   date: Yup.string().required('Date is required'),
//   genre: Yup.string().required('Genre is required'),
// });

// const InputForm = ({ callback }) => {
//   // console.log('Form Touched: ', formik.touched);

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//     >
//       <Form>
//         <div className='formGroup'>
//           <label htmlFor='city'>City</label>
//           <Field type='text' id='city' name='city' />
//           <ErrorMessage name='city' component={textError} />
//         </div>

//         <div className='formGroup'>
//           <label htmlFor='date'>Date</label>
//           <Field type='text' id='date' name='date' />
//           <ErrorMessage name='date'>
//             {(errorMsg) => <div className='error'>{errorMsg}</div>}
//           </ErrorMessage>
//         </div>

//         <div className='formGroup'>
//           <label htmlFor='genre '>Genre</label>
//           <Field name='genre'>
//             {(props) => {
//               const { field, form, meta } = props;
//               console.log('render props: ', props);
//               return (
//                 <div>
//                   <input id='genre' {...field} />
//                   {meta.touched && meta.error ? <div>{meta.error}</div> : null}
//                 </div>
//               );
//             }}
//           </Field>
//         </div>

//         <button onClick={callback} type='submit'>
//           Generate Playlist!
//         </button>
//       </Form>
//     </Formik>
//   );
// };

// export default InputForm;
