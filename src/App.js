import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import Transaction from "./components/Transaction/Transaction";
import Accounts from "./components/Accounts/Accounts";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/transaction" component={Transaction} />
            <Route path="/accounts" component={Accounts} />          
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 