Ext.define('Ekz.view.Viewport', {
    extend: 'Ext.carousel.Carousel',
    config: {
        cls: 'cards',
        fullscreen: true,
        items: [
            { xtype: 'clientcard' },
            { xtype: 'ordercard' }
        ]
    }
});
