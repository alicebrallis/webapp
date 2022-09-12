/* global */


"use strict";

import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

(function () {
    window.rootElement = document.getElementById("root");
    window.mainContainer = document.createElement("main");
    window.mainContainer.className = "container";
    window.navigation = document.createElement("nav");
    window.mainContainer.className = "title";
    window.navigation.className = "header";
    window.navigation.className = "bottom-nav";

    home.showHome();
    menu.showMenu();
    about.showProducts();
})();



