import React, { Component, Fragment } from 'react';
import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Fragment>
      <Header />
      <div>Home page</div>
      <Footer />
      </Fragment>
    );
  }
}

export default Home;
