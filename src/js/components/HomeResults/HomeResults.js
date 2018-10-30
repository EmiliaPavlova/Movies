import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './HomeResults.css';

const HomeResults = ({
  moviesFound,
  sortBy
}) => {
  const result = moviesFound > 1
    ? `${moviesFound} movies found`
    : `${moviesFound} movie found`;

  return (
    <Fragment>
      <div>{result}</div>
      <div className='rightSection'>
        Sort by
        <Button title='release date' className={sortBy === 'release_date' ? 'selected' : ''} onClick={() => console.log('click release date')} />
        <Button title='rating' className={sortBy === 'vote_average' ? 'selected' : ''} onClick={() => console.log('click rating')} />
      </div>
    </Fragment>
  )
}

HomeResults.propTypes = {
  moviesFound: PropTypes.number,
  sortBy: PropTypes.string
};

export default HomeResults;