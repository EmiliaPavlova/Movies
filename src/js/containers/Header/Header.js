import React, { Component, Fragment } from 'react';
import Logo from '../LogoContainer/LogoContainer';
import Search from '../SearchContainer/SearchContainer';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <Fragment>
      <div className='background'>
        <Logo />
        <Search />
      </div>
      </Fragment>
    );
  }
}

export default Header;
