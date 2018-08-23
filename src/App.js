import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import Transaction from "./components/Transaction/Transaction";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/transaction" component={Transaction} />
            {/* <Route path="/contact" component={Contact} />
            <Route component={Error} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 