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
import EditProfile from "./components/page/settings/EditProfile";
import Settings from "./components/page/settings/Settings";

import Burnt from "./components/page/tracking/Burnt";
import Consumed from "./components/page/tracking/Consumed";
import TrackingChoose from "./components/page/tracking/TrackingChoose";
import Layout from "./components/page/Layout";
import Progress from "./components/page/Progress";
import Guidance from "./components/page/Guidance";
import Schedule from "./components/page/schedule/Schedule";

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
    window.location.href = "/";
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      authstate: false
    };
  }
  componentDidMount() {
    if (localStorage.jwtToken) {
      this.setState({ authstate: true });
    } else {
      this.setState({ authstate: false });
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <div className="screen-max-width">
              {localStorage.jwtToken ? <div className="row">
                <div className="col-lg-3 navbar-wrapper">
                  <Route path="/layout" component={Layout} />
                </div>
                <div className="col-lg-9 content-wrapper">
                  <Switch>
                    <PrivateRoute
                      path="/layout/progress"
                      component={Progress}
                    />
                  </Switch>
                  <Switch>
                    <PrivateRoute
                      path="/layout/guidance"
                      component={Guidance}
                    />
                  </Switch>
                  <Switch>
                    <PrivateRoute path="/layout/consume" component={Consumed} />
                  </Switch>

                  <Switch>
                    <PrivateRoute
                      path="/layout/editgoal"
                      component={EditGoal}
                    />
                  </Switch>

                  <Switch>
                    <PrivateRoute
                      path="/layout/editprofile"
                      component={EditProfile}
                    />
                  </Switch>

                  <Switch>
                    <PrivateRoute path="/layout/setting" component={Settings} />
                  </Switch>

                  <Switch>
                    <PrivateRoute path="/layout/burnt" component={Burnt} />
                  </Switch>

                  <Switch>
                    <PrivateRoute
                      path="/layout/schedule"
                      component={Schedule}
                    />
                  </Switch>

                  <Switch>
                    <PrivateRoute
                      path="/layout/tracking"
                      component={TrackingChoose}
                    />
                  </Switch>
                </div>
              </div>:null}

              


            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
