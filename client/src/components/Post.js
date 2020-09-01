import React, { Component,Fragment } from "react";
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
    const {posts} = this.props;
    return(
      <React.Fragment>
        if(this.props.posts)
      {posts.map(({_id, text, title}) => (
      <div className="container-mostouter" key={_id}>
        <div className="container-post">
          <div className="container-outer">
            <div className="container-inner">
            
              <h3>{title}</h3>
              <p className="postpar">
                {text}
                <br />
                <Link to="/PostPage">Read More</Link>
              </p>
            </div>
          </div>
        </div>
        <button onClick={this.onDeleteClick.bind(this, _id)}>Add</button>
      </div>
      ))}
            </React.Fragment>
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
