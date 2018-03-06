import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({onClick, children, btnClass}) => {
  return <li><button className={btnClass} onClick={onClick}>{children}</button></li>;
};

NavItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  btnClass: PropTypes.string.isRequired
};

export default NavItem;