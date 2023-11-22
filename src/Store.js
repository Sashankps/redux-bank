import { combineReducers, createStore } from "redux";

const initialStateAccount = { 
    balance : 0, 
    loan : 0, 
    loanPurpose : ''
}

const initialStateCustomer = { 
    fullName : '', 
    nationId : '', 
    createdAt : ''
}

function AccountReducer(state = initialStateAccount, action) { 
    switch(action.type) { 
        case 'account/deposit' : 
            return { 
                ...state, balance : state.balance + action.payload
            }; 
        case 'account/withdraw' : 
            return { 
                ...state, balance : state.balance - action.payload
            }
        case 'account/requestLoan' : 
            if(state.loan > 0) return state; 
            return { 
                ...state, balance : state.balance + action.payload.loan, loan : action.payload.loan, loanPurpose : action.payload.loanPurpose
            }; 
        case 'account/payLoan' : 
            return { 
                ...state, 
                loan : 0, 
                loanPurpose : '', 
                balance : state.balance - state.loan
            }
        default : 
            return state; 
    }
}

function customerReducer(state = initialStateCustomer, action) { 
    switch(action.type) { 
        case 'customer/createCustomer' : { 
            return { 
                ...state, 
                fullName : action.payload.fullName, 
                nationId : action.payload.nationId, 
                createdAt : action.payload.createdAt
            }
        }
        case 'customer/updateName' : { 
            return { 
                ...state, 
                fullName : action.payload
            }
        }
        default : 
        return state; 
    }
}

const rootReducer = combineReducers({
    account : AccountReducer, 
    customer : customerReducer
})

const store = createStore(rootReducer); 


const AccountDeposit = (amount) => ({ type: 'account/deposit', payload: amount });
const AccountWithdraw = (amount) => ({ type: 'account/withdraw', payload: amount });
const AccountRequestLoan = (amount) => ({ type: 'account/requestLoan',  payload: {loan: amount,loanPurpose: 'Chocolate'}});
const AccountPayLoan = () => ({ type: 'account/payLoan' });


store.dispatch(AccountDeposit(500)); 
store.dispatch(AccountWithdraw(300)); 
store.dispatch(AccountRequestLoan(1000)); 
store.dispatch(AccountPayLoan())
console.log(store.getState()); 

const createCustomer = (fullName, nationId ) => { 
    return { type : 'customer/createCustomer', payload : { 
        fullName, nationId, createdAt : new Date().toISOString()
    }}; 
}

const updateName = (fullName) => { 
    return { type : 'customer/updateName', payload : fullName} 
}

store.dispatch(createCustomer('Sashank', '91')); 
store.dispatch(updateName('Blip')); 
console.log(store.getState()); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
// store.dispatch({type : 'account/deposit', payload : 500}); 
// console.log(store.getState()); 
// store.dispatch({type : 'account/withdraw', payload : 300}); 
// console.log(store.getState()); 
// store.dispatch({type : 'account/requestLoan', payload : { 
//     loan : 500, loanPurpose : 'Chocolate'
// }})
// console.log(store.getState()); 
// store.dispatch({
//     type : 'account/payLoan'
// })
// console.log(store.getState()); 