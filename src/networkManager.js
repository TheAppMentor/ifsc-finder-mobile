var rp  = require('request-promise')
var Promise = require('bluebird')

let baseURL = "http://www.localhost:3000"

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

