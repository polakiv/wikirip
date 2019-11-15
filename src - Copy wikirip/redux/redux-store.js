import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import searchReducer from "./search-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    searchPage: searchReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;


export default store;