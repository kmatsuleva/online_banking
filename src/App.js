import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import TransactionsPageContainer from "./containers/TransactionPageContainer"
import OperationsPage from "./components/Pages/OperationsPage/OperationsPage"
import LoginPage from './components/Pages/LoginPage/LoginPage';
import AccountsPageContainer from './containers/AccountsPageContainer';
import history from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/login" component={LoginPage} exact />
            <Route path="/transaction" component={TransactionsPageContainer} />
            <Route path="/accounts" component={AccountsPageContainer} />          
            <Route path="/operations" component={OperationsPage} />          
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App; 
