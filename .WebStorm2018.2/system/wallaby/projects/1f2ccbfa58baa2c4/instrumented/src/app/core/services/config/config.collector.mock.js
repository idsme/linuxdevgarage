'use strict';
$_$wp(90);
$_$w(90, 0), Object.defineProperty(exports, '__esModule', { value: true });
var ConfigCollectorMock = ($_$w(90, 1), function () {
    $_$wf(90);
    function ConfigCollectorMock() {
        $_$wf(90);
    }
    $_$w(90, 2), ConfigCollectorMock.prototype.getConfig = function () {
        $_$wf(90);
        return $_$w(90, 3), {
            api: {
                'endpoints': {
                    'tray': [
                        '/api/trays',
                        null,
                        'ENDPOINT_TRAY_API'
                    ],
                    'dossier': [
                        '/api/dossier',
                        null,
                        'ENDPOINT_DOSSIER_API'
                    ],
                    'product': [
                        '/api/product',
                        null,
                        'ENDPOINT_PRODUCT_API'
                    ],
                    'account': [
                        '/api/account',
                        null,
                        'ENDPOINT_ACCOUNT_API'
                    ]
                },
                'maxRetries': 80,
                'interval': 250,
                'warningTime': 8
            }
        };
    };
    $_$w(90, 4), ConfigCollectorMock.prototype.getOverrides = function () {
        $_$wf(90);
        return $_$w(90, 5), { 'ENDPOINT_TRAY_API': '/api/new-tray' };
    };
    return $_$w(90, 6), ConfigCollectorMock;
}());
$_$w(90, 7), exports.ConfigCollectorMock = ConfigCollectorMock;
$_$wpe(90);