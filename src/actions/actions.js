export const USER_SELECTED_BANK = "USER_SELECTED_BANK" 
export const USER_SELECTED_CITY = "USER_SELECTED_CITY" 
export const POPULATE_ALL_BANK_NAMES = "POPULATE_ALL_BANK_NAMES" 
export const POPULATE_ALL_CITY_NAMES = "POPULATE_ALL_CITY_NAMES" 
export const POPULATE_POPULAR_BANK_NAMES = "POPULATE_POPULAR_BANK_NAMES" 
export const SHOW_BANK_NAME_SEARCH_MODAL= "SHOW_BANK_NAME_SEARCH_MODAL" 
export const HIDE_BANK_NAME_SEARCH_MODAL= "HIDE_BANK_NAME_SEARCH_MODAL" 

export const SHOW_CITY_NAME_SEARCH_MODAL= "SHOW_CITY_NAME_SEARCH_MODAL" 
export const HIDE_CITY_NAME_SEARCH_MODAL= "HIDE_CITY_NAME_SEARCH_MODAL" 

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

export function populateAllBankNames(allBanks) {
    return {
        type : POPULATE_ALL_BANK_NAMES,
        allBanks : allBanks 
    }
}

export function populatePopularBankNames(popularBanks) {
    return {
        type : POPULATE_POPULAR_BANK_NAMES,
        popularBanks : popularBanks 
    }
}

export function populateAllCityNames(allCities) {
    return {
        type : POPULATE_ALL_CITY_NAMES,
        allCities : allCities  
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


