import React, { Component, PropTypes } from 'react';
require('../stylesheets/_home.css');

class Blog extends Component {

    render() {
        return(
            <div>
                <section id="BLOG" className="item-middle-center">
                    <h1 className="middle" ref="section">
                        BLOG
                    </h1>

                    <p><a href="https://euntak.github.io">euntak.github.io</a></p>
                    <p>현재 Github Page에 <a href="https://jekyllrb-ko.github.io/">Jekyll</a>을 이용해서 만든 블로그 입니다. </p>
                    <p>여러가지 기술적인 부분에 대해 포스팅을 하고 있지만, 생각보다 쉽지 않네요 </p>
                    <p>이 홈페이지가 완성이 되면 이쪽으로 옮겨서 운영 할 예정 입니다.</p>
                    <p>아 댓글 시스템은, <a href="https://disqus.com/">DISQUS</a>를 통해서 구현 할거예요!</p>
                </section>
            </div>
        );
    }
}

export default Blog;
