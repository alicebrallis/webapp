// js/home.js

"use strict";

import { menu } from "./menu.js";


var home = {
    titleText: "Infinity Warehouses",
    description: "Where products goes to disappear",

    showHome: function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = home.titleText;

        var greeting = document.createElement("p");

        greeting.textContent = home.description;

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("home");
    }
};

export { home };

