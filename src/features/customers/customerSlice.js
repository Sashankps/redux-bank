const initialStateCustomer = { 
    fullName : '', 
    nationId : '', 
    createdAt : ''
}

export default function CustomerReducer(state = initialStateCustomer, action) { 
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
export const createCustomer = (fullName, nationId ) => { 
    return { type : 'customer/createCustomer', payload : { 
        fullName, nationId, createdAt : new Date().toISOString()
    }}; 
}

export const updateName = (fullName) => { 
    return { type : 'customer/updateName', payload : fullName} 
}