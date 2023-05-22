const redux = require("redux");
const createStore = redux.createStore;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const applyMiddleware = redux.applyMiddleware;

// ---initial state-----
const initialState = {
  loading: false,
  user: [],
  error: "",
};
// ----actions----------
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequested = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};
const fetchUsersSucceeded = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};
const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

// -------REDUCER--------------
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// -----action creator that returns a function(dispatch) : (because of thunkMiddleware)
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequested());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSucceeded(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailed(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());

unsubscribe();
