import {
    POPULATE_ALL_BANK_DETAILS
} from '../actions/actions'

export function bankDetailsReducer(state = { allBankDetails : []}, action){
    switch ( action.type ) {

        case POPULATE_ALL_BANK_DETAILS :
            return Object.assign({}, state, {
                allBankDetails : action.allBankDetails,
            })
        
        default : return state
    }
}

