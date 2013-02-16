/**
 * Sencha Blink - Development
 * @author Jacky Nguyen <jacky@sencha.com>
 */
(function() {
    function write(content) {
        document.write(content);
    }

    function meta(name, content) {
        write('<meta name="' + name + '" content="' + content + '">');
    }

    var options = {
        name: "MyApp",
        root: "Assets",
        js: [
            { path: "touch/sencha-touch-debug.js", "x-bootstrap": true },
            { path: "app.js", bundle: true, update: "delta" }
        ],
        css: [
            { path: "resources/css/app.css", update: "delta" }
        ],
        appCache: {
            cache: ["index.html"],
            network: ["*"],
            fallback: []
        },
        resources: [
            "resources/images",
            "resources/icons",
            "resources/startup"
        ],
        ignore: ["\.svn$"],
        archivePath: "archive",
        id: "82f811f0-728e-4bcb-8e07-6e7005cbb6c0"
    },
    root = options.root,
    scripts = options.js || [],
    styleSheets = options.css || [],
    i, ln, path;

    meta('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no');
    meta('apple-mobile-web-app-capable', 'yes');
    meta('apple-touch-fullscreen', 'yes');

    for (i = 0,ln = styleSheets.length; i < ln; i++) {
        path = styleSheets[i];
        if (typeof path != 'string') {
            path = path.path;
        }
        path = root + '/' + path;
        write('<link rel="stylesheet" href="'+path+'">');
    }

    for (i = 0,ln = scripts.length; i < ln; i++) {
        path = scripts[i];
        if (typeof path != 'string') {
            path = path.path;
        }
        path = root + '/' + path;
        write('<script src="'+path+'"></'+'script>');
    }
})();
