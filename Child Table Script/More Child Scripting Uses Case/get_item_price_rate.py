# More Child Scripting Uses Case >> 

## 1). get_item_price_rate 

// ~~~~~~~~~~~~~~~2~~~~~~~~~~~~~~~~~
frappe.ui.form.on("ChildTable", "item_code", function(frm, cdt, cdn) {
    var d = locals[cdt][cdn];
        frappe.db.get_value("Item Price", {"name": d.item_code}, "price_list_rate", function(value) {
            d.rate = value.price_list_rate;
        });
});s
// ~~~~~~~~~~~~~~~2~~~~~~~~~~~~~~~~~
var get_item_price_rate= function(frm, cdt, cdn) {
	var child = locals[cdt][cdn];

	frappe.model.get_value('Item Price', 
		{
			'item_code': child.service_item,
			'price_list': "Standard Selling",
			'selling': 1
		}, 
		'price_list_rate',
		function(d) {
			if(d) {
				frappe.model.set_value(child.doctype, child.name, "rate", d.price_list_rate);
			}else{
				frappe.model.set_value(child.doctype, child.name, "rate", "0");
			}
		}
	)
}



// ~~~~~~~~~~~~~~~2~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~2~~~~~~~~~~~~~~~~~
