import React, { Component } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login} from "../actions/authActions";
import "../App.css";

class Login extends Component {
  state = {
      email: "",
      password: "",
      msg: null
    };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  };

  componentDidUpdate(previousProps){
    const {error} = this.props;
    if(error !== previousProps.error) {
      //Check for register error
      if(error.id === "LOGIN_FAIL") {
        this.setState({msg: error.msg.msg});
      } else {
        this.setState({msg: null});
      }
    }
  }

  onChange = e =>{
    this.setState({ [e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {email, password} = this.state;

    const user = {
      email,
      password
    };
    //User attempt
    this.props.login(user);
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
      <div className="container-login">
        <div className="container-form">
          <div className="form">
          {this.state.msg ? (<p>(this.state.msg)</p>): null}
            <h1>Login</h1>
            <p>Welcome back our dear user!</p>

            <div className="form-group">
              <label for="email">Email</label>
              <br />
              <input
                type="text"
                placeholder="myemail@email.com"
                name="email"
                id="email"
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label for="Password">Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                id="password"
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <br />
              <button type="submit">Login</button>
            </div>

          </div>
        </div>
      </div>
      </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps,{login})(Login);