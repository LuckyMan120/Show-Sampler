export const returnErrors = (msg, status, id = null) => {
  return {
    type: 'GET_ERRORS',
    payload: { msg, status, id },
  };
};

export const clearErrors = () => {
  return {
    type: 'CLEAR_ERRORS',
  };
};

export const generateError = ({ msg, status = null }) => (dispatch) => {
  dispatch(returnErrors(msg, status));
  setTimeout(() => dispatch(clearErrors()), 5000);
};
