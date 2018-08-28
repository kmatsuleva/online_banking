import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import TransactionPage from "./components/TransactionPage/TransactionPage";
import AccountsPage from "./components/AccountsPage/AccountsPage";
import OperationsPage from "./components/OperationsPage/OperationsPage"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/transaction" component={TransactionPage} />
            <Route path="/accounts" component={AccountsPage} />          
            <Route path="/operations" component={OperationsPage} />          
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 