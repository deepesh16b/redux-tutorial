//  Shop = store
//  {no_of_cakes, no_of_icecreams} = state 
//  Shopkeeper = reducer
//  customer.demand = action  

const redux=require("redux");
const createStore= redux.createStore;
const bindActionCreators = redux.bindActionCreators;

// ---actions TYPE-----
const CAKE_ORDERED= "CAKE_ORDERED";
const CAKE_RESTOCKED="CAKE_RESTOCKED";
const ICECREAM_ORDERED= "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED="ICECREAM_RESTOCKED";

// ---initial state-----
const initialState = {
    noOfCakes : 10 ,
    noOfIcecreams : 10
}

// ---action creaters-----
const orderCake = ()=>{
    return {
        type : CAKE_ORDERED,
        payload : 1
    }
}
const restockCake = (qty = 1)=>{
    return {
        type : CAKE_RESTOCKED,
        payload : qty
    }
}
const orderIcecream = ()=>{
    return {
        type : ICECREAM_ORDERED,
        payload : 1
    }
}
const restockIcecream = (qty = 1)=>{
    return {
        type : ICECREAM_RESTOCKED,
        payload : qty
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
        case ICECREAM_ORDERED:
            return {
                ...state,
                noOfIcecreams : state.noOfIcecreams - 1
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                noOfIcecreams : state.noOfIcecreams + action.payload
            }
        default:
            return state
    }
}
// ---Store created-----
const store = createStore(reducer);
console.log("Initial state:",store.getState());
// ---adding Subscribe listener to store-----
// const unsubscribe = store.subscribe(()=>
//     console.log("updated state:",store.getState()))

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

// store.dispatch(restockCake(3));

// unsubscribe();

// -----------BIND ACTION CREATOR--------------
const unsubscribe = store.subscribe(()=>
    console.log("updated state:",store.getState()))

const actions = bindActionCreators({orderCake, restockCake, orderIcecream, restockIcecream}, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(5);
unsubscribe();

// -----------------------------------