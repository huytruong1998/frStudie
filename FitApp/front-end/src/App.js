import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import { logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Login from "./components/page/login-page/Login";
import SignUp from "./components/page/login-page/SignUp";

//Check for token
if (localStorage.jwtToken) {
  //Set Auth token
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set user and is Authenticated
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser());
    //TODO: Clear current profile
    //Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
