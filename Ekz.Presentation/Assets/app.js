Ext.Loader.setPath({
    'Ext': 'Assets/touch/src',
    'Ekz': 'Assets/app'
});

Ext.application({
    name: 'Ekz',
    requires: [
        
    ],
    models: [
        'Ekz.model.Client'
    ],
    views: [
        'Ekz.view.Viewport',
        'Ekz.view.client.Title',
        'Ekz.view.client.List',
        'Ekz.view.client.Card',
        'Ekz.view.order.Title',
        'Ekz.view.order.Card'
    ],
    controllers: [
        'Ekz.controller.Clients'
    ],
    stores: [
        'Ekz.store.Clients'
    ],
    launch: function () {
        Ext.create('Ekz.view.Viewport');
    }
});
