import React, { Component, Fragment } from 'react';
import Header from '../../containers/Header/Header';
import InfoLine from '../../components/InfoLine/InfoLine';
import Results from '../../containers/Results/Results';
import Footer from '../../containers/Footer/Footer';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <InfoLine />
        <Results />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
