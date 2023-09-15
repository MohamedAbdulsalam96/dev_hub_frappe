frappe.ui.form.on('Quotation', {
    refresh: function (frm) {
        frm.cscript.custom_on_keydown = function (event) {
            if (event.ctrlKey && event.key === 'i') {
                event.preventDefault();
                frm.fields_dict.items.grid.add_new_row(); //this works!
            
                // Set focus on the 'item_code' field in the newly added row with a slight delay
                setTimeout(function () {
                    const grid = frm.fields_dict.items.grid;
                    const newRowIndex = grid.grid_rows.length - 1;                   
                    var columnName = "item_code";
                }       }    }}})
frappe.ui.form.on('Quotation', {
    refresh: function (frm){
        frm.cscript.custom_on_keydown = function (event) {
            if (event.ctrlKey && event.key === 'i') {
                event.preventDefault();
                frm.fields_dict.items.grid.add_new_row(); //this works!
            }
        }
    }
})
// not working!                    
var $fieldElement = frm.fields_dict['items'].grid.get_field(newRowIndex,columnName).$input;
            // Check if the field element exists
            if ($fieldElement) {
                // Set focus on the field element - does NOT work
                $fieldElement.focus();
            }

                }, 100); 
            }
        };


