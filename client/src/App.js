import React, { Component, Fragment } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import "./App.css";
//Redux
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Router>
        <Fragment>
          <Header/>
          <Route exact path ="/" component ={Landing}/>
          <Switch>
            <Route exact path="/Register" component={Register}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/About" component={About}/>
          </Switch>
        </Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;