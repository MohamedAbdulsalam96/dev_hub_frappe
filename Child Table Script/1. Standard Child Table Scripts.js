// Standard Child Table Scripts: should be written in the same file as their parent. 
Example: 
// In child Table: "Update "amount" Feild,, Based on "rate" & "quantity" values >> 

frappe.ui.form.on('ChildTable',{
	quantity: function (frm, cdt, cdn) {
		let row = locals[cdt][cdn]
		let amount = flt(row.quantity * row.rate);
		row.amount = amount
		refresh_field("amount", cdn, "child_field"); 
	},
	rate: function (frm, cdt, cdn) {
		let row = locals[cdt][cdn]
		let amount = flt(row.quantity * row.rate);
		row.amount = amount
		refresh_field("amount", cdn, "child_field"); 
	}    
});	