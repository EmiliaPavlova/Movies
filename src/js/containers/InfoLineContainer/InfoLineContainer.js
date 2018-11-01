import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeResults from '../../components/HomeResults/HomeResults';
import DetailsResults from '../../components/DetailsResults/DetailsResults';
import './InfoLineContainer.css';

// const content = {
//   home: 'HomeResults',
//   details: 'DetailsResults'
// };

// console.log(content[page]);

class InfoLineContainer extends Component {
  render() {
    const { page, moviesFound, sortBy } = this.props;

    const showHomeLine = page === 'home' && moviesFound > 0;
    const showDetailsLine = page === 'details';
    return (
      <div className='infoLine'>
        { showHomeLine && <HomeResults moviesFound={moviesFound} sortBy={sortBy} />}
        { showDetailsLine && <DetailsResults genre='Drama' /> }
      </div>
    )
  }
}

InfoLineContainer.propTypes = {
  page: PropTypes.oneOf(['home', 'details']),
  moviesFound: PropTypes.number,
  sortBy: PropTypes.oneOf(['title', 'release_date'])
};

export default InfoLineContainer;