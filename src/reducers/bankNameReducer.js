import {
    POPULATE_ALL_BANK_NAMES,
    POPULATE_POPULAR_BANK_NAMES
} from '../actions/actions'

export function bankNameReducer(state = { allBanks : [], popularBanks : []}, action){
    switch ( action.type ) {

        case POPULATE_ALL_BANK_NAMES :
            return Object.assign({}, state, {
                popularBanks : state.popularBanks,
                allBanks : action.allBanks
            })
        
        case POPULATE_POPULAR_BANK_NAMES :
            return Object.assign({}, state, {
                allBanks : state.allBanks,
                popularBanks : action.popularBanks
            })
    
        default : return state
    }
}

