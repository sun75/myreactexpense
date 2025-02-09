import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // 可以单独为按钮设置样式

const Button = ({ children, onClick, type = 'button', className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
