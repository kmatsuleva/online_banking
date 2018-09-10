import React, { Component } from 'react';
// import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter' 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./components/Pages/HomePage/HomePage";
import TransactionPage from "./components/Pages/TransactionPage/TransactionPage";
import AccountsPage from "./components/Pages/AccountsPage/AccountsPage";
import OperationsPage from "./components/Pages/OperationsPage/OperationsPage"
import AccountsListContainer from "./containers/AccountsListContainer"

// const mock = new MockAdapter(axios)

// mock
//   .onPost(/\/ login \//, {
//   params: {
//       username: "user",
//       password: "user"
//   }
//   }).reply(200,
//   {
//     message: "Operation successful"
//   })





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
          <AccountsListContainer />
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 
