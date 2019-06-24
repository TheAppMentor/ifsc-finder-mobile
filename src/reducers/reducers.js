import {combineReducers } from 'redux'
import {bankNameReducer} from '../reducers/bankNameReducer'
import {bankDetailsReducer} from '../reducers/bankDetailsReducer'
import {userSelectionReducer} from '../reducers/userSelectionReducer'
import {cityNameReducer} from '../reducers/cityNameReducer'
import {branchReducer} from '../reducers/branchReducer'
import {visibilityPropertiesReducer} from '../reducers/visibilityPropertiesReducer'

//import storage from 'redux-persist/lib/storage'

const appReducer = combineReducers({
    bankDetailsReducer,
    bankNameReducer,
    cityNameReducer,
    branchReducer,
    userSelectionReducer,
    visibilityPropertiesReducer
})

//As suggested by Dan himself.
//https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer 

