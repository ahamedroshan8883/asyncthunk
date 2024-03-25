import { applyMiddleware, configureStore, legacy_createStore as createStore,combineReducers } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk';
import  {usersReducer}  from "../reducers/usersReducers";
// import postReducer from "../reducers/postSlice";
import {postsReducer} from "../reducers/reducers";
import { commentReducer } from "../reducers/commentReducer";


// export const store = configureStore({
//     reducer:{
//         usersStore: userReducer,
//         // postsStore: postReducer
//     }
// })

const rootReducer = combineReducers({
    postsStore: postsReducer,
    usersStore: usersReducer,
    commentsStore: commentReducer
});


export const store = createStore(rootReducer,applyMiddleware(thunk));