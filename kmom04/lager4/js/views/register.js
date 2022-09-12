import m from "mithril";
import reg from "../models/reg.js"

let register = {
    view: function() {
        return [
            m("h2", "Registrera dig"),
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    reg.regg();
                }
            }, [
                m("label.input-label", "E-post"),
                m("input[type=email].input", {
                    oninput: function (event) {
                        console.log(event.target.value);
                        reg.email = event.target.value;
                    },
                    value: reg.email
                }),
                m("br", ""),
                m("label.input-label", "Lösenord"),
                m("input[type=password].input", {
                    oninput: function (event) {
                        console.log(event.target.value);
                        reg.password = event.target.value;
                    },
                    value: reg.password
                }),
                m("input[type=submit][value=Registera],button", "Registrera"),
                m("a", {href: "#!/"}, "Gå tillbaka")
           
                ])
        
        ]}
    };


export default register;