import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import HomeResults from '../../components/HomeResults/HomeResults';
import DetailsResults from '../../components/DetailsResults/DetailsResults';

const content = {
  home: 'HomeResults',
  details: 'DetailsResults'
};

const page = 'details';


console.log(content[page]);

class InfoLineContainer extends Component {
  render() {
    return (
      <Fragment>
        {page === 'home'
          ? <HomeResults />
          : <DetailsResults />}
      </Fragment>
    )
  }
}

InfoLineContainer.propTypes = {
  page: PropTypes.oneOf(['home', 'details'])
};

export default InfoLineContainer;