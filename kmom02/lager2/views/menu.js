"use strict";

import { home } from "./home.js";
import { about } from "./about.js";
import { orderView } from "./orderView.js";

var menu = {
    showMenu: function (selected) {
        window.navigation.innerHTML = "";

        var navElements = [
            { name: "Home", class: "home", nav: home.showHome},
            { name: "Warehouse", class: "free_breakfast", nav: about.showProducts},
            { name: "Orders", class: "folder", nav: orderView.drawOrdersView}
        ];

        navElements.forEach(function (element) {
            var navElement = document.createElement("a");

            if (selected === element.class) {
                navElement.className = "active";
            }

            navElement.addEventListener("click", element.nav);

            var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;
            navElement.appendChild(icon);

            var text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);

            window.navigation.appendChild(navElement);
        });
        window.root.appendChild(navigation);
    }
};

export { menu };
