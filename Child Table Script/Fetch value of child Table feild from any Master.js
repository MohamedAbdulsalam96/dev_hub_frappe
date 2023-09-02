// Fetch value of child Table feild from any Master =========
Example: 
// ~~~~~~~~~~~~~~~1~~~~~~~~~~~~~~~~~	
/*
o	Sample Script to fetch "expiry_date" field from "Batch" doctype to" Sales Invoice Item" table
	Step 1: In "Sales Invoice Item" table, Go & Add Custom Field named: "Expiry Date"
	Step 2: Script as below & Save
*/
frappe.ui.form.on("Sales Invoice Item", "batch_no", function(frm, cdt, cdn) {
    var d = locals[cdt][cdn];
    frappe.db.get_value("Batch", {"name": d.batch_no}, "expiry_date", function(value) { d.expiry_date = value.expiry_date;
    });
});

Example: 
// ~~~~~~~~~~~~~~~2~~~~~~~~~~~~~~~~~
frappe.ui.form.on("ChildTable", "item_code", function(frm, cdt, cdn) {
    var d = locals[cdt][cdn];
        frappe.db.get_value("Item Price", {"name": d.item_code}, "price_list_rate", function(value) {
            d.rate = value.price_list_rate;
        });
});s
