import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPosts, deletePost } from "../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { USERS_LOADING } from "../actions/constants";
import PostModal from "./PostModal";

class Post extends Component {
  componentDidCatch(){
    this.props.getPosts();
  }

  onDeleteClick = (id) => {
this.props.deletePost(id);
  }

  render() {
    const {posts} = this.props.post;
    {posts.map(({id,title, text}) =>(
      <div className="container-mostouter" key={id}>
        <div className="container-post">
          <div className="container-outer">
            <div className="container-inner">
              <h3>{title}</h3>
              <p className="postpar">
                {text}
                <br />
                <Link to="/PostPage">Devamını Oku</Link>
              </p>
            </div>
          </div>
        </div>
        <button onClick={this.onDeleteClick.bind(this, id)}>Ekle</button>
      </div>
      ))};
    return (
      <div>
        <PostModal />
      </div>
    );
  }
}

Post.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Post);
