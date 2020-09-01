import {combineReducers} from "redux";
import PostReducer from "./PostReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
    post: PostReducer,
    error: errorReducer,
    auth: authReducer,


});