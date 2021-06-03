import React from 'react';
import { css } from '@emotion/core';
import PacmanLoader from 'react-spinners/PacmanLoader';
import './LoadingPage.css';

const override = css`
  display: flex;
  margin: 100;
  border-color: red;
`;

function LoadingPage() {
  return (
    <div className='load-container'>
      <h3 style={{ margin: '3rem', color: 'teal' }}>Gathering show data...</h3>
      <PacmanLoader
        css={override}
        size={80}
        margin={20}
        color={'teal'}
        loading={true}
      />
    </div>
  );
}

export default LoadingPage;
