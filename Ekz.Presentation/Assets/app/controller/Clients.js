Ext.define('Ekz.controller.Clients', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            list: 'clientlist'
        },
        control: {
            list: {
                initialize: function (list) {
                    list.getStore().load();
                }
            }
        }

    }
});