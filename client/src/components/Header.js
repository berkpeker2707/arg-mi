
import React, { Component, Fragment } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from "../store";
import { loadUser } from "../actions/authActions";
import Logout from "../components/Logout";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Header extends Component {
    state = {
        isOpen: false,
      };
    
      static propTypes = {
        auth: PropTypes.object.isRequired,
      };
    
      componentDidMount() {
        store.dispatch(loadUser());
      }
    
      render() {
        const { isAuthenticated, user } = this.props.auth;
    
        const authLinks = (
          <Fragment>
              <span className="navLink">{user ? `Welcome ${user.email}` : ""}</span>
              <Logout/>
          </Fragment>
        );
    
        const guestLinks = (
          <Fragment>
              <Link className="navLink" to={"/Login"}>Mellon</Link>
              <Link className="navLink" to={"/Register"}>Kayıt</Link>
          </Fragment>
        );
        return (
            <Fragment>
                <div className="navigation-container">
                <h1>Argümi</h1>
                      <Link className="navLink" to={"/"}>Forum</Link>
                      <Link className="navLink" to={"/About"}>Hakkımızda</Link>
                    {isAuthenticated ? authLinks:guestLinks}
                </div>
                <hr />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, null)(Header);
  