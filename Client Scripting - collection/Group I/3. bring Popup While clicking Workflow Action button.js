// bring Popup While clicking Workflow Action button - Approve/Reject 
frappe.ui.form.on('Your DocType', {
    refresh: function(frm) {
        if (frm.doc.workflow_state == "Approved By Sales Manager") {
            setTimeout(() => {
                frappe.msgprint("Approved");
            }, 10);
	    } else if (frm.doc.workflow_state == "Rejected By Sales Manager") {
            setTimeout(() => {
                frappe.msgprint("Rejected");
            }, 10);	        
	    }
	}
});