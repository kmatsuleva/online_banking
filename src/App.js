import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import AccountsPageContainer from './containers/AccountsPageContainer';
import history from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" component={LoginPage} exact />
            <Route path="/accounts" component={AccountsPageContainer} />         
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App; 
