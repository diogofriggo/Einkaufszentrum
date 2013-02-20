Ext.define('Ekz.view.client.Title', {
    extend: 'Ext.TitleBar',
    alias: 'widget.clienttitle',
    config: {
        title: 'Clientes',
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
