Ext.define('Ekz.view.order.Card', {
    extend: 'Ext.Container',
    alias: 'widget.ordercard',
    config: {
        layout: 'fit',
        items: [
            { xtype: 'ordertitle' }
        ]
    }
});
