export const USER_SELECTED_BANK = "USER_SELECTED_BANK" 
export const USER_SELECTED_CITY = "USER_SELECTED_CITY" 
export const USER_SELECTED_BRANCH = "USER_SELECTED_BRANCH" 

export const POPULATE_ALL_BANK_NAMES = "POPULATE_ALL_BANK_NAMES" 
export const POPULATE_ALL_CITY_NAMES = "POPULATE_ALL_CITY_NAMES" 
export const POPULATE_POPULAR_BANK_NAMES = "POPULATE_POPULAR_BANK_NAMES" 
export const POPULATE_LOCATION_FOR_USER_SELECTED_BANK= "POPULATE_LOCATION_FOR_USER_SELECTED_BANK" 

export const SHOW_BANK_NAME_SEARCH_MODAL= "SHOW_BANK_NAME_SEARCH_MODAL" 
export const HIDE_BANK_NAME_SEARCH_MODAL= "HIDE_BANK_NAME_SEARCH_MODAL" 

export const SHOW_CITY_NAME_SEARCH_MODAL= "SHOW_CITY_NAME_SEARCH_MODAL" 
export const HIDE_CITY_NAME_SEARCH_MODAL= "HIDE_CITY_NAME_SEARCH_MODAL" 

export const SHOW_BRANCH_SEARCH_MODAL= "SHOW_BRANCH_SEARCH_MODAL" 
export const HIDE_BRANCH_SEARCH_MODAL= "HIDE_BRANCH_SEARCH_MODAL" 

export const POPULATE_ALL_BANK_DETAILS = "POPULATE_ALL_BANK_DETAILS" 

export const POPULATE_ALL_BRANCHES_FOR_SELECTED_BANK_AND_CITY = "POPULATE_ALL_BRANCHES_FOR_SELECTED_BANK_AND_CITY" 

export const POPULATE_FINAL_BANK_FETCHED = "POPULATE_FINAL_BANK_FETCHED" 

export const RESET_USER_SELECTION = "RESET_USER_SELECTION" 
export const RESET_VISIBILITY_PROPERTIES = "RESET_VISIBILITY_PROPERTIES" 

export function resetUserSelection() {
    return {
        type : RESET_USER_SELECTION
    }
}

export function resetVisibilityProperties() {
    return {
        type : RESET_VISIBILITY_PROPERTIES
    }
}

export function userSelectedBank(bankName) {
    return {
        type : USER_SELECTED_BANK,
        bankName : bankName 
    }
}

export function userSelectedCity(cityName) {
    return {
        type : USER_SELECTED_CITY,
        selectedCity : cityName 
    }
}

export function userSelectedBranch(selectedBranch) {
    return {
        type : USER_SELECTED_BRANCH,
        selectedBranch : selectedBranch 
    }
}

export function populateFinalFetchedBankBranch(finalBankFetched) {
    return {
        type : POPULATE_FINAL_BANK_FETCHED,
        finalBankFetched : finalBankFetched 
    }
}

export function populateAllBankNames(allBanks) {
    return {
        type : POPULATE_ALL_BANK_NAMES,
        allBanks : allBanks 
    }
}

export function populateAllBankDetails(allBankDetails) {
    return {
        type : POPULATE_ALL_BANK_DETAILS,
        allBankDetails : allBankDetails
    }
}

export function populatePopularBankNames(popularBanks) {
    return {
        type : POPULATE_POPULAR_BANK_NAMES,
        popularBanks : popularBanks 
    }
}

export function populateLocationForSelectedBank(allLocationsForSelectedBank) {
    return {
        type : POPULATE_LOCATION_FOR_USER_SELECTED_BANK,
        allLocationsForSelectedBank : allLocationsForSelectedBank 
    }
}

export function populateAllCityNames(allCities) {
    return {
        type : POPULATE_ALL_CITY_NAMES,
        allCities : allCities  
    }
}

export function populateBranchesForSelectedCitySelectedLocation(allBranchesForSelectedBankSelectedCity) {
    return {
        type : POPULATE_ALL_BRANCHES_FOR_SELECTED_BANK_AND_CITY,
        allBranchesForSelectedBankSelectedCity:allBranchesForSelectedBankSelectedCity 
    }
}

export function showBankNameSearchModal() {
    return {
        type : SHOW_BANK_NAME_SEARCH_MODAL,
        isShowingBankNameSearchModal: true 
    }
}

export function hideBankNameSearchModal() {
    return {
        type : HIDE_BANK_NAME_SEARCH_MODAL,
        isShowingBankNameSearchModal: false 
    }
}

export function showCityNameSearchModal() {
    return {
        type : SHOW_CITY_NAME_SEARCH_MODAL,
        isShowingCityNameSearchModal: true 
    }
}

export function hideCityNameSearchModal() {
    return {
        type : HIDE_CITY_NAME_SEARCH_MODAL,
        isShowingCityNameSearchModal: false 
    }
}

export function showBranchNameSearchModal() {
    return {
        type : SHOW_BRANCH_SEARCH_MODAL,
        isShowingBranchSearchModal : true 
    }
}

export function hideBranchNameSearchModal() {
    return {
        type : HIDE_BRANCH_SEARCH_MODAL,
        isShowingBranchSearchModal : false 
    }
}
