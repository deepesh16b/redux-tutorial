const store = require("./app/store");

const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions = require("./features/icecream/icecreamSlice").icecreamActions;

const unsubscribe = store.subscribe(() => {
//   console.log("updated state:>>  ", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(5));
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(5));


unsubscribe();