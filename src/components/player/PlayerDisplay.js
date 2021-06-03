import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Image } from 'react-bootstrap';

import './player.css';
import PropTypes from 'prop-types';

function PlayerDisplay({ eventData }) {
  // const data = useSelector((state) => state.current_event_data);

  const image = eventData.image ? eventData.image : '';
  // const image = eventData.images ? eventData.images[8] : 'nada';

  return (
    <div className='player-display'>
      {/* <Container> */}
      <Row>
        <Col xs={6} md={4}>
          {eventData.image ? (
            <Image style={imageStyle} src={image} fluid='true' />
          ) : (
            ''
          )}
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
}

const imageStyle = {
  width: '20rem',
};

PlayerDisplay.propTypes = {};

export default PlayerDisplay;
