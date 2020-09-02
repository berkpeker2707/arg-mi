import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPosts, deletePost } from "../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Post extends Component {

  static propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getPosts();
  }

  onDeleteClick = (id) => {
    this.props.deletePost(id);
  };

  render() {
    const { posts } = this.props.post;
    
    return (
      <div>
        {posts.map(({ _id, text, title }) => (
          <div className="container-mostouter" key={_id}>
            <div className="container-post">
              <div className="container-outer">
                <div className="container-inner">
                  <h3>{title}</h3>
                  <p className="postpar">
                    {text}
                    <br />
                    <Link to="/PostPage">Daha Fazla Oku..</Link>
                  </p>
                  {this.props.isAuthenticated ? <button onClick={this.onDeleteClick.bind(this, _id)}>Sil</button> : null}
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.post,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPosts, deletePost })(Post);
