import React, {Component} from "react";
import "../App.css";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeName = this.onChangeName.bind(this);

    this.state = {
      name: "",
      username: "",
      email: "",
      password: ""
    }

  }

    onChangeEmail(e) {
      this.setState({email: e.target.value})
    }

    onChangeUsername(e) {
      this.setState({username: e.target.value})
    }

    onChangePassword(e) {
      this.setState({password: e.target.value})
    }

    onChangeName(e) {
      this.setState({name: e.target.value})
    }

    onSubmit(e){
      e.preventEvent();
    
      console.log(`Student successfully created!`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Username: ${this.state.username}`);
    console.log(`Password: ${this.state.password}`);
    console.log(`Name: ${this.state.name}`);

    this.setState({email:"", username:"", password:"", name:""

    })

  }
  
  render() {
    return (
      <form onSubmit={this.onSubmit}>
      <div className="container-register">
        <div className="container-form">
          <div className="form">
            <h1>Register</h1>
            <p>Please enter your information before you dive in to discussions.</p>
            <div className="form-group">
              <label for="email">Email</label>
              <br/>
              <input type="text" placeholder="myemail@email.com" name="email" id="email" value={this.state.email} required />
            </div>
            <div className="form-group">
              <label for="username" >Username</label>
              <br/>
              <input type="text" placeholder="MyUniqueUsername" name="username" id="username" value={this.state.username} required />
            </div>
            <div className="form-group">
              <label for="Password">Password</label>
              <br/>
              <input type="password" placeholder="Enter Password" name="psw" id="id" value={this.state.password} required />
            </div>
            <div className="form-group">
              <label for="name">Name</label>
              <br/>
              <input type="text" placeholder="Enter Your Name" name="name" id="name" value={this.state.name} required />
            </div>
            <div className="form-group">
              <br/>
              <button type="submit">Register Me!</button>
            </div>
          </div>
        </div>
      </div>
      </form>
    )
  }
}