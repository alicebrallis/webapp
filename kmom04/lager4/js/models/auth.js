import m from "mithril";
import {baseUrl, apiKey, token} from "../vars.js";

let auth = {
    url: `${baseUrl}/auth/login`,
    email: "",
    password: "",
    token: token,

    login: function() {
        m.request({
            url: auth.url,
            method: "POST",
            body: {
                email: auth.email,
                password: auth.password,
                api_key: apiKey
            }
        }).then(function(result){
            auth.email = "";
            auth.password = "";
            console.log(result.data.token)
            auth.token = result.data.token
            return m.route.set("/");
        });
    }
};
export default auth;