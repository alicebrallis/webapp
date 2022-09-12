/* global menu */
"use strict";


var home = (function () {
    var showHome = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Välkommen";

        var greeting = document.createElement("p");

        greeting.textContent = "Hej, denna mobilapplikation skapad" + "\n" +
        "med hjälp utav ramverken HTML5, CSS3 och JavaScript. ";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);
        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("home");
    };

    return {
        showHome: showHome
    };
})(home);


