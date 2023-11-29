This page is intended to make it easier for users who maintain custom apps / forks to migrate their installations to Version 13.

---


### Whitelisting `Document` methods

If you were accessing any document methods using one of the following constructs, the method needs to be whitelisted in the doctype class. Additionally, if you were setting document methods as `options` for `Button` fields, those will need to be whitelisted as well.

```js
frm.call("my_method")
// or
frappe.call({
    doc: frm.doc,
    method: "my_method"
})
```

```diff
class ToDo:
+   frappe.whitelist()
    def my_method(self):
        pass
```

Docs: https://frappeframework.com/docs/user/en/api/form#frmcall