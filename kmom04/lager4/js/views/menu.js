"use strict";

import m from 'mithril';

let menu = {
    view: function() {
        return m("nav", [
            m(m.route.Link, {href: "/"}, "Home"),
            m(m.route.Link, {href: "/list"}, "Lager"),
            m(m.route.Link, {href: "/login"}, "Logga in"),
            m(m.route.Link, {href: "/register"}, "Registera dig"),
            m(m.route.Link, {href: "/invoices"}, "Alla fakturor"),
            m(m.route.Link, {href: "/order"}, "Fakturera en order")
            
        ])
    }
};

export { menu };
