const redux=require("redux");
const createStore= redux.createStore;

// ---actions TYPE-----
const CAKE_ORDERED= "CAKE_ORDERED";
const CAKE_RESTOCKED="CAKE_RESTOCKED";
// ---initial state-----
const initialState = {
    noOfCakes : 10 
}
// ---action creater-----
const orderCake = ()=>{
    return {
        type : CAKE_ORDERED,
        payload : 1
    }
}
// ---action creater-----
const restockCake = (payload)=>{
    return {
        type : CAKE_RESTOCKED,
        payload : payload
    }
}
// ---REDUCER-----
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                noOfCakes : state.noOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                noOfCakes : state.noOfCakes + action.payload
            }
        default:
            return state
    }
}
// ---Store created-----
const store = createStore(reducer);
console.log("Initial state:",store.getState());
// ---adding Subscribe listener to store-----
const unsubscribe = store.subscribe(()=>
    console.log("updated state:",store.getState()))

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

store.dispatch(restockCake(3));

unsubscribe();