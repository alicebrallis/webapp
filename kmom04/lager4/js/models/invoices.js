import m from "mithril";
import {baseUrl, apiKey, token} from "../vars.js";
import auth from "./auth.js";
import orders from "./orders.js";


let invoicesModel = {
    url: `${baseUrl}/invoices`,
    invoices: [],
    getInvoices: function() {
        m.request({
            url: `${invoicesModel.url}?api_key=${apiKey}`,
            method: "GET",
            headers: {
                'x-access-token': auth.token
            }
        }).then(function(result) {
            invoicesModel.invoices = result.data
        }).catch(error => {
            console.log(error.message)
            console.log(baseUrl)
            console.log(token)
            console.log(apiKey)

        });
    },
    createInvoice: function (orders) {
        return m.request({
            method: "POST",
            url: `${baseUrl}/orders`,
            body: orders.updateOrder
        })
    }
};



export default invoicesModel;