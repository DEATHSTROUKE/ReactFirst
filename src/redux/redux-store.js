import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";


let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogReducer
})

let store = createStore(reducers)

export default store
