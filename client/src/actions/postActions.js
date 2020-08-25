import axios from "axios";
import {    GET_POSTS, ADD_POSTS, DELETE_POSTS, UPDATE_POSTS, POSTS_LOADING  } from "./constants";

export const getPosts = () => dispatch => {
    dispatch(setPostsLoading());
    axios
    .get("/api/posts")
    .then(res => dispatch({type: GET_POSTS, payload:res.data}))
};

export const addPost = (posts) => dispatch => {
    axios
    .post("/api/posts", posts)
    .then(res => dispatch({type: ADD_POSTS, payload: res.data}))
};

export const deletePost = id => {
    return {
        type: DELETE_POSTS,
        payload: id
    };
};

export const setPostsLoading = () => {
    return{
        type: POSTS_LOADING
    };
};