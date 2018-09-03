import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./components/Pages/HomePage/HomePage";
import TransactionPage from "./components/Pages/TransactionPage/TransactionPage";
import AccountsPage from "./components/Pages/AccountsPage/AccountsPage";
import OperationsPage from "./components/Pages/OperationsPage/OperationsPage"



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login" component={HomePage} exact />
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
