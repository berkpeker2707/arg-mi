import React from "react";
import "./App.css";
import Header from "./components/About";
import Post from "./components/Post";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import User from "./components/Users";
import PostPage from "./components/PostPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Router>
        <div>
          <div className ="navigation-container">
            <ul>
              <li>
                <Link to={"/"}>Forum</Link>
              </li>
              <li>
                <Link to={"/About"}>Hakkımızda</Link>
              </li>
              <li>
                <Link to={"/Login"}>Mellon</Link>
              </li>
              <li>
                <Link to={"/Register"}>Kayıt</Link>
              </li>
            </ul>
          </div>
          <hr/>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Post />
            </Route>
            <Route exact path="/PostPage">
              <PostPage />
            </Route>
            <Route path="/About">
              <Header/>
            </Route>
            <Route path="/Login">
              <Login/>
            </Route>
            <Route path="/Register">
            <Register/>
            </Route>
            <Route path="/Users">
            <User/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    </Provider>
  );
  
}

export default App;
