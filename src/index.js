import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import List from './components/List/List';
import App from './containers/App';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/List" component={List} />
        </div>
    </Router>, document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
