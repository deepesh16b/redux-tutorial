import {ordered as cakeOrdered} from "../cake/cakeSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIcrecream: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcrecream--;
    },
    restocked: (state, action) => {
      state.numOfIcrecream += action.payload;
    },
  },

  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIcrecream--;
  //     },
  //   },

  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcrecream--;
    });
  },
});

export const { ordered, restocked } = icecreamSlice.actions;
export default icecreamSlice.reducer;
