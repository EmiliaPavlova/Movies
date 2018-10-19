import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  title,
  className,
  selected,
  onClick = () => { },
}) => (
  <button onClick={onClick} {...rest}>
    {title}
  </button>
)

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;
