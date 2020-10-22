import React, { Component, Fragment } from "react";
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
      <Fragment>
        {posts.map(({ _id, text, title }) => (
          <Link to="/PostPage">
          <div className="container-mostouter" key={_id}>
          <p class="text">Tamamını görmek için tıklayınız.</p>         
            <div className="container-post">
              <div className="container-outer">
                <div className="container-inner">
                  <h3>{title}</h3>
                  <p className="postpar">
                    {text}
                    <br />
                  </p>
                  {this.props.isAuthenticated ? <button onClick={this.onDeleteClick.bind(this, _id)}>Sil</button> : null}
                  
                </div>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.post,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPosts, deletePost })(Post);
