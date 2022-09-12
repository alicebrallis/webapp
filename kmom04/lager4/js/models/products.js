import m from "mithril";
import {baseUrl, apiKey} from "../vars.js";

let products = {
    url: `${baseUrl}/products`,
    currentProducts: [],
    getProducts: function() {
        return m.request({
            method: "GET",
            url: `${products.url}?api_key=${apiKey}`
        }).then(function(result) {
            console.log(result);
            products.currentProducts = result.data;
        });
    }
};


export default products;
