import React, { Component, PropTypes } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import Header from './Header';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <StickyContainer>
                    <Sticky>
                        <Header/>
                    </Sticky>
                    {/* routing compoents */}
                    {this.props.children}
                </StickyContainer>
            </div>
        );
    }
}

export default App;
