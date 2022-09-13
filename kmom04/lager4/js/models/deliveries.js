import m from "mithril";
import {baseUrl, apiKey} from "../vars.js";

let deliveries = {
    url: `${baseUrl}/deliveries`,
    currentDeliveries: [],
    getDeliveries: async () => {
        console.log("getDeliveries -> deliveries.url = ", deliveries.url);
        console.log("getDeliveries -> apiKey = ", apiKey);

        const result = await m.request({
            method: "GET",
            url: `${deliveries.url}?api_key=${apiKey}`
        });

        deliveries.currentDeliveries = result.data;
    },
    save: () => {
        var delivery = {
            product_id: deliveries.currentDelivery.product_id,
            amount: deliveries.currentDelivery.amount,
            delivery_date: deliveries.currentDelivery.date,
            api_key: `${ apiKey }`,
            comment: deliveries.currentDelivery.comment
        };

        m.request({
            method: "POST",
            url: `${baseUrl}/deliveries`,
            body: delivery
        }).then(() => {
            updateStock(deliveries.currentDelivery);
        });
    },
    currentDelivery: {}
};

function updateStock() {
    m.request({
        method: "GET",
        url: `${baseUrl}/products/${deliveries.currentDelivery.product_id}?api_key=${apiKey}`
    }).then (function(result) {
        newStock(result.data);
    });
}

function newStock(prod) {
    let updatedProd = {
        api_key: `${ apiKey }`,
        stock: parseFloat(deliveries.currentDelivery.amount) + parseFloat(prod.stock)
    };

    m.request({
        method: "PUT",
        url: `${baseUrl}/products/:product_id`,
        body: updatedProd
    });
}

export default deliveries;

