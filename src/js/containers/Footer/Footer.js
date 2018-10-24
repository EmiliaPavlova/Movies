import React, { Component } from 'react';
import Logo from '../LogoContainer/LogoContainer';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Logo />
      </div>
    )
  }
}

export default Footer;
