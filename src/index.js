import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Cellar from './components/Cellar/Cellar';
import Pipes from './components/Pipes/Pipes';
import Credentials from './components/Credentials/Credentials'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} /> 
            <Route path="/Cellar" component={Cellar} />
            <Route path="/Pipes" component={Pipes} />
            <Route path="/Credentials" component={Credentials} />
        </div>
    </Router>, document.getElementById('root')
);

registerServiceWorker();

// ReactDOM.render(<App />, document.getElementById('root'));
