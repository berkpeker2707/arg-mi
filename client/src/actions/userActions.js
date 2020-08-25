import axious from "axios";
import {GET_USERS,ADD_USERS,DELETE_USERS, USERS_LOADING} from "./constants";
import Axios from "axios";

export const getUsers = () => dispatch => {
    dispatch(setUsersLoading());
    axious
    .get("/api/users")
    .then(res => dispatch({type: GET_USERS, payload:res.data}))
};

export const addUser = (user) => dispatch => {
    Axios
    .post("/api/users", user)
    .then(res => dispatch({type: ADD_USERS, payload: res.data}))
};

export const setUsersLoading = () => {
    return{
        type: USERS_LOADING
    }
}