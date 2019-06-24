import {
    POPULATE_ALL_CITY_NAMES,
    POPULATE_LOCATION_FOR_USER_SELECTED_BANK 
} from '../actions/actions'

export function cityNameReducer(state = { allCities : [], allLocationsForSelectedBank : [] }, action){
    switch ( action.type ) {

        case POPULATE_ALL_CITY_NAMES :
            return Object.assign({}, state, {
                allCities : action.allCities,
                allLocationsForSelectedBank  : state.allLocationsForSelectedBank  
            })

        case POPULATE_LOCATION_FOR_USER_SELECTED_BANK :
            return Object.assign({}, state, {
                allCities : state.allCities,
                allLocationsForSelectedBank : action.allLocationsForSelectedBank    
            })

        default : return state
    }
}

