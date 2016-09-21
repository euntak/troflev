import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
// import headerCss from '../style/header.scss';
require('../stylesheets/_header.css');

const propTypes = {
    // menus : PropTypes.array;
};

const defaultProps = {
    menus : ['HOME', 'BLOG', 'PORTFOLIO', 'INFO', 'CONTACT']
};

class Header extends Component {
    constructor(props) {
        super(props);

        // this.handlePage = this.handlePage.bind(this);
    }


    render() {
        const menus = this.props.menus.map((menuItem) => {
            return  <div className="nav-list-item item-center">
                        <Link to={menuItem}>{menuItem}</Link>
                    </div>
        });

        return(
                <header className="nav-container item-center nav-wrapper deep-orange">
                    {menus}
                </header>
        );
    }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
