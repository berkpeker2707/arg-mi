import React, { Component } from "react";
import "../App.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="container-login">
        <div className="container-form">
          <div className="form">
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
                required
              />
            </div>
            <div className="form-group">
              <label for="Password">Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="id"
                required
              />
            </div>
            <div className="form-group">
              <br />
              <button type="submit">Login</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
