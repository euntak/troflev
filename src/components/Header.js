import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/base/_header.scss';

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" className="item">HOME</NavLink>
            <NavLink to="/about" className="item">ABOUT</NavLink>
        </div>
    );
};

export default Header;
