// setup dynamic_field_label
frappe.ui.form.on('Master', {
    setup: function(frm) {
        frm.set_query("party_type", function() {
            return{"filters": {"name": ["in", ["Customer", "Supplier", "Employee"]]}}
        });
    },
    // setup dynamic_field_label
    party_type: function(frm) {
        frm.trigger('set_dynamic_field_label');
        frm.set_value("party", "");
    },
    set_dynamic_field_label: function(frm){
        if (frm.doc.party_type) {
            frm.set_df_property("party", "label", frm.doc.party_type);
        }
    },
});

