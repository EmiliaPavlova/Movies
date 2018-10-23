import React from 'react';
import PropTypes from 'prop-types';

const DetailsResults = ({ genre = 'Drama' }) => {

  return (
    <div className='infoLine'>
      <div>Films by {genre} genre</div>
    </div>
  )
}

DetailsResults.propTypes = {
  genre: PropTypes.string
};

export default DetailsResults;