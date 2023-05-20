const redux = require("redux");
const createStore= redux.createStore;
const produce = require("immer").produce;

// ---initial state-----
const initialState = {
    name : 'Deepesh',
    address : {
        street : '123 Main St',
        city : 'Boston',
        state : 'MA'
    }
}
// ---actions TYPE-----
const STREET_UPDATED = 'STREET_UPDATED';

// ---action creaters-----
const updatedStreet = (street)=>{
    return {
        type : STREET_UPDATED,
        payload : street
    }
}

// ---REDUCER-----
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     noOfCakes : state.noOfCakes - 1
            // }
            return produce (state, (draft)=>{
                draft.address.street = action.payload;
            })
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

store.dispatch(updatedStreet("93 2C Saket Nagar"));

unsubscribe();
// -----------------------------------
