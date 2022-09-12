"use strict";

import order from "../src/order";
import { baseUrl, apikey } from "../src/vars";
import { menu } from "./menu.js";


var orderView = (function () {
    function drawOrdersView() {
        order.getOrders(drawElements);
    }

    function drawElements(orders) {
        window.mainContainer.innerHTML = "";

        var hej = document.createElement("h1");

        hej.className = "title";
        hej.textContent = "Alla ordrar";

        window.mainContainer.appendChild(hej);
        menu.showMenu("folder");

        var elements = orders.map(function(order_) {

            var element = document.createElement("p");

            element.innerHTML += "<br><b>Order-id: </b>"
            + order_.id + "<br><b>Namn: </b>"
            + order_.name + "<br><b>Adress: </b>"
            + order_.address + " " + "<br><b>Status: </b>"
            + order_.status + ", " + "<br><b>Status-id:</b>"
            + order_.status_id;


            element.addEventListener("click", function handleClick(event) {
                window.mainContainer.textContent = "";
                console.log(event.target);

                var tjena = document.createElement("h2");

                tjena.className = "title";
                tjena.textContent = "Plocklista";
                window.mainContainer.appendChild(tjena);

                for (let i = 0; i < order_.order_items.length; i++) {
                    element.innerHTML += "<br><b>Artikelnummer: </b>"
                    + order_.order_items[i].article_number + "<br><b> Produktid: </b>"
                    + order_.order_items[i].product_id + "<br><b> Namn: </b>"
                    + order_.order_items[i].name + "<br><b>Antal: </b>"
                    + order_.order_items[i].amount + "<br><b>I lager finns: </b>"
                    + order_.order_items[i].stock + "<br><b>Lokalisering: </b>"
                    + order_.order_items[i].location;
                    if (order_.order_items[i].amount < order_.order_items[i].stock)  {
                        var button = document.createElement("a");

                        button.className = "button";
                        button.textContent = "Ny order";
                        button.addEventListener("click", function handleClick(event) {
                            console.log(event.target);
                            button.textContent = "Packad";
                            updateOrder(order_);
                        });
                    }
                }
                window.mainContainer.appendChild(button);
                window.mainContainer.appendChild(element);
                return element;
            });
            window.mainContainer.appendChild(element);
        });
        console.log(elements);
    }

    function updateOrder(order_) {
        var newOrder = {
            id: order_.id,
            api_key: `${ apikey }`,
            status_id: 200
        };
        fetch(`${baseUrl}orders`, {
            body: JSON.stringify(newOrder),
            headers: {
                'content-type': 'application/json'
            },
            method: "PUT"
        })
            .then(function() {
                order_.order_items.map(function(ord) {
                    updateProduct(ord);
                });
            });
    }

    function updateProduct(ord) {
        var newProduct = {
            id: ord.product_id,
            amount: ord.amount,
            api_key: `${ apikey }`,
            stock: (ord.stock - ord.amount)
        };
        fetch(`${baseUrl}products`, {
            body: JSON.stringify(newProduct),
            headers: {
                'content-type': 'application/json'
            },
            method: "PUT"
        });
    }

    var publicAPI = {
        drawOrdersView: drawOrdersView
    };
    return publicAPI;
})();

export { orderView };
