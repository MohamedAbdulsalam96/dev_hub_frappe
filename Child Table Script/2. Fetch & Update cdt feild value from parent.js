// Fetch & Update value of child Table feild from parent Document >> ========= 
2. Fetch & Update cdt feild value from parent
Example: 
// ~~~~~~~~~~~~~~~1~~~~~~~~~~~~~~~~~
Purpose: Make "value of child Table feild" By Defualt, Fetched from parent
frappe.ui.form.on("ParentDoctype", {
    discount_percentage: function(frm) {
		$.each(frm.doc.child_field || [], function(i, d) {
			if(!d.discount_percentage) d.discount_percentage = frm.doc.discount_percentage;
		});
		refresh_field("child_field");
	}	
});
// ~~~~~~~~~~~~~~~2~~~~~~~~~~~~~~~~~
Purpose: Make "value of child Table feild" By Defualt, Dynamicaly Updated..
frappe.ui.form.on("ChildTable", {
	item_code: function(frm,cdt,cdn) {
		var row = locals[cdt][cdn];
		if (frm.doc.discount_percentage) {
			row.discount_percentage = frm.doc.discount_percentage;
			refresh_field("discount_percentage", cdn, "child_field");
		} else {
			frm.script_manager.copy_from_first_row("child_field", row, ["discount_percentage"]);
		}
	},
});

// =========================================================
JavaScript_Lesson: $.each
Syntax:
$.each(collection, function(index, element) {
  // Code to be executed for each element
});

/*
o	In JavaScript, the $.each function is typically associated with the jQuery library. 
o	It is used to iterate over a collection of elements[array-like: list, dict,set] object and perform a specified action for each item in the collection.
o	collection parameter: represents the collection of elements or array-like object that you want to iterate over. 
o	second parameter is a callback function that will be executed for each item in the collection. 
o	The callback function takes two arguments: index and element.
	•	index: represents the current index of the item being processed.
	•	element:  represents the current element or item in the collection.
*/
