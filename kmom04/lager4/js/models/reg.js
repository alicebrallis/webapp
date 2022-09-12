import m from "mithril";
import {baseUrl, apiKey, token} from "../vars.js";

let reg = {
    url: `${baseUrl}/auth/register`,
    email: "",
    password: "",

    regg: function() {
        m.request({
            url: reg.url,
            method: "POST",
            body: {
                email: reg.email,
                password: reg.password,
                api_key: apiKey
            }
        }).then(function(res){
            reg.email = "";
            reg.password = "";
            return m.route.set("/")
        });
        }
    }

export default reg;