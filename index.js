"use strict";

let axios = require('axios');

class Airchains {
    /**
     * Creates a new Airchains instance
     * @param {string} authKey Authentication key
     * @param {string} authPin Authentication pin
     */

    constructor(authKey, authPin) {
        this.authKey = authKey;
        this.authPin = authPin;
    }

    /**
     * Returns the base URL for Airchains api call
     * @returns {string} Base URL for Airchains api call
     */

    static getBaseURL() {
        return "https://vayu-api.com/0x/public-api/v2/index.php/";
    }

    collection(table, fields, rpc, callback) {
            var request_params = ({
                "table_name": table,
                "rpc_net": rpc,
                "contract_fields": fields.join(",")
            });
            var jsonData = JSON.stringify(request_params);
        return Airchains.doRequest('collection/create', jsonData, this.authKey, this.authPin, callback);
    }

    save(contract, data, callback) {
            
        var jsonData = JSON.stringify(data);
        return Airchains.doRequest('transaction/create/'+contract, jsonData, this.authKey, this.authPin, callback);
    }

    find(contract,data, callback) {
            var jsonData = JSON.stringify(data);
        return Airchains.doRequest('transaction/filter/'+contract, jsonData, this.authKey, this.authPin, callback);
    }


    static doRequest (path, params, key, pin,  callback) {

        if (typeof params === 'function') {
            callback = params;
            params = {};
        }
        else if (callback === undefined && this.allow_promise) {
            promise = true;
        }

        let url = Airchains.getBaseURL() + "" + path
        
        axios({
            method: 'post', //you can set what request you want to be
            url: url,
            data: params,
            headers: {
                'Content-Type': 'application/json',
                'authkey': key,
                'authpin': pin
            }    
        })
        .then(function (response){
            callback(null, response.data);
        })
        .catch(function (error){
            return callback(new Error(error.response.data.message+" : "+error.response.data.description), null);
        });

    }

}
module.exports = Airchains