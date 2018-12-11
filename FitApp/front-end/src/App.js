import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import { logoutUser } from "./actions/authActions";
import { clearCurrentProgress } from "./actions/progressActions";

import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/private/PrivateRoute";

import Login from "./components/page/login-page/Login";
import SignUp from "./components/page/login-page/SignUp";
import EditGoal from "./components/page/settings/EditGoal";
import Settings from "./components/page/settings/Settings";

import Burnt from "./components/page/tracking/Burnt";
import Consumed from "./components/page/tracking/Consumed";
import TrackingChoose from "./components/page/tracking/TrackingChoose";
import Layout from "./components/page/Layout";
import Progress from "./components/page/Progress";
import Schedule from "./components/page/Schedule";

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
    //TODO: Clear current progress
    store.dispatch(clearCurrentProgress());
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
            <div className="row">
              <div className="col-lg-3 navbar-wrapper">
                <Route path="/layout" component={Layout} />
              </div>
              <div className="col-lg-9 content-wrapper">
                <Switch>
                  <PrivateRoute path="/layout/progress" component={Progress} />
                  <PrivateRoute path="/layout/consume" component={Consumed} />
                  <PrivateRoute path="/layout/editgoal" component={EditGoal} />
                  <PrivateRoute path="/layout/setting" component={Settings} />
                  <PrivateRoute path="/layout/burnt" component={Burnt} />
                  <PrivateRoute path="/layout/schedule" component={Schedule} />
                  <PrivateRoute
                    path="/layout/tracking"
                    component={TrackingChoose}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
