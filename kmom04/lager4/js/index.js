"use strict";
import m from "mithril";
import { menu } from './views/menu.js';
import list from "./views/list.js";
import form from "./views/form.js";
import invoices from "./views/invoices.js";
import login from "./views/login.js";
import reg from "./views/register.js";
import auth from "./models/auth.js"
import order from "./views/order.js"

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(menu);
        }
    },
    "/list": {
        render: function() {
            return m(list);
    }
    },
    "/new": {
        render: function () {
            return m(form);
    }
    },
    "/invoices": {
        onmatch: function() {
            if (auth.token) {
                return m(invoices);
            }
            return m.route.set("/login");
        },
        render: function (vnode) {
            return m(invoices, vnode);
        }
        },
        "/login": { 
            render:function() {
                return m(login);
        }
        },
        "/register": { 
            render:function() {
                return m(reg);
            }
        },
        "/order": {
            render: function() {
                return m(order)
            }
    }
});

 