import React, { Component, PropTypes } from 'react';
require('../stylesheets/_home.css');

const propTypes = {
};

const defaultProps = {
};

class Contact extends Component {

    render() {
        return(
            <div>
                <section id="CONTACT" className="item-middle-center">

                    <div>
                        <h1 className="middle" ref="section">CONTACT</h1>
                        <p>대한민국, 인천광역시 연수구</p>
                        <p>+82. 010.2271.4324</p>
                        <p>troflev@gmail.com</p>
                        <p>무엇이든 궁금하시면 물어보세요!</p>
                    </div>

                </section>
            </div>
        );
    }
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;
