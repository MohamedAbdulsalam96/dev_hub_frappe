    # 6. frappe.db.exists () >>>>>>>>>>>>>>>>
# Returns true if a document record exists.
# Syntax: 
frappe.db.exists(doctype, docname)
or
Pass a dict: including "doctype" key:
frappe.db.exists({"doctype": "doctype name", "field_name1": "value1"})
or
Pass the doctype & a dict of filters:
frappe.db.exists("doctype", {"field_name1": "value1"})


# parameters :>>> 
Doctype: #
docname: # 
#~~~~~~~~~~~~~~~~~~~~~~


