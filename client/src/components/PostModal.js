import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addPost} from "../actions/postActions";
import PropTypes from "prop-types";

class PostModal extends Component {
    state = {
        text: "",
        title: ""
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool
    };

displayAddPost = () => {
    var element = document.getElementById("addToggle");
    if(element.style.display === "none") {
        element.style.display ="block";
    } else {
        element.style.display = "none"
    }
  }

onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
};

obSubmit = (e) => {
    e.preventDefault();
    const newPost = {
        title: this.state.title,
        text: this.state.text
    }

this.props.addPost(newPost);
this.displayAddPost();
}

    render() {
        return (
            <div>
                {this.props.isAuthenticated ? <button
            onClick={this.displayAddPost}
            >Post Ekleyin</button> : <h4>Lütfen yazmak için yapın.</h4>}
            

            <div id="addToggle" style={{display: "none"}}>
            <form
            onSubmit={this.onSubmit}
            >
                <h1>Post Ekleyin</h1>
                <label for="post">Title</label>
                <input type="text" name="title" id="title" placeholder="Title yazın" onChange={this.onChange}/>
                <label for="post">Post</label>
                <input type="text" name="text" id="post" placeholder="Post yazın" onChange={this.onChange}/>
                <button >Yeni Ekle</button>
            </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    post: state.post,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {addPost})(PostModal);