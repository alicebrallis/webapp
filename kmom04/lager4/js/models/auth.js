"use strict";
import m from "mithril";
import {baseUrl, apiKey} from "../vars.js";


let auth = {
    url: `${baseUrl}/auth/login`,
    email: "",
    password: "",
    token: "",

    login: function() {
        m.request({
            url: auth.url,
            method: "POST",
            body: {
                email: auth.email,
                password: auth.password,
                api_key: apiKey
            }
        }).then(function (result) {
            auth.email = "";
            auth.password = "";
            auth.token = result.data.token;
            return m.route.set("/");
        });
    }
};

export default auth;
