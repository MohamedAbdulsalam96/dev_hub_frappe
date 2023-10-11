    # 1. frappe.db.get_list () >>>>>>>>>>>>>>>>
# used to query database and retrieve a list of documents based on specific criteria.
# Returns >> list of dictionaries...each dictionary represents a document, with specified fields & values.
# Syntax: 
frappe.db.get_list(
                Doctype, 
                filters={},  
                or_filters= {},  
                fields==['fname1', 'fname2'], 
                order_by='fname', 
                limit_start=None, 
                limit_page_length=None, 
                ignore_permissions=False, 
                as_list=False, 
                debug=False
                )
# parameters :>>> 
Doctype: #name of DocType from which you want to fetch records..
filters={}: # filters to records based on specific conditions. {accepts dict or list of dict}. 
or_filters={}: # applies OR condition instead of AND condition. 
fields=[]: #specify which fields you want to fetch
#~~~~~~~~~~~~~~~~~~~~~~
## Test Function: (System Console) 
# get all customers
customers = frappe.db.get_list('Customer', filters={'customer_group' :'Commercial'}, fields=['name', 'customer_name', 'customer_group'])
# Output>>> 
for customer in customers:
    log(customer)
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    # 2. frappe.db.get_all () >>>>>>>>>>>>>>>>
# o	Same as frappe.db.get_list but will fetch all records without applying permissions







