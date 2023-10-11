    # 3. frappe.db.get_value () >>>>>>>>>>>>>>>>
# to retrieve single value from the database based on specified parameters. 
# Returns >> single value or None if no matching record is found.
        # >> document's field value or a list of values.
        # >> function returns string,number,boolean,or a list, depending on the field type & the number of fields requested. 
# Syntax: 
frappe.db.get_value(doctype, name, fieldname) 
or 
frappe.db.get_value(doctype, filters, fieldname)

# parameters :>>> 
Doctype: 
filters={}: # filters to records based on specific conditions. {accepts dict or list of dict}. 
name=: # is optional parameter if filters are given instead.  "string")
fieldname=[]: # string or list of strings
#~~~~~~~~~~~~~~~~~~~~~~
## Test Function: (System Console) 
customers = frappe.db.get_value('Customer','Mohamed Abdulsalam', ['territory', 'customer_group'], as_dict=1)
for c in customers:
    log(c)
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    # 4. frappe.db.get_single_value () >>>>>>>>>>>>>>>>
# to get a single value from a single doctype field.
# Syntax: 
frappe.db.get_single_value(doctype, fieldname)



# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~















