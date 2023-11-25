import { createSlice } from "@reduxjs/toolkit"

const initialState = { 
    balance : 0, 
    loan : 0, 
    loanPurpose : ''
}

const accountSlice = createSlice({
    name : 'account', 
    initialState, 
    reducers : { 
        deposit(state, action) { 
            state.balance += action.payload
        },
        withdraw(state, action) { 
            state.balance -= action.payload 
        }, 
        requestLoan : { 
            prepare(amount, purpose) { 
                return { 
                    payload : {amount, purpose}, 
                }; 
            }, 
            reducer(state, action) { 
                if(state.loan > 0) return; 
                state.loan = action.payload.amount; 
                state.loanPurpose = action.payload.purpose;
                state.balance += action.payload.amount
            }
        },
        payLoan(state){
            state.balance -= state.loan; 
            state.loan = 0; 
            state.loanPurpose = ''; 
        }
    }
})

export const {deposit, withdraw, requestLoan, payLoan} = accountSlice.actions; 
export default accountSlice.reducer; 




// export default function AccountReducer(state = initialStateAccount, action) { 
//     switch(action.type) { 
//         case 'account/deposit' : 
//             return { 
//                 ...state, balance : state.balance + action.payload
//             }; 
//         case 'account/withdraw' : 
//             return { 
//                 ...state, balance : state.balance - action.payload
//             }
//         case 'account/requestLoan' : 
//             if(state.loan > 0) return state; 
//             return { 
//                 ...state, balance : state.balance + action.payload.loan, loan : action.payload.loan, loanPurpose : action.payload.loanPurpose
//             }; 
//         case 'account/payLoan' : 
//             return { 
//                 ...state, 
//                 loan : 0, 
//                 loanPurpose : '', 
//                 balance : state.balance - state.loan
//             }
//         default : 
//             return state; 
//     }
// }
// export const AccountDeposit = (amount) => ({ type: 'account/deposit', payload: amount });
// export const AccountWithdraw = (amount) => ({ type: 'account/withdraw', payload: amount });
// export const AccountRequestLoan = (amount) => ({ type: 'account/requestLoan',  payload: {loan: amount,loanPurpose: 'Chocolate'}});
// export const AccountPayLoan = () => ({ type: 'account/payLoan' });