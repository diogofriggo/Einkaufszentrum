Ext.define('Ekz.view.client.List', {
    extend: 'Ext.List',
    alias: 'widget.clientlist',
    config: {
        store: 'Clients',
        grouped: true,
        //ui: 'round',
        itemTpl: '{name}',
        onItemDisclosure: function () { }
    }

});