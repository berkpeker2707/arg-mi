import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addPost} from "../actions/postActions";

class PostModal extends Component {
    state = {
        modal:false,
        text: "",
        title: ""
    }

toggle = () => {
    this.setState({
        modal: !this.state.modal
    });
}

onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}

    render() {
        return (
            <div>
            <button
            onClick={this.toggle}
            >Post Ekle</button>

            <form
            toggle={this.toggle}
            onSubmit={this.onSubmit}
            >
                <h1>Post Ekleyin</h1>
                <label for="post">Post</label>
                <input type="text" name="text" id="post" placeholder="Post yazın" onChange={this.onChange}/>
            </form>
            </div>
        )
    }
}

export default connect()(PostModal);