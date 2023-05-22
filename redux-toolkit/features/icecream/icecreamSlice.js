const reducer = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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
  extraReducers : (builder)=>{
    builder.addCase(reducer.cakeActions.ordered, (state)=>{
        state.numOfIcrecream--
    })
  }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
