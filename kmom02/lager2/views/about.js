/* global */

"use strict";

import { menu } from "./menu.js";
var about = {
    showProducts: function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Lager";

        var header = document.createElement("header");

        header.textContent = "Lagerförteckning";

        menu.showMenu("free_breakfast");

        fetch("https://lager.emilfolino.se/v2/products?api_key=853d263ff8dc3eaffc1091419e7111fc")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.data.forEach(function(product) {
                    console.log(product);

                    let prodElement = document.createElement("ul");

                    prodElement.className = "list";
                    prodElement.innerHTML = "<p><b>Beskrivning</b></p>" + " " +
                    `${product.name}` + "<br /><p><b>Antal</b></p>" + `${product.stock}`;

                    prodElement.addEventListener("click", function handleClick(event) {
                        window.mainContainer.innerHTML = "";
                        console.log(event.target);
                        console.log(product.description);
                        let productlager = document.createElement("h6");

                        productlager.innerHTML = `${product.description} ${product.specifiers}`;
                        window.mainContainer.appendChild(title);
                        window.mainContainer.appendChild(header);
                        window.mainContainer.appendChild(productlager);
                    });
                    window.mainContainer.appendChild(prodElement);
                });
            });
        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(header);
        window.rootElement.appendChild(window.mainContainer);
    }
};


export { about };
