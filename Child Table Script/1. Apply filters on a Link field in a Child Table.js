// Apply filters on a Link field in a Child Table =========
Example: 
// set filters for Link field "item_code" in "items" field which is a Child Table

frm.set_query('item_code', 'items', () => {
    return {
        filters: {
            item_group: 'Products'
        }
    }
})
// ===================
frm.set_query('item_code', 'items', function() {
    return {
        filters: {
            item_group: 'Products'
        }
    }
})