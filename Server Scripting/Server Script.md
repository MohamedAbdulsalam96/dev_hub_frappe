# Server Script

## Document Events 
For scripts that are to be called via document events, you must set the Reference Document Type and Event Name to define the trigger

Before Insert
After Insert
Before Validate
Before Save
After Save
Before Submit
After Submit
Before Cancel
After Cancel
Before Delete
After Delete
Before Save (Submitted Document)
After Save (Submitted Document)

## standard methods:
> you can add standard methods to the class that are called when a document of that type is created. Standard Handlers are:
1.	autoname:       Called while naming. You can set the self.name property in the method.
2.	before_insert:  Called before a document is inserted.
3.	validate:       Called before document is saved. You can throw an exception if you don't want the document to be saved
4.	on_update:      Called after the document is inserted or updated in the database.
5.	on_submit:      Called after submission.
6.	on_cancel:      Called after cancellation.
7.	on_trash:       Called after document is deleted.



