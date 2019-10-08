var rp  = require('request-promise')
var Promise = require('bluebird')

let baseURL = "http://localhost:3000"
//let baseURL = "https://www.ifsc.today"

// For some reason .. on heroku.. NODE_ENV.. is not set to production.
if (process.env.REACT_APP_IS_HEROKU === "TRUE"){
    baseURL = "https://www.ifsc.today" 
}

if (process.env.NODE_ENV === "production") {
    //baseURL =  "https://survey360.cfapps.sap.hana.ondemand.com"
    if (process.env.REACT_APP_IS_HEROKU === "TRUE") {
        baseURL = "https://www.ifsc.today" 
    }
}

export function fetchAllBanks(){
    return new Promise((resolve,reject) => {
        
        var options = { method: 'GET',
            url: baseURL + '/getBanks/?q=',
            headers: 
            { 'cache-control': 'no-cache' },
            json : true,
        };

        rp(options)
            .then((parsedBody) => {
                resolve(parsedBody) 
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export function fetchAllBanksForLocation(cityName){
    
    return new Promise((resolve,reject) => {
        var options = { method: 'GET',
            url: baseURL + '/getAllBanksByLocation?searchInput=' + cityName,
            headers: 
            { 'cache-control': 'no-cache',
                'Content-Type': 'application/json' } 
        };

        rp(options)
            .then((parsedBody) => {
                resolve(parsedBody) 
            })
            .catch((err) => {
                reject(err)
            })
    })
}


export function fetchAllLocationsForBank(bankName){
    return new Promise((resolve,reject) => {

        var options = { method: 'GET',
            url: baseURL + '/getLocationList/?bankName=' + bankName + "&searchInput=",
            headers: 
            { 'cache-control': 'no-cache' },
            json : true,
        };

        rp(options)
            .then((parsedBody) => {
                resolve(parsedBody) 
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export function fetchBankDetailsForUserSelection(bankName,cityName,branchName){
    return new Promise((resolve,reject) => {

        var options = { method: 'GET',
            url: baseURL + '/getBranchDetailsJSON/?bankName=' + bankName + "&cityName=" + cityName + "&branchName=" + branchName,
            headers: 
            { 'cache-control': 'no-cache' },
            json : true,
        };

        rp(options)
            .then((parsedBody) => {
                resolve(parsedBody) 
            })
            .catch((err) => {
                reject(err)
            })
    })
}




export function fetchAllLocationForSelectedBank(bankName){
    return new Promise((resolve,reject) => {

        if (bankName === null){
            return
        }  

        let urlToFetch = baseURL + '/getAllKnownCities/?searchInput=' 
        if (bankName !== null) {
            urlToFetch = baseURL + '/getLocationList/?bankName=' + bankName + "&searchInput=" 
        } 
        
        var options = { method: 'GET',
            url: urlToFetch, 
            headers: { 'cache-control': 'no-cache' },
            json : true,
        };

        rp(options)
            .then((parsedBody) => {
                resolve(parsedBody) 
            })
            .catch((err) => {
                reject(err)
            })
    });
}



export function fetchAllBranchesForSelectedCitySelectedLocation(bankName,cityName){
    return new Promise((resolve,reject) => {

        if (bankName === null){
            return
        } 
        
        let urlToFetch = baseURL + '/getAllKnownBranches/?searchInput=' 
        if (bankName !== null) {
            urlToFetch = baseURL + '/getBranchList/?bankName=' + bankName 
        } 
        if (bankName !== null && cityName !== null ) {
            urlToFetch = baseURL + '/getBranchList/?bankName=' + bankName + '&locationName=' + cityName + "&searchInput=" 
        } 


        var options = { method: 'GET',
            url: urlToFetch, 
            headers: { 'cache-control': 'no-cache' },
            json : true,
        };

        rp(options)
            .then((parsedBody) => {
                resolve(parsedBody) 
            })
            .catch((err) => {
                reject(err)
            })
    })
}

