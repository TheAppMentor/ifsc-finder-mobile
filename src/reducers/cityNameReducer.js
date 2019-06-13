import {
    POPULATE_ALL_CITY_NAMES
} from '../actions/actions'

export function cityNameReducer(state = { allCities : [] }, action){
    switch ( action.type ) {

        case POPULATE_ALL_CITY_NAMES :
            return Object.assign({}, state, {
                allCities : action.allCities
            })
    
        default : return state
    }
}

