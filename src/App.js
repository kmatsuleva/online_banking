import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TransactionPage from "./components/Pages/TransactionPage/TransactionPage";
import AccountsPage from "./components/Pages/AccountsPage/AccountsPage";
import OperationsPage from "./components/Pages/OperationsPage/OperationsPage"
import AccountsListContainer from "./containers/AccountsListContainer"
import LoginPage from './components/Pages/LoginPage/LoginPage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login" component={LoginPage} exact />
            <Route path="/transaction" component={TransactionPage} />
            <Route path="/accounts" component={AccountsPage} />          
            <Route path="/operations" component={OperationsPage} />          
          </Switch>
          <AccountsListContainer />
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 
