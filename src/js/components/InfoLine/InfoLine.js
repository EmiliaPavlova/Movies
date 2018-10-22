import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './InfoLine.css';

const InfoLine = ({
  count = 5,
  sortBy = 'release_date'
}) => {
  const hasResult = count > 0;
  const result = count > 0
    ? hasResult
      ? `${count} movie found`
      : `${count} movies found`
    : '';

  return (
    <div className='infoLine'>
      <div>{result}</div>
      {hasResult && <div className='rightSection'>
        Sort by
        <Button title='release date' className={sortBy === 'release_date' ? 'selected' : ''} />
        <Button title='rating' className={sortBy === 'vote_average' ? 'selected' : ''} />
      </div>}
    </div>
  )
}

InfoLine.propTypes = {
  count: PropTypes.number,
  sortBy: PropTypes.string
};

export default InfoLine;