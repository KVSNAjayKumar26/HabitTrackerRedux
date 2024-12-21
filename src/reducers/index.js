import { combineReducers } from "redux";
import habitReducer from "./habitReducer";


const rootReducer = combineReducers({
    habit: habitReducer,
});

export default rootReducer;