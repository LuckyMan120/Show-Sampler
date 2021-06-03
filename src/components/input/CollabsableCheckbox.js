import React, { useState } from 'react';
import FormikControl from './FormikControl';

function CollapsableCheckbox({ options, label }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={collabsableContainer}>
      <a
        onClick={() => setOpen(!open)}
        aria-controls='collapsable-checkbox'
        aria-expanded={open}
      >
        <label>{label}</label>
      </a>
      <FormikControl
        control='checkbox'
        label={label}
        name='checkboxOption'
        options={options}
        open={open}
      />
    </div>
  );
}

const collabsableContainer = {
  marginBottom: '2rem',
  width: '15rem',
};

export default CollapsableCheckbox;
