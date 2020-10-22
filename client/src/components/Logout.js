import React, { Component, Fragment } from 'react'
import {logout} from "../actions/authActions";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }
    render() {
        return (
            <Fragment>
                <a className="navLink" onClick={this.props.logout} href="#">Logout</a>
            </Fragment>
        )
    }
}

export default connect(null, {logout})(Logout);