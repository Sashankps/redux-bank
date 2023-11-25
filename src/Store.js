import AccountReducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";

import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: { 
        account : AccountReducer, customer : CustomerReducer
    }
})

export default store; 

// const rootReducer = combineReducers({
//     account : AccountReducer, 
//     customer : CustomerReducer
// })

// const store = createStore(rootReducer); 

// const store = configureStore({
//     reducer : { 
//         account : AccountReducer, 
//         customer : CustomerReducer
//     }
// })