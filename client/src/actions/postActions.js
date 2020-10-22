import axios from "axios";
import {
  GET_POSTS,
  ADD_POSTS,
  DELETE_POSTS,
  POSTS_LOADING,
} from "./constants";
import {tokenConfig} from "../actions/authActions";
import {returnErrors} from "./errorActions";

export const getPosts = () => (dispatch) => {
  dispatch(setPostsLoading());
  axios
    .get("/api/posts")
    .then((res) => dispatch({ type: GET_POSTS, payload: res.data }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addPost = (posts) => (dispatch, getState) => {
  axios
    .post("/api/posts", posts, tokenConfig(getState))
    .then((res) => dispatch({ type: ADD_POSTS, payload: res.data }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deletePost = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/posts/${id}`, tokenConfig(getState))
    .then((res) => dispatch({ type: DELETE_POSTS, payload: id }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setPostsLoading = () => {
  return {
    type: POSTS_LOADING,
  };
};
