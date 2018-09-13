import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./components/Pages/HomePage/HomePage";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login" component={HomePage} exact />       
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 
