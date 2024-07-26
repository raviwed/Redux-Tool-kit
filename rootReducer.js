import { combineReducers } from "@reduxjs/toolkit";
import programmeauthReducer from "./Slice/programmeSlice";
import authReducer from "./Slice/authSlice";

const appReducer = combineReducers({
    auth: authReducer,
    programme: programmeauthReducer,
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}
export default rootReducer