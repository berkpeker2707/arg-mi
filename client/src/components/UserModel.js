import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";
import {ModalHeader, ModalBody, Modal, Form, FormGroup, Label, Input, Button} from "reactstrap";

export class userModel extends Component {
  state = {
    modal: false,
    username: "",
    email: "",
    password:""
  }

  toggle = () => {
      this.setState({
          modal: !this.state.modal
      });
  }

  onChange = (e) => {
      this.setState({[e.target.username]: e.target.value});
      this.setState({[e.target.email]: e.target.value});
      this.setState({[e.target.password]: e.target.value});
  }

  onSubmit = (e) =>{
    e.preventDefault();

    const newUser = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
    }
    this.props.addUser(newUser);
    this.toggle();

    console.log(newUser);
  }

  render() {
    return (<div>
        <Button
        onClick={this.toggle}
        >Kullanıcı Ekle</Button>

        <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}>
            <ModalHeader
            toggle={this.toggle}>
                Kullanıcı Ekleme Paneli
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="user">User</Label>
                        <Input type="text" name="username" placeholder="Kullanıcı Ekle" onChange={this.onChange}/>
                        <Label for="Email">Email</Label>
                        <Input type="text" name="email" placeholder="Kullanıcı Ekle" onChange={this.onChange}/>
                        <Label for="Password">Password</Label>
                        <Input type="text" name="password" placeholder="Kullanıcı Ekle" onChange={this.onChange}/>
                        <Button>Tamam</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
    </div>);
  }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, {addUser})(userModel);
