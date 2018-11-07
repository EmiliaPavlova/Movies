import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';
import './Grid.css';

const Grid = ({ movies }) => (
  <div className='row'>{movies.map(item => {
    return (
      <div className='movie' key={item.id}>
        <Movie {...item} />
      </div>
    )
  })}
  </div>
)

export default Grid;