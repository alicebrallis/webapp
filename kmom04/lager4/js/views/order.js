
import m from "mithril";
import orders from "../models/orders.js";


let order = {
    oninit: orders.getOrders,
    view: function() {
        return m("main.container", [
            m("h1", "Välj order för att skapa faktura"),
            m("p", [
                (order.success) ? m('.success',order.success) :  '',
            ]),
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    orders.updateOrder();
                    order.success = 'Order är fakturerad';
                }
            }, [
                m("br", ""),
                    m("select.input",  {
                        onchange: function(e) {
                            orders.currentOrder = e.target.value;
                    }
                }, orders.currentOrders.map(function (ord) {
                    return [
                        ord.status_id == 100 ? m("option", { value: ord.id }, 
                        ord.name) : "",
                    ];
                })),
                m("input[type=submit][value=Skapa faktura].button", "Spara"),
                m("br", ""),
                m("a", {href: "#!/"}, "Gå tillbaka")
            ])
        ]);
    }
};

export default order;

