import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({ poster_path, title, release_date, genres }) => {
  const date = release_date.substr(0, 4);
  const genre = genres.join(' & ');
  return (
    <Fragment>
      <div className='image'>
        <img src={poster_path} alt={title} />
      </div>
      <div className='header'>
        <div className='movieTitle'>{title}</div>
        <div className='movieDate'>{date}</div>
      </div>
      <div className='genre'>{genre}</div>
    </Fragment>
  );
}

Movie.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;