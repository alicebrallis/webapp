import m from "mithril";
import delivieries from "../models/deliveries";
import products from "../models/products";


let form = {
    oninit: products.getProducts,
    view: function() {
        return m("main.container", [
            m("h1", "Ny inleverans"),
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    delivieries.save();
                }
            }, [
                m("br", ""),
                m("label.input-label", "Välj produkt"),
                m("select.input",  {
                    onchange: function(e) {
                        console.log(e.target.value);
                        delivieries.currentDelivery.product_id = e.target.value;
                        console.log(delivieries.currentDelivery.product_id);
                    },
                }, products.currentProducts.map(function (prod) {
                    return m("option", { value: prod.id }, prod.name);
                }
                )),
                m("br", ""),
                m("label", "Ange antal"),
                m("input[type=number].input",
                    {
                        oninput: function(event) {
                            console.log(event.target.value);
                            delivieries.currentDelivery.amount = event.target.value;
                        }
                    }),
                m("br", ""),
                m("label", "Ange leverans datum"),
                m("input[type=date].input", {
                    oninput: function(event) {
                        console.log(event.target.value);
                        delivieries.currentDelivery.date = event.target.value;
                    }
                }),
                m("br", ""),
                m("label", "Skriv en kommentar"),
                m("textarea[placeholder=Skriv en kommentar].input", {
                    oninput: function(event) {
                        console.log(event.target.value);
                        delivieries.currentDelivery.comment = event.target.value;
                    }
                }),
                m("input[type=submit][value=Spara].button", "Spara"),
                m("br", ""),
                m("a", {href: "#!/"}, "Gå tillbaka")
            ])
        ]);
    }
};


export default form;
