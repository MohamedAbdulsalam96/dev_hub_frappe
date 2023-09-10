// Filter Options in Select Field:

frappe.ui.form.on("Lead", "state", function(frm) {
    if(frm.doc.state == "Karnataka")
    {
      set_field_options("city", ["Bangalore","Mysore"])
    }
    else if(frm.doc.state == "Maharashtra")
    {
      set_field_options("city", ["Mumbai","Pune"])
    }
    else if(frm.doc.state == "")
    {
      set_field_options("city", ["","Bangalore","Mysore","Mumbai","Pune"])
    }
    });

// ~~~~~~~~~~~~~~~~~~~~~~
// Filter Options in Select Field: (in childtable)
// Need dynamic select option in childtable
if(row.financier == "TEST"){
    frm.fields_dict.items.grid.update_docfield_property("status","options",["Loan Approved","Loan Appealing"]);
}else{
    frm.fields_dict.items.grid.update_docfield_property("status","options",["Loan Accepted"]);
 }





