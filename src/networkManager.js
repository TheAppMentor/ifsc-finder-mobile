var rp  = require('request-promise')
var Promise = require('bluebird')

let baseURL = "http://localhost:3000"

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


export function fetchAllLocationsForBank(bankName){
    return new Promise((resolve,reject) => {

        var options = { method: 'GET',
            // http://localhost:3000/getLocationList/?bankName=HDFC%20BANK%20LTD&searchInput=BA
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
            // http://localhost:3000/getLocationList/?bankName=HDFC%20BANK%20LTD&searchInput=BA
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
