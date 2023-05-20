
const redux = require("redux");
const createStore= redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;


// ---actions TYPE-----
const CAKE_ORDERED= "CAKE_ORDERED";
const CAKE_RESTOCKED="CAKE_RESTOCKED";
const ICECREAM_ORDERED= "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED="ICECREAM_RESTOCKED";
 1
// ---initial state-----
const initialCakeState = {
    noOfCakes : 10 
}
const initialIcecreamState = {
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
const cakeReducer = (state = initialCakeState, action)=>{
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
const icecreamReducer = (state = initialIcecreamState, action)=>{
    switch(action.type){
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
const rootReducer = combineReducers({cake : cakeReducer, icecream : icecreamReducer,})
const store = createStore(rootReducer);
console.log("Initial state:",store.getState());
// ---adding Subscribe listener to store-----
// const unsubscribe = store.subscribe(()=>
//     console.log("updated state:",store.getState()))

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

// store.dispatch(restockCake(3));

// unsubscribe();v v v v v v v v v v v v v v v v 14700

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
