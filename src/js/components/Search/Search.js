import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({ title, conditions, actionButton }) => (
  <Fragment>
    <div className='title'>{title}</div>
    <input />
    <div className='buttons'>
      {!!conditions && conditions}
      <span className='actionButton'>{actionButton}</span>
    </div>
  </Fragment>
  )

Search.propTypes = {
  title: PropTypes.string
};

export default Search;