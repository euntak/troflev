import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';
import Info from './components/Info';
import Contact from './components/Contact';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home}/>
            <Route path="blog" component={Blog} />
            <Route path="portfolio" component={Portfolio} />
            <Route path="info" component={Info} />
            <Route path="contact" component={Contact} />
        </Route>
    </Router>,
    document.getElementById('root')
);
