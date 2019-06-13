import {
    SHOW_BANK_NAME_SEARCH_MODAL,
    HIDE_BANK_NAME_SEARCH_MODAL,
    SHOW_CITY_NAME_SEARCH_MODAL,
    HIDE_CITY_NAME_SEARCH_MODAL,
} from '../actions/actions'

export function visibilityPropertiesReducer(state = { isShowingBankNameSearchModal: false, isShowingCityNameSearchModal : false }, action){
    switch ( action.type ) {

        case SHOW_BANK_NAME_SEARCH_MODAL :
            return Object.assign({}, state, {
                isShowingBankNameSearchModal : action.isShowingBankNameSearchModal,
                isShowingCityNameSearchModal : state.isShowingCityNameSearchModal
            })
        
        case HIDE_BANK_NAME_SEARCH_MODAL :
            return Object.assign({}, state, {
                isShowingBankNameSearchModal : action.isShowingBankNameSearchModal,
                isShowingCityNameSearchModal : state.isShowingCityNameSearchModal
            })

        case SHOW_CITY_NAME_SEARCH_MODAL :
            return Object.assign({}, state, {
                isShowingBankNameSearchModal : state.isShowingBankNameSearchModal,
                isShowingCityNameSearchModal : action.isShowingCityNameSearchModal
            })
        
        case HIDE_CITY_NAME_SEARCH_MODAL :
            return Object.assign({}, state, {
                isShowingBankNameSearchModal : state.isShowingBankNameSearchModal,
                isShowingCityNameSearchModal : action.isShowingCityNameSearchModal
            })

        default : return state
    }
}
