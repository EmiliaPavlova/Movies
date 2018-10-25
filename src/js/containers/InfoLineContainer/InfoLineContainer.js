import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeResults from '../../components/HomeResults/HomeResults';
import DetailsResults from '../../components/DetailsResults/DetailsResults';
import './InfoLineContainer.css';

// const content = {
//   home: 'HomeResults',
//   details: 'DetailsResults'
// };

const page = 'details';
const moviesFound = 2;
const sortBy = 'release_date';

// console.log(content[page]);

class InfoLineContainer extends Component {
  render() {
    const showHomeLine = page === 'home' && moviesFound > 0;
    const showDetailsLine = page === 'details';
    return (
      <div className='infoLine'>
        { showHomeLine && <HomeResults moviesFound={moviesFound} sortBy={sortBy} />}
        { showDetailsLine && <DetailsResults /> }
      </div>
    )
  }
}

InfoLineContainer.propTypes = {
  page: PropTypes.oneOf(['home', 'details']),
  moviesFound: PropTypes.number,
  sortBy: PropTypes.string
};

export default InfoLineContainer;