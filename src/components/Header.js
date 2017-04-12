import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" className="item">home</NavLink>
            <NavLink to="/about" className="item">about</NavLink>
        </div>
    );
};

export default Header;
