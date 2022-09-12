/* global menu */

"use strict";


var report = (function () {
    var showLager = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Alla produkter";

        var header = document.createElement("header");

        header.textContent = "Produktspecikationer";

        menu.showMenu("folder");

        fetch("https://lager.emilfolino.se/v2/products?api_key=853d263ff8dc3eaffc1091419e7111fc")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.data.forEach(function(product) {
                    console.log(product);

                    let prodElement = document.createElement("p");

                    prodElement.innerHTML = `${product.description}${product.specifiers}`;

                    window.mainContainer.appendChild(prodElement);
                });
            });
        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(header);
        window.rootElement.appendChild(window.mainContainer);
    };

    return {
        showLager: showLager,
    };
})(report);
