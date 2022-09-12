import m from "mithril";
import deliveries from "../models/deliveries.js";
import delivieries from "../models/deliveries.js";


let list = {
    oninit: deliveries.getDeliveries,
    view: function() {
        return m("main.container", [
            m("h2", "Inleveranser"),
            m("p", "Inga leveranser att visa"),
            m("a", {href: "#!/new"}, "Lägg till leverans"),
            m("br", ""),
            m("a", {href: "#!/"}, "Gå tillbaka"),
            m("div.deliveries", delivieries.currentDeliveries.map(function(delivery) {
                return m("div", [
                    m("p", "Produkt-id: " +  delivery.product_id  + " "
                    + "Antal:" + " " + delivery.amount + "st"
                    + " " + "Datum: " + " " + delivery.delivery_date + " "
                    + "Kommentar:" + " " + delivery.comment),
                ]);
            })),
        ]);
    }
};


export default list;

