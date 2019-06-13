import {
    USER_SELECTED_BANK,
    USER_SELECTED_CITY
} from '../actions/actions'

export function userSelectionReducer(state = { selectedBank : null, selectedCity: null }, action){
    switch ( action.type ) {

        case USER_SELECTED_BANK:
            return Object.assign({}, state, {
                selectedBank : action.bankName
            })
        
        case USER_SELECTED_CITY:
            return Object.assign({}, state, {
                selectedCity : action.selectedCity
            })
    
        default :
            return state
    }
}

