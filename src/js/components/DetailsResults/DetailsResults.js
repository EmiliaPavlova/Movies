import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const DetailsResults = ({ genre = 'Drama' }) => {

  return (
    <Fragment>
      <div>Films by {genre} genre</div>
    </Fragment>
  )
}

DetailsResults.propTypes = {
  genre: PropTypes.string
};

export default DetailsResults;