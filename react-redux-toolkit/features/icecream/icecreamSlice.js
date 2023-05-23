import {ordered as cakeOrdered} from "../cake/cakeSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIcecream: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },

  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIcrecream--;
  //     },
  //   },

  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecream--;
    });
  },
});

export const { ordered, restocked } = icecreamSlice.actions;
export default icecreamSlice.reducer;
