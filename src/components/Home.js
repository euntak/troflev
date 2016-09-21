import React, { Component, PropTypes } from 'react';
require('../stylesheets/_home.css');

const propTypes = {
};

const defaultProps = {
};

class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <section id="HOME">
                    <div>
                        <h1 className="title">
                            JONIOR DEVELOPER <br/>
                        <span className="bold" >Troflev</span>
                        </h1>
                    </div>
            
                    <div>
                        <h2>열정, 노력, 책임</h2>
                        <h2>어느 하나 놓치지 않겠습니다.</h2>
                    </div>
                    <div>
                        <p></p>
                    </div>

                    <div>
                        <p>새로운것에 대한 두려움 없이 부딪히며 왔습니다.</p>
                        <p>열심히 해서 꼭 실력 있는 개발자가 되고 싶습니다.</p>
                        <p>남들과 함께 소통하며 재밌게 일하는 사람이 되고 싶습니다.</p>
                        <p><span className="important">구직중</span>입니다. 필요하시다면 언제든지 연락 주세요.</p>
                    </div>
                </section>
            </div>
        );
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
