# Stanard Fixtures :
fixtures = [{obj1}, {obj2}, {obj3},...]
# ----------
# obj1 dict: 
{dict_obj1} => { 
	"doctype":"doctype_name", 
	"filters": [list_of_filter_criteria] 
	}
# ----------
# list_of_filter_criteria
list_of_filter_criteria = {
	"fieldname",["operator", ["Value1","Value2",.. ]]
}
# ----------
# operator: 
"operator" : must be one of
 "=", "!=", "is"
 ">", "<", ">=", "<=", 
 "like", "not like", 
 "in", "not in", "between", 
 "descendants of", "ancestors of", "not descendants of", "not ancestors of"
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Full Code>>
# ---------------
fixtures = [
	{
	"doctype":"doctype_name", 
	"filters": {
		"fieldname",["operator", ["Value1","Value2",.. ]]
		} 
	},
	{obj2},
	{obj3},...
]
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
# Stanard Example: >>>
# ---------------
fixtures = [
	{
		"dt": "Custom Field", 
		"filters":{
			"name": ["in", ['value1','value1']]
			}
	},
	{
		"dt": "Print Format",
		"filters": {
			"name": ["in", ['.',' ',]]
			}
	}
]
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# bench commands: 
# -------------------
bench --site mysite export-fixtures  
bench update 
bench install-app 
