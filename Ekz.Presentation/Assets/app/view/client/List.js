Ext.define('Ekz.view.client.List', {
    extend: 'Ext.List',
    xtype: 'clientlist',
    requires: [
        'Ext.data.Store'
    ],
    config: {
        fullScreen: true,
        grouped: true,
        itemTpl: '{name}',
        onItemDisclosure: function(record) {
            Ext.Msg.alert('Tap', record.get('name'), Ext.emptyFn);
        },
        store: {
            fields: ['name'],
            grouper: {
                groupFn: function(record) {
                    return record.get('name')[0].toUpperCase();
                }
            },
            data: [
                { name: 'Angla Guillotte ' },
                { name: 'Anderson Sather ' },
                { name: 'Dean Magner ' },
                { name: 'Lamonica Crumbley ' },
                { name: 'Tula Mcpeek ' },
                { name: 'Shaunda Bianchi ' },
                { name: 'Charita Eddy ' },
                { name: 'Berneice Edman ' },
                { name: 'Sixta Flatt ' },
                { name: 'Eleanor Mckamie ' },
                { name: 'Anamaria Birney ' },
                { name: 'Laurence Kyllonen ' },
                { name: 'Raymundo Mcmanis ' },
                { name: 'Kassandra Bowers ' },
                { name: 'Mi Swords ' },
                { name: 'Tiffani Bolduc ' },
                { name: 'Yoshie Marceau ' },
                { name: 'Merlyn Wyse ' },
                { name: 'Anika Ravelo ' },
                { name: 'Rhea Vanhoy ' },
                { name: 'Alexa Herdt ' },
                { name: 'Johnsie Mcgowen ' },
                { name: 'Soo Hurla ' },
                { name: 'Chang Reiling ' },
                { name: 'Lessie Laver ' },
                { name: 'Marcella Liddle ' },
                { name: 'Madelyn Rigsby ' },
                { name: 'Aurelia Gladwin ' },
                { name: 'Jenette Ocegueda ' },
                { name: 'Sindy Carrillo ' },
                { name: 'Eunice Koh ' },
                { name: 'Alethea Vierling ' },
                { name: 'Fay Hodgson ' },
                { name: 'Darrin Rudloff ' },
                { name: 'Moira Pintor ' },
                { name: 'Domonique Mohamed ' },
                { name: 'Shavonne Hadnot ' },
                { name: 'Herta Levalley ' },
                { name: 'Wilma Vetrano ' },
                { name: 'Malorie Wimer ' },
                { name: 'Jonathon Yother ' },
                { name: 'Karena Mcafee ' },
                { name: 'Todd Salvato ' },
                { name: 'Selena Vivas ' },
                { name: 'Adele Royse ' },
                { name: 'Michael Krall ' },
                { name: 'Jefferey Sutera ' },
                { name: 'Fermina Otey ' },
                { name: 'Annita Baumbach ' },
                { name: 'Cordie Watley ' },
            ]
        }
    }
});
