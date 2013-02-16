Ext.define('Ekz.store.Clients', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Ekz.model.Client',
        grouper: {
            groupFn: function(record) {
                return record.get('name').substr(0, 1).toUpperCase();
            }
        },
        proxy: {
            type: "ajax",
            url: "Clients",
            reader: {
                type: "json",
                rootProperty: "users"
            }
        }
    }
});
