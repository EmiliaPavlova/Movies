import React from 'react';
import PropTypes from 'prop-types';
import './Logo.css';

const Logo = ({ text }) => <div className='logo'>{text}</div>;

Logo.propTypes = {
  text: PropTypes.string
};

export default Logo;
