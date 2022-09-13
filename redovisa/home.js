/* global menu */
"use strict";

var home = (function () {
    var showHome = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Alice Olsson";

        var greeting = document.createElement("p");
        var timeOfDayGreeting = "Hej";
        var now = new Date();

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "Godkväll";
        }

        greeting.textContent = timeOfDayGreeting +
            ", jag heter Alice Olsson och läser just nu kursen webapp. ";

        var image = document.createElement("img");

        //image.src = "emilfolino.jpg";
        //image.alt = "Alice Olsson";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);
        window.mainContainer.appendChild(image);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("home");
    };

    return {
        showHome: showHome
    };
})(home);
