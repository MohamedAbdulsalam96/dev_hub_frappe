// ## Get Values from Server
// A standard way to query values from server side.

frappe.call({
    method:"frappe.client.get_value",
    args: {
        doctype:"Delivery Note Item",
        filters: {
            parent:"DN00038",
            item_code:"Ser/003"
        },
        fieldname:["qty", "stock_uom"]
    }, 
    callback: function(r) { 
        console.log(r);

        // set the returned value in a field
        cur_frm.set_value(fieldname, r.message);
    }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
frappe.ui.form.on("Item", {
    validate: function(frm) { 
        // clear item_code 
        frm.set_value("item_code",""); 
        if (frm.doc.item_group === "Item Group A") { 
            frm.set_value("item_code", "AA"); 
        }else if ( frm.doc.item_group === "Item Group B") {
            frm.set_value("item_code", "BB"); 
        } else { 
            frm.set_value("item_group", "XX"); 
            if ( frm.doc.brand === "Brand 1") { 
                frm.set_value("item_code", += "B1"); 
            } else if ( frm.doc.brand === "Brand 2") { 
                frm.set_value("item_code", += "B2"); 
            } else { 
                frm.set_value("item_code", += "B0");
            }}}})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
