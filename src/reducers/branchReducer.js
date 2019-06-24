import {
   POPULATE_ALL_BRANCHES_FOR_SELECTED_BANK_AND_CITY 
} from '../actions/actions'

export function branchReducer(state = { allBranchesForSelectedBankSelectedCity : null }, action){
    switch ( action.type ) {

        case POPULATE_ALL_BRANCHES_FOR_SELECTED_BANK_AND_CITY:
            return Object.assign({}, state, {
                allBranchesForSelectedBankSelectedCity: action.allBranchesForSelectedBankSelectedCity,
            })

        default : return state
    }
}
