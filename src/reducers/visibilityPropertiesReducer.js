import {
    SHOW_BANK_NAME_SEARCH_MODAL,
    HIDE_BANK_NAME_SEARCH_MODAL,
    SHOW_CITY_NAME_SEARCH_MODAL,
    HIDE_CITY_NAME_SEARCH_MODAL,
    SHOW_BRANCH_SEARCH_MODAL,
    HIDE_BRANCH_SEARCH_MODAL,
    RESET_VISIBILITY_PROPERTIES
} from '../actions/actions'

export function visibilityPropertiesReducer(state = { isShowingBankNameSearchModal: false, isShowingCityNameSearchModal : false,isShowingBranchSearchModal : false}, action){
    switch ( action.type ) {

        case SHOW_BANK_NAME_SEARCH_MODAL:
            return Object.assign({}, state, {
                isShowingBankNameSearchModal : action.isShowingBankNameSearchModal,
                isShowingCityNameSearchModal : state.isShowingCityNameSearchModal,
                isShowingBranchSearchModal : state.isShowingBranchSearchModal
            })
        
        case  HIDE_BANK_NAME_SEARCH_MODAL:
            return Object.assign({}, state, {
                isShowingBankNameSearchModal : action.isShowingBankNameSearchModal,
                isShowingCityNameSearchModal : state.isShowingCityNameSearchModal,
                isShowingBranchSearchModal : state.isShowingBranchSearchModal
            })
        
        case SHOW_CITY_NAME_SEARCH_MODAL :
            return Object.assign({}, state, {
                isShowingBankNameSearchModal : state.isShowingBankNameSearchModal,
                isShowingCityNameSearchModal : action.isShowingCityNameSearchModal,
                isShowingBranchSearchModal : state.isShowingBranchSearchModal
            
            })
        
        case HIDE_CITY_NAME_SEARCH_MODAL :
            return Object.assign({}, state, {
                isShowingBankNameSearchModal : state.isShowingBankNameSearchModal,
                isShowingCityNameSearchModal : action.isShowingCityNameSearchModal,
                isShowingBranchSearchModal : state.isShowingBranchSearchModal
            
            })
        
        case SHOW_BRANCH_SEARCH_MODAL :
            return Object.assign({}, state, {
                isShowingBankNameSearchModal : state.isShowingBankNameSearchModal,
                isShowingCityNameSearchModal : state.isShowingCityNameSearchModal,
                isShowingBranchSearchModal : action.isShowingBranchSearchModal
            })
        
        case  HIDE_BRANCH_SEARCH_MODAL :
            return Object.assign({}, state, {
                isShowingBankNameSearchModal : state.isShowingBankNameSearchModal,
                isShowingCityNameSearchModal : state.isShowingCityNameSearchModal,
                isShowingBranchSearchModal : action.isShowingBranchSearchModal
            })
        
        case RESET_VISIBILITY_PROPERTIES:
            return Object.assign({}, state, {
                isShowingBankNameSearchModal : null,
                isShowingCityNameSearchModal : null, 
                isShowingBranchSearchModal : null 
            })

        default : return state
    }
}
