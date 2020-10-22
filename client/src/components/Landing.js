import React, { Component, Fragment } from "react";
import "../App.css";
import Post from "../components/Post";
import store from "../store";
import PostModal from "../components/PostModal";
import { loadUser } from "../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <div className="Landing">
        <React.Fragment>
          <PostModal />
          <Post />
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Landing);
