import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, Fade } from 'react-bootstrap';
import './ErrorContainer.css';

function ErrorContainer() {
  const { msg, status } = useSelector((state) => state.errorReducer);
  const errorAlert = (
    <Fade in={true}>
      <Alert variant='danger'>{msg}</Alert>
    </Fade>
  );
  return <div className='error-container'>{status ? errorAlert : ''}</div>;
}

export default ErrorContainer;
