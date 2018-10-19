import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({ title, conditions, actionButton }) => (
  <Fragment>
    <div className='title'>{title}</div>
    <input></input>
    <div>
      {!!conditions && conditions}
      {actionButton}
    </div>
  </Fragment>
  )

Search.propTypes = {
  title: PropTypes.string
};

export default Search;