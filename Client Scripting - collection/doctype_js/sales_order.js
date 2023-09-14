frappe.ui.form.on('Sales Order', {

});

frappe.ui.form.on('Sales Order Item', {
    length: function(frm, cdt, cdn) {
        calculateAmount(frm, cdt, cdn);
    },
    width: function(frm, cdt, cdn) {
        calculateAmount(frm, cdt, cdn);
    },
    qty: function(frm, cdt, cdn) {
        calculateAmount(frm, cdt, cdn);
    },
});

function calculateAmount(frm, cdt, cdn) {
    var item = locals[cdt][cdn];
    var length = item.length;
    var width = item.width;
    var qty = length * width;
    frappe.model.set_value(cdt, cdn, 'qty', qty);
}