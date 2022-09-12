/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vars */ "./src/vars.js");




var order = (function() {
    function getOrders(callback) {
        fetch(`${_vars__WEBPACK_IMPORTED_MODULE_0__.baseUrl}orders?api_key=${_vars__WEBPACK_IMPORTED_MODULE_0__.apikey}`)
            .then(function (result) {
                return result.json();
            })
            .then (function (result) {
                console.log(result);
                if (callback) {
                    callback(result.data);
                }
            });
    }

    var publicAPI = {
        getOrders: getOrders
    };
    return publicAPI;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (order);


/***/ }),

/***/ "./src/vars.js":
/*!*********************!*\
  !*** ./src/vars.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseUrl": () => (/* binding */ baseUrl),
/* harmony export */   "apikey": () => (/* binding */ apikey)
/* harmony export */ });


const baseUrl = "https://lager.emilfolino.se/v2/";
const apikey = "853d263ff8dc3eaffc1091419e7111fc";





/***/ }),

/***/ "./views/about.js":
/*!************************!*\
  !*** ./views/about.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./views/menu.js");
/* global */




var about = {
    showProducts: function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Lager";

        var header = document.createElement("header");

        header.textContent = "Lagerförteckning";

        _menu_js__WEBPACK_IMPORTED_MODULE_0__.menu.showMenu("free_breakfast");

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





/***/ }),

/***/ "./views/home.js":
/*!***********************!*\
  !*** ./views/home.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./views/menu.js");
// js/home.js






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

        _menu_js__WEBPACK_IMPORTED_MODULE_0__.menu.showMenu("home");
    }
};





/***/ }),

/***/ "./views/menu.js":
/*!***********************!*\
  !*** ./views/menu.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./views/home.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ "./views/about.js");
/* harmony import */ var _orderView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderView.js */ "./views/orderView.js");






var menu = {
    showMenu: function (selected) {
        window.navigation.innerHTML = "";

        var navElements = [
            { name: "Home", class: "home", nav: _home_js__WEBPACK_IMPORTED_MODULE_0__.home.showHome},
            { name: "Warehouse", class: "free_breakfast", nav: _about_js__WEBPACK_IMPORTED_MODULE_1__.about.showProducts},
            { name: "Orders", class: "folder", nav: _orderView_js__WEBPACK_IMPORTED_MODULE_2__.orderView.drawOrdersView}
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




/***/ }),

/***/ "./views/orderView.js":
/*!****************************!*\
  !*** ./views/orderView.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "orderView": () => (/* binding */ orderView)
/* harmony export */ });
/* harmony import */ var _src_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/order */ "./src/order.js");
/* harmony import */ var _src_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/vars */ "./src/vars.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./views/menu.js");







var orderView = (function () {
    function drawOrdersView() {
        _src_order__WEBPACK_IMPORTED_MODULE_0__.default.getOrders(drawElements);
    }

    function drawElements(orders) {
        window.mainContainer.innerHTML = "";

        var hej = document.createElement("h1");

        hej.className = "title";
        hej.textContent = "Alla ordrar";

        window.mainContainer.appendChild(hej);
        _menu_js__WEBPACK_IMPORTED_MODULE_2__.menu.showMenu("folder");

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
            api_key: `${ _src_vars__WEBPACK_IMPORTED_MODULE_1__.apikey }`,
            status_id: 200
        };
        fetch(`${_src_vars__WEBPACK_IMPORTED_MODULE_1__.baseUrl}orders`, {
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
            api_key: `${ _src_vars__WEBPACK_IMPORTED_MODULE_1__.apikey }`,
            stock: (ord.stock - ord.amount)
        };
        fetch(`${_src_vars__WEBPACK_IMPORTED_MODULE_1__.baseUrl}products`, {
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./views/main.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./views/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./views/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./views/about.js");
/* global */








(function () {
    window.rootElement = document.getElementById("root");
    window.mainContainer = document.createElement("main");
    window.mainContainer.className = "container";
    window.navigation = document.createElement("nav");
    window.mainContainer.className = "title";
    window.navigation.className = "header";
    window.navigation.className = "bottom-nav";

    _home_js__WEBPACK_IMPORTED_MODULE_0__.home.showHome();
    _menu_js__WEBPACK_IMPORTED_MODULE_1__.menu.showMenu();
    _about_js__WEBPACK_IMPORTED_MODULE_2__.about.showProducts();
})();




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWdlcjIvLi9zcmMvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vbGFnZXIyLy4vc3JjL3ZhcnMuanMiLCJ3ZWJwYWNrOi8vbGFnZXIyLy4vdmlld3MvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vbGFnZXIyLy4vdmlld3MvaG9tZS5qcyIsIndlYnBhY2s6Ly9sYWdlcjIvLi92aWV3cy9tZW51LmpzIiwid2VicGFjazovL2xhZ2VyMi8uL3ZpZXdzL29yZGVyVmlldy5qcyIsIndlYnBhY2s6Ly9sYWdlcjIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGFnZXIyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sYWdlcjIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sYWdlcjIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sYWdlcjIvLi92aWV3cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFhOztBQUU0Qjs7QUFFekM7QUFDQTtBQUNBLGlCQUFpQiwwQ0FBTyxDQUFDLGlCQUFpQix5Q0FBTSxDQUFDO0FBQ2pEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJSOztBQUViO0FBQ0E7O0FBRXlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0x6Qjs7QUFFYTs7QUFFb0I7QUFDakM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsUUFBUSxtREFBYTs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYSxxQ0FBcUMsY0FBYzs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Qsb0JBQW9CLEdBQUcsbUJBQW1CO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR2lCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdERqQjs7QUFFYTs7QUFFb0I7OztBQUdqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsUUFBUSxtREFBYTtBQUNyQjtBQUNBOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDSDs7QUFFb0I7QUFDRTtBQUNROztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLG1DQUFtQyxtREFBYSxDQUFDO0FBQzlELGFBQWEsa0RBQWtELHlEQUFrQixDQUFDO0FBQ2xGLGFBQWEsdUNBQXVDLG1FQUF3QjtBQUM1RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDSDs7QUFFb0I7QUFDYTtBQUNiOzs7QUFHakM7QUFDQTtBQUNBLFFBQVEseURBQWU7QUFDdkI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxtREFBYTs7QUFFckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtCQUErQiwrQkFBK0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLENBQUMsNkNBQU0sRUFBRTtBQUNqQztBQUNBO0FBQ0EsaUJBQWlCLDhDQUFPLENBQUM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsQ0FBQyw2Q0FBTSxFQUFFO0FBQ2pDO0FBQ0E7QUFDQSxpQkFBaUIsOENBQU8sQ0FBQztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVvQjs7Ozs7OztVQ3BIckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05BOzs7QUFHYTs7QUFFb0I7QUFDQTtBQUNFOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksbURBQWE7QUFDakIsSUFBSSxtREFBYTtBQUNqQixJQUFJLHlEQUFrQjtBQUN0QixDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBiYXNlVXJsLCBhcGlrZXkgfSBmcm9tIFwiLi92YXJzXCI7XG5cbnZhciBvcmRlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBnZXRPcmRlcnMoY2FsbGJhY2spIHtcbiAgICAgICAgZmV0Y2goYCR7YmFzZVVybH1vcmRlcnM/YXBpX2tleT0ke2FwaWtleX1gKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuIChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBwdWJsaWNBUEkgPSB7XG4gICAgICAgIGdldE9yZGVyczogZ2V0T3JkZXJzXG4gICAgfTtcbiAgICByZXR1cm4gcHVibGljQVBJO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgb3JkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9sYWdlci5lbWlsZm9saW5vLnNlL3YyL1wiO1xuY29uc3QgYXBpa2V5ID0gXCI4NTNkMjYzZmY4ZGMzZWFmZmMxMDkxNDE5ZTcxMTFmY1wiO1xuXG5leHBvcnQge2Jhc2VVcmwsIGFwaWtleX07XG5cbiIsIi8qIGdsb2JhbCAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcbnZhciBhYm91dCA9IHtcbiAgICBzaG93UHJvZHVjdHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTGFnZXJcIjtcblxuICAgICAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkxhZ2VyZsO2cnRlY2tuaW5nXCI7XG5cbiAgICAgICAgbWVudS5zaG93TWVudShcImZyZWVfYnJlYWtmYXN0XCIpO1xuXG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9sYWdlci5lbWlsZm9saW5vLnNlL3YyL3Byb2R1Y3RzP2FwaV9rZXk9ODUzZDI2M2ZmOGRjM2VhZmZjMTA5MTQxOWU3MTExZmNcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb2RFbGVtZW50LmNsYXNzTmFtZSA9IFwibGlzdFwiO1xuICAgICAgICAgICAgICAgICAgICBwcm9kRWxlbWVudC5pbm5lckhUTUwgPSBcIjxwPjxiPkJlc2tyaXZuaW5nPC9iPjwvcD5cIiArIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgYCR7cHJvZHVjdC5uYW1lfWAgKyBcIjxiciAvPjxwPjxiPkFudGFsPC9iPjwvcD5cIiArIGAke3Byb2R1Y3Quc3RvY2t9YDtcblxuICAgICAgICAgICAgICAgICAgICBwcm9kRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdC5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdGxhZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0bGFnZXIuaW5uZXJIVE1MID0gYCR7cHJvZHVjdC5kZXNjcmlwdGlvbn0gJHtwcm9kdWN0LnNwZWNpZmllcnN9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0bGFnZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgd2luZG93LnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHdpbmRvdy5tYWluQ29udGFpbmVyKTtcbiAgICB9XG59O1xuXG5cbmV4cG9ydCB7IGFib3V0IH07XG4iLCIvLyBqcy9ob21lLmpzXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuXG5cbnZhciBob21lID0ge1xuICAgIHRpdGxlVGV4dDogXCJJbmZpbml0eSBXYXJlaG91c2VzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2hlcmUgcHJvZHVjdHMgZ29lcyB0byBkaXNhcHBlYXJcIixcblxuICAgIHNob3dIb21lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gICAgICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBob21lLnRpdGxlVGV4dDtcblxuICAgICAgICB2YXIgZ3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgICAgICBncmVldGluZy50ZXh0Q29udGVudCA9IGhvbWUuZGVzY3JpcHRpb247XG5cbiAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChncmVldGluZyk7XG5cbiAgICAgICAgd2luZG93LnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHdpbmRvdy5tYWluQ29udGFpbmVyKTtcblxuICAgICAgICBtZW51LnNob3dNZW51KFwiaG9tZVwiKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBob21lIH07XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgYWJvdXQgfSBmcm9tIFwiLi9hYm91dC5qc1wiO1xuaW1wb3J0IHsgb3JkZXJWaWV3IH0gZnJvbSBcIi4vb3JkZXJWaWV3LmpzXCI7XG5cbnZhciBtZW51ID0ge1xuICAgIHNob3dNZW51OiBmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgd2luZG93Lm5hdmlnYXRpb24uaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICB2YXIgbmF2RWxlbWVudHMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiSG9tZVwiLCBjbGFzczogXCJob21lXCIsIG5hdjogaG9tZS5zaG93SG9tZX0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiV2FyZWhvdXNlXCIsIGNsYXNzOiBcImZyZWVfYnJlYWtmYXN0XCIsIG5hdjogYWJvdXQuc2hvd1Byb2R1Y3RzfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJPcmRlcnNcIiwgY2xhc3M6IFwiZm9sZGVyXCIsIG5hdjogb3JkZXJWaWV3LmRyYXdPcmRlcnNWaWV3fVxuICAgICAgICBdO1xuXG4gICAgICAgIG5hdkVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBuYXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gZWxlbWVudC5jbGFzcykge1xuICAgICAgICAgICAgICAgIG5hdkVsZW1lbnQuY2xhc3NOYW1lID0gXCJhY3RpdmVcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmF2RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWxlbWVudC5uYXYpO1xuXG4gICAgICAgICAgICB2YXIgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuXG4gICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnNcIjtcbiAgICAgICAgICAgIGljb24udGV4dENvbnRlbnQgPSBlbGVtZW50LmNsYXNzO1xuICAgICAgICAgICAgbmF2RWxlbWVudC5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICAgICAgdmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICAgICAgdGV4dC5jbGFzc05hbWUgPSBcImljb24tdGV4dFwiO1xuICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgIG5hdkVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5uYXZpZ2F0aW9uLmFwcGVuZENoaWxkKG5hdkVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LnJvb3QuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbik7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgbWVudSB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvcmRlciBmcm9tIFwiLi4vc3JjL29yZGVyXCI7XG5pbXBvcnQgeyBiYXNlVXJsLCBhcGlrZXkgfSBmcm9tIFwiLi4vc3JjL3ZhcnNcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cblxudmFyIG9yZGVyVmlldyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZHJhd09yZGVyc1ZpZXcoKSB7XG4gICAgICAgIG9yZGVyLmdldE9yZGVycyhkcmF3RWxlbWVudHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYXdFbGVtZW50cyhvcmRlcnMpIHtcbiAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICB2YXIgaGVqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gICAgICAgIGhlai5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG4gICAgICAgIGhlai50ZXh0Q29udGVudCA9IFwiQWxsYSBvcmRyYXJcIjtcblxuICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWopO1xuICAgICAgICBtZW51LnNob3dNZW51KFwiZm9sZGVyXCIpO1xuXG4gICAgICAgIHZhciBlbGVtZW50cyA9IG9yZGVycy5tYXAoZnVuY3Rpb24ob3JkZXJfKSB7XG5cbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IFwiPGJyPjxiPk9yZGVyLWlkOiA8L2I+XCJcbiAgICAgICAgICAgICsgb3JkZXJfLmlkICsgXCI8YnI+PGI+TmFtbjogPC9iPlwiXG4gICAgICAgICAgICArIG9yZGVyXy5uYW1lICsgXCI8YnI+PGI+QWRyZXNzOiA8L2I+XCJcbiAgICAgICAgICAgICsgb3JkZXJfLmFkZHJlc3MgKyBcIiBcIiArIFwiPGJyPjxiPlN0YXR1czogPC9iPlwiXG4gICAgICAgICAgICArIG9yZGVyXy5zdGF0dXMgKyBcIiwgXCIgKyBcIjxicj48Yj5TdGF0dXMtaWQ6PC9iPlwiXG4gICAgICAgICAgICArIG9yZGVyXy5zdGF0dXNfaWQ7XG5cblxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIHZhciB0amVuYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblxuICAgICAgICAgICAgICAgIHRqZW5hLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgICAgICAgICAgICAgICB0amVuYS50ZXh0Q29udGVudCA9IFwiUGxvY2tsaXN0YVwiO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRqZW5hKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXJfLm9yZGVyX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IFwiPGJyPjxiPkFydGlrZWxudW1tZXI6IDwvYj5cIlxuICAgICAgICAgICAgICAgICAgICArIG9yZGVyXy5vcmRlcl9pdGVtc1tpXS5hcnRpY2xlX251bWJlciArIFwiPGJyPjxiPiBQcm9kdWt0aWQ6IDwvYj5cIlxuICAgICAgICAgICAgICAgICAgICArIG9yZGVyXy5vcmRlcl9pdGVtc1tpXS5wcm9kdWN0X2lkICsgXCI8YnI+PGI+IE5hbW46IDwvYj5cIlxuICAgICAgICAgICAgICAgICAgICArIG9yZGVyXy5vcmRlcl9pdGVtc1tpXS5uYW1lICsgXCI8YnI+PGI+QW50YWw6IDwvYj5cIlxuICAgICAgICAgICAgICAgICAgICArIG9yZGVyXy5vcmRlcl9pdGVtc1tpXS5hbW91bnQgKyBcIjxicj48Yj5JIGxhZ2VyIGZpbm5zOiA8L2I+XCJcbiAgICAgICAgICAgICAgICAgICAgKyBvcmRlcl8ub3JkZXJfaXRlbXNbaV0uc3RvY2sgKyBcIjxicj48Yj5Mb2thbGlzZXJpbmc6IDwvYj5cIlxuICAgICAgICAgICAgICAgICAgICArIG9yZGVyXy5vcmRlcl9pdGVtc1tpXS5sb2NhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yZGVyXy5vcmRlcl9pdGVtc1tpXS5hbW91bnQgPCBvcmRlcl8ub3JkZXJfaXRlbXNbaV0uc3RvY2spICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJOeSBvcmRlclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJQYWNrYWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVPcmRlcihvcmRlcl8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlT3JkZXIob3JkZXJfKSB7XG4gICAgICAgIHZhciBuZXdPcmRlciA9IHtcbiAgICAgICAgICAgIGlkOiBvcmRlcl8uaWQsXG4gICAgICAgICAgICBhcGlfa2V5OiBgJHsgYXBpa2V5IH1gLFxuICAgICAgICAgICAgc3RhdHVzX2lkOiAyMDBcbiAgICAgICAgfTtcbiAgICAgICAgZmV0Y2goYCR7YmFzZVVybH1vcmRlcnNgLCB7XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdPcmRlciksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIlxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgb3JkZXJfLm9yZGVyX2l0ZW1zLm1hcChmdW5jdGlvbihvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvZHVjdChvcmQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdChvcmQpIHtcbiAgICAgICAgdmFyIG5ld1Byb2R1Y3QgPSB7XG4gICAgICAgICAgICBpZDogb3JkLnByb2R1Y3RfaWQsXG4gICAgICAgICAgICBhbW91bnQ6IG9yZC5hbW91bnQsXG4gICAgICAgICAgICBhcGlfa2V5OiBgJHsgYXBpa2V5IH1gLFxuICAgICAgICAgICAgc3RvY2s6IChvcmQuc3RvY2sgLSBvcmQuYW1vdW50KVxuICAgICAgICB9O1xuICAgICAgICBmZXRjaChgJHtiYXNlVXJsfXByb2R1Y3RzYCwge1xuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3UHJvZHVjdCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgcHVibGljQVBJID0ge1xuICAgICAgICBkcmF3T3JkZXJzVmlldzogZHJhd09yZGVyc1ZpZXdcbiAgICB9O1xuICAgIHJldHVybiBwdWJsaWNBUEk7XG59KSgpO1xuXG5leHBvcnQgeyBvcmRlclZpZXcgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZ2xvYmFsICovXG5cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHsgYWJvdXQgfSBmcm9tIFwiLi9hYm91dC5qc1wiO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5yb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcbiAgICB3aW5kb3cubWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29udGFpbmVyXCI7XG4gICAgd2luZG93Lm5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgICB3aW5kb3cubmF2aWdhdGlvbi5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xuICAgIHdpbmRvdy5uYXZpZ2F0aW9uLmNsYXNzTmFtZSA9IFwiYm90dG9tLW5hdlwiO1xuXG4gICAgaG9tZS5zaG93SG9tZSgpO1xuICAgIG1lbnUuc2hvd01lbnUoKTtcbiAgICBhYm91dC5zaG93UHJvZHVjdHMoKTtcbn0pKCk7XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9