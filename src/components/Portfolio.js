import React, { Component, PropTypes } from 'react';
require('../stylesheets/_home.css');

const propTypes = {
};

const defaultProps = {

};

class Portfolio extends Component {
    render() {
        return(
            <div>
                <section id="PORTFOLIO" className="item-middle-center">
                    <h1 className="middle" ref="section">
                        PORTFOLIO
                    </h1>
                    <p><a href="https://memoria.pnine.co">MEMORIA</a></p>
                    <p><a href="http://lavitaitalia.com">LAVITA ITALIA</a></p>
                    <p><a href="http://teamoitalia.com">TEAMO ITALIA</a></p>
                    <p><a href="http://fillpic.com">FILLPIC</a></p>
                </section>
            </div>
        );
    }
}

Portfolio.propTypes = propTypes;
Portfolio.defaultProps = defaultProps;

export default Portfolio;
