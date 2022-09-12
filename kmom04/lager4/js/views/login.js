import m from "mithril";
import auth from "../models/auth.js"


let login = {
    view: function() {
        return [
            m("h2", "Logga in"),
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    auth.login();
                }
            }, [
                m("label.input-label", "E-post"),
                m("input[type=email].input", {
                    oninput: function (event) {
                        console.log(event.target.value);
                        auth.email = event.target.value;
                    },
                    value: auth.email
                }),
                m("br", ""),
                m("label.input-label", "Lösenord"),
                m("input[type=password].input", {
                    oninput: function (event) {
                        console.log(event.target.value);
                        auth.password = event.target.value;
                    },
                    value: auth.password
                }),
                m("input[type=submit][value=Logga in],button", "Logga in"),
                m("a", {href: "#!/"}, "Gå tillbaka")
           
                ])
        
        ]}
    };
        



export default login;
