import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { incrementEvent, decrementEvent } from '../../actions/playerActions';
import PropTypes from 'prop-types';
import './player.css';

const EventNav = ({ eventData }) => {
  const dispatch = useDispatch();

  const incrementIndex = useCallback(
    () => dispatch({ type: 'INCREMENT_EVENT' }),
    [dispatch]
  );

  const decrementIndex = useCallback(
    () => dispatch({ type: 'DECREMENT_EVENT' }),
    [dispatch]
  );

  return (
    <div className='event-nav'>
      <button className='nav-btn' onClick={decrementIndex}>
        Back
      </button>
      <h2>{eventData ? eventData.event_name : ''}</h2>
      <button className='nav-btn' onClick={incrementIndex}>
        Forward
      </button>
    </div>
  );
};

EventNav.propTypes = {};

export default EventNav;
