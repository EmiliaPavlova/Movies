import React, { Component, Fragment } from 'react';
import Header from '../../containers/Header/Header';
import InfoLine from '../../containers/InfoLineContainer/InfoLineContainer';
import Results from '../../containers/Results/Results';
import Footer from '../../containers/Footer/Footer';
import './Details.css';

class Details extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <InfoLine page='details' />
        <Results />
        <Footer />
      </Fragment>
    );
  }
}

export default Details;
