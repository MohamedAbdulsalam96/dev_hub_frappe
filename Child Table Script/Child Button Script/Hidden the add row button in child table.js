// Hidden the "add row" button in child table

// Syntax
frappe.ui.form.on('Your DocType', {
    refresh: function(frm) {
        // set your table field name
        frm.set_df_property('your_table_field_name', 'cannot_add_rows', true);
    }
});

// Example
frappe.ui.form.on('Master', {
    refresh: function(frm) {
        frm.set_df_property('child_field', 'cannot_add_rows', true);
    }
});