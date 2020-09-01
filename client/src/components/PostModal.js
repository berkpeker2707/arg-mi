import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addPost} from "../actions/postActions";

class PostModal extends Component {
    state = {
        modal:false,
        text: "",
        title: ""
    }

displayAddPost = () => {
    var element = document.getElementById("addToggle");
    if(element.style.display === "none") {
        element.style.display ="block";
    } else {
        element.style.display = "none"
    }
  }

onChange = (e) => {
    this.setState({[e.target.text]: e.target.value})
    this.setState({[e.target.title]: e.target.value})

}

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
            <button
            onClick={this.displayAddPost}
            >Post Ekleyin</button>

            <div id="addToggle" style={{display: "none"}}>
            <form
            onSubmit={this.onSubmit}
            >
                <h1>Post Ekleyin</h1>
                <label htmlFor="post">Title</label>
                <input type="text" name="title" id="title" placeholder="Title yazın" onChange={this.onChange} value={this.state.title}/>
                <label htmlFor="post">Post</label>
                <input type="text" name="text" id="post" placeholder="Post yazın" onChange={this.onChange} value={this.state.text}/>
                <button >Yeni Ekle</button>
            </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({  post: state.post
});

export default connect(mapStateToProps, {addPost})(PostModal);