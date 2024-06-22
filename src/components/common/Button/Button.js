import React from 'react';
import './Button.css';

const Button = ({ onClick, label, type }) => {
  const buttonClass = `custom-button ${type}-button`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
