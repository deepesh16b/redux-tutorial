const redux = require("redux");
const createStore= redux.createStore;

// ---initial state-----
const initialState = {
    loading : false,
    user : [],
    error : ""
}
// ----actions----------
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequested = ()=>{
    return {
        type : FETCH_USERS_REQUESTED,
    }
}
const fetchUsersSucceeded = (users)=>{
    return {
        type : FETCH_USERS_SUCCEEDED,
        payload : users
    }
}
const fetchUsersFailed = error =>{
    return {
        type : FETCH_USERS_FAILED,
        payload : error
    }
}
// -------REDUCER--------------

