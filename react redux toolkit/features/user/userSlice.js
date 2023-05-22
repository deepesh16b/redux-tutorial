import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

// ==========================================================================================================
// -----action creator that returns a function(dispatch) : (because of thunkMiddleware)
// const fetchUsers = () => {
//     return async function (dispatch) {
//       try {
//         dispatch(fetchUsersRequested());
//         const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//         const users = response.data.map((user) => user.id);
//         dispatch(fetchUsersSucceeded(users));
//       } catch (error) {
//         dispatch(fetchUsersFailed(error.message));
//       }
//     };
//   };

// ==========================================================================================================
// --just an action creator which returns 3 actions-type (pending, fulfilled,rejected)
//  & automatically put the return entity in action.payload ,
//  & dispatch is preDefined in its logic so no need to dispatch
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
