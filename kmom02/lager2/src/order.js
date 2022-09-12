"use strict";

import { baseUrl, apikey } from "./vars";

var order = (function() {
    function getOrders(callback) {
        fetch(`${baseUrl}orders?api_key=${apikey}`)
            .then(function (result) {
                return result.json();
            })
            .then (function (result) {
                console.log(result);
                if (callback) {
                    callback(result.data);
                }
            });
    }

    var publicAPI = {

        getOrders: getOrders
    };
    return publicAPI;
})();

export default order;
