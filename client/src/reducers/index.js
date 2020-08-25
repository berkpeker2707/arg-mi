import {combineReducers} from "redux";
import userReducer from "./userReducer";
import PostReducer from "./PostReducer";

export default combineReducers({
    user: userReducer,
    post: PostReducer

});