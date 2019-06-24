import {
    USER_SELECTED_BANK,
    USER_SELECTED_CITY,
    USER_SELECTED_BRANCH,
    POPULATE_FINAL_BANK_FETCHED ,
    RESET_USER_SELECTION,
} from '../actions/actions'

export function userSelectionReducer(state = { selectedBank : null, selectedCity: null, selectedBranch : null, finalBankFetched : null}, action){
    switch ( action.type ) {

        case USER_SELECTED_BANK:
            return Object.assign({}, state, {
                selectedBank : action.bankName,
                selectedCity : state.selectedCity,
                selectedBranch : state.selectedBranch,
                finalBankFetched : state.finalBankFetched
            })
        
        case USER_SELECTED_CITY:
            return Object.assign({}, state, {
                selectedBank : state.selectedBank,
                selectedCity : action.selectedCity,
                selectedBranch : state.selectedBranch,
                finalBankFetched : state.finalBankFetched
            })
        
        case USER_SELECTED_BRANCH:
            return Object.assign({}, state, {
                selectedBank : state.selectedBank, 
                selectedCity : state.selectedCity,
                selectedBranch : action.selectedBranch,
                finalBankFetched : state.finalBankFetched
            })
        case POPULATE_FINAL_BANK_FETCHED :
            return Object.assign({}, state, {
                selectedBank : state.selectedBank, 
                selectedCity : state.selectedCity,
                selectedBranch : state.selectedBranch,
                finalBankFetched : action.finalBankFetched
            })

        case RESET_USER_SELECTION:
            return Object.assign({}, state, {
                selectedBank : null, 
                selectedCity : null,
                selectedBranch : null, 
                finalBankFetched : null 
            })
        
        default :
            return state
    }
}

