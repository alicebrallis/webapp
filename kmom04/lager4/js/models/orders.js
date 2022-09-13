import m from "mithril";
import {baseUrl, apiKey} from "../vars.js";
import invoicesModel from "../models/invoices";


let orders = {
    currentOrders: [],
    getOrders: function () {
        return m.request({
            method: "GET",
            url: `${baseUrl}/orders?api_key=${apiKey}`
        }).then(function (result) {
            orders.currentOrders = result.data;
        });
    },
    updateOrder: function () {
        orders.currentOrder = orders.currentOrder != undefined ?
            orders.currentOrder : 7577;
        return m.request({
            method: "GET",
            url: `${baseUrl}/orders/${orders.currentOrder}?api_key=${apiKey}`
        }).then(function (result) {
            invoicesModel.getInvoices(result.data);
            orders.newStockOrder(result.data);
        });
    },
    newStockOrder: function (ord) {
        return m.request({
            url: `${baseUrl}/orders`,
            method: "PUT",
            body: {
                id: ord.id,
                name: ord.name,
                api_key: apiKey,
                status_id: 600
            },
            headers: {
                "content-type": "application/json"
            },
        });
    }};




export default orders;

