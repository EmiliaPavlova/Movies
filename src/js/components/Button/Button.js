import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  title,
  className,
  selected,
  onClick,
  ...rest
}) => {
  const classNames = `button ${className ? className : ''} ${selected ? 'selected' : ''}`;

  return (
    <button className={classNames} onClick={onClick} {...rest}>
      {title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default Button;
