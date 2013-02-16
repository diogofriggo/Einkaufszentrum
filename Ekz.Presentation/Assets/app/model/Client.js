Ext.define('Ekz.model.Client', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', mapping: 'Id', type: 'int' },
            { name: 'name', mapping: 'Name', type: 'string' }
        ]
    }
});
