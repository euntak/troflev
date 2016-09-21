import React, { Component, PropTypes } from 'react';
require('../stylesheets/_home.css');

const propTypes = {
    skiils: PropTypes.array,
    info: PropTypes.object
};

const defaultProps = {
    skills: ['JAVASCRIPT', 'HTML/CSS', 'PHP', 'MySQL', 'Android', 'Git', 'React'],
    info: {
        name: '류성탁(柳成卓)',
        nickname: 'Troflev',
        birth: '1990년 10월',
        uni: '호서대학교 컴퓨터공학과 전공'
    }
};

class Info extends Component {

    render() {

        let skills = this.props.skills.map((skill) => {
            return  <li><p>{skill}</p></li>
        });

        return(
            <div>
                <section id="BLOG" className="item-middle-center">
                    <div>
                        <h1 className="middle" ref="section">
                            INFO
                        </h1>
                        <p>{this.props.info.name}
                            <span className="bold">{this.props.info.nickname}</span></p>
                        <p>{this.props.info.birth}</p>
                        <p>{this.props.info.uni}<span className="important">[졸업]</span></p>
                    </div>

                    <div>
                        <h3 className="middle" ref="section">SKILLS</h3>
                        <ul>{skills}</ul>
                    </div>

                </section>
            </div>
        );
    }
}

Info.propTypes = propTypes;
Info.defaultProps = defaultProps;

export default Info;
