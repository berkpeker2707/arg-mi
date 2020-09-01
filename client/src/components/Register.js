import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {register} from "../actions/authActions";
import "../App.css";

class Register extends Component {

    state = {
      username: "",
      email: "",
      password: "",
      msg:null
    };

    static propTypes={
      isAuthenticated: PropTypes.bool,
      error: PropTypes.object.isRequired,
      register: PropTypes.func.isRequired
    };

    componentDidUpdate(previousProps){
      const {error} = this.props;
      if(error !== previousProps.error) {
        //Check for register error
        if(error.id === "REGISTER_FAIL") {
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

      const { username, email, password} = this.state;

      //Create User Obj
      const newUser = {
        username,
        email,
        password
      };

      //Attempt Register
      this.props.register(newUser);

    };

  
  
  render() {
    return (
      <div>
      {this.state.msg ? (alert(this.state.msg)): null}
      <form onSubmit={this.onSubmit}>
      <div className="container-register">
        <div className="container-form">
          <div className="form">
            <h1>Register</h1>
            <p>Please enter your information before you dive in to discussions.</p>

            <div className="form-group">
              <label for="email">Email</label>
              <br/>
              <input type="text" placeholder="myemail@email.com" name="email" id="email" onChange={this.onChange} />
            </div>

            <div className="form-group">
              <label for="username" >Username</label>
              <br/>
              <input type="text" placeholder="MyUniqueUsername" name="username" id="username" onChange={this.onChange} />
            </div>

            <div className="form-group">
              <label for="Password">Password</label>
              <br/>
              <input type="password" placeholder="Enter Password" name="password" id="password" onChange={this.onChange} />
            </div>

            <div className="form-group">
              <br/>
              <button type="submit">Register Me!</button>
            </div>

          </div>
        </div>
      </div>
      </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, {register})(Register);