import m from "mithril";
import invoicesModel from "../models/invoices.js";

let invoiceTable = {
    view: function() {
        return m("table.table.table-stacked.table-striped", [
            m("thead", [
                m("tr", [
                    m("th", "Namn"),
                    m("th", "Pris"),
                    m("th", "Fakturadatum"),
                    m("th", "Förfallodatum")
                    ])
                ]),
                m("tbody", invoicesModel.invoices.map(function(invoice) {
                    return m("tr", [
                        m("td", invoice.name),
                        m("td", invoice.total_price),
                        m("td", invoice.creation_date),
                        m("td", invoice.due_date)
                    ]);
                })),
                m("br", ""),
                m("a", {href: "#!/"}, "Gå tillbaka")
            ])
    }
}

let noData = {
    view: function() {
        return m("p", "Det finns inga fakturor");
    }
}
let invoices = {
    oninit: invoicesModel.getInvoices,
    view: function() {
        return [
            m("h2", "Fakturor"),
            invoicesModel.invoices.length > 0 ? m(invoiceTable) : m(noData)
            ];
        } 
};


export default invoices;
