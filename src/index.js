import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CellarList from './components/CellarList/CellarList';
import Pipes from './components/Pipes/Pipes';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import CellarAddForm from './components/CellarAddForm/CellarAddForm';
import PipesAddForm from './components/PipesAddForm/PipesAddForm';




ReactDOM.render(

    <Router>
        <div>
            <Route exact path="/" component={App} /> 
            <Route path="/CellarList" component={CellarList} />
            <Route path="/Pipes" component={Pipes} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/CellarAddForm" component={CellarAddForm} />
            <Route path="/PipesAddForm" component={PipesAddForm} />
        </div>
    </Router>, document.getElementById('root')
);


registerServiceWorker();



// ReactDOM.render(<App />, document.getElementById('root'));
