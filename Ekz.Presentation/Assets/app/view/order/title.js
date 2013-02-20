Ext.define('Ekz.view.order.Title', {
    extend: 'Ext.TitleBar',
    alias: 'widget.ordertitle',
    config: {
        docked: 'top',
        title: 'Pedidos',
        items: [
            {
                iconCls: 'add',
                iconMask: true,
                align: 'left'
            },
            {
                iconCls: 'home',
                iconMask: true,
                align: 'right'
            }
        ]
    }
});
