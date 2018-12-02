import React, { Component } from "react";
import Login from "./components/page/login-page/Login";
import SignUp from "./components/page/login-page/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
