import React from "react";
import Menu from "./Menu";
import Form from "./Form";
import Button from "./Button";

const App = () => (
  <div>
    <Menu />
    <Form label="User: *" />
    <Form label="Password: *" />
    <Button btnValue="Sign in"/>
  </div>
);

export default App;
