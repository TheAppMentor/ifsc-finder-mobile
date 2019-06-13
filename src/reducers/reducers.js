import {combineReducers } from 'redux'
import {bankNameReducer} from '../reducers/bankNameReducer'
import {userSelectionReducer} from '../reducers/userSelectionReducer'
import {cityNameReducer} from '../reducers/cityNameReducer'
import {visibilityPropertiesReducer} from '../reducers/visibilityPropertiesReducer'

//import storage from 'redux-persist/lib/storage'

const appReducer = combineReducers({
    bankNameReducer,
    cityNameReducer,
    userSelectionReducer,
    visibilityPropertiesReducer
})

//As suggested by Dan himself.
//https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer 

