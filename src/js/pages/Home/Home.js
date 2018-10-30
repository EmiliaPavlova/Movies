import React, { Component, Fragment } from 'react';
import Header from '../../containers/Header/Header';
import InfoLine from '../../containers/InfoLineContainer/InfoLineContainer';
import Results from '../../containers/Results/Results';
import Footer from '../../containers/Footer/Footer';
import './Home.css';

class Home extends Component {

/*
  // Testing ErrorBoundary
  componentDidMount() {
    throw new Error("An error has occured in Home component!");
  }
*/

  render() {
    return (
      <Fragment>
        <Header />
        <InfoLine page='home' moviesFound={2} sortBy='release_date' />
        <Results />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
