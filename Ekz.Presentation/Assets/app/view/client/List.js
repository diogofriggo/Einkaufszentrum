Ext.define('Ekz.view.client.List', {
    extend: 'Ext.List',
    xtype: 'clientlist',
    config: {
        store: 'Clients',
        fullScreen: true,
        grouped: true,
        itemTpl: '{name}',
        onItemDisclosure: function(record) {
            Ext.Msg.alert('Tap', record.get('name'), Ext.emptyFn);
        }
    }
});
