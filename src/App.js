import React from 'react';
import './App.css';

import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

import Login from './Pages/Login/index';
import SignUp from './Pages/SingUp/index';
import UserInfo from './Pages/UserInfo/index';

const App = (props) => {

  const history = props;

  return (
    <div className="App">
        <Switch>
            <Route history={history} exact path="/login" render={props => <Login {...props} /> } />
            <Route history={history} exact path="/signup" render={props => <SignUp {...props} /> } />
            <Route history={history} exact path="/" render={props => <UserInfo {...props} /> } />
        </Switch>
    </div>
  );
};

export default App;
