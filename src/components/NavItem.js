import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({onClick, children, linkClass}) => {
  return <li><button className={linkClass} onClick={onClick}>{children}</button></li>;
};

NavItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  linkClass: PropTypes.string.isRequired
};

export default NavItem;