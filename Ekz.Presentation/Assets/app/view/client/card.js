Ext.define('Ekz.view.client.Card', {
    extend: 'Ext.Container',
    alias: 'widget.clientcard',
    config: {
        layout: 'fit',
        items: [
            { xtype: 'clienttitle', docked: 'top' },
            { xtype: 'clientlist' }
        ]
    }
});
