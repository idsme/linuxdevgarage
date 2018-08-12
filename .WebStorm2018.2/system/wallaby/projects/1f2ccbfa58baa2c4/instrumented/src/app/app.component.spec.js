'use strict';
$_$wp(16);
$_$w(16, 0), Object.defineProperty(exports, '__esModule', { value: true });
var testing_1 = ($_$w(16, 1), require('@angular/core/testing'));
var app_module_1 = ($_$w(16, 2), require('./app.module'));
var config_collector_1 = ($_$w(16, 3), require('./core/services/config/config.collector'));
var config_collector_mock_1 = ($_$w(16, 4), require('./core/services/config/config.collector.mock'));
$_$w(16, 5), describe('AppComponent', function () {
    $_$wf(16);
    $_$w(16, 6), beforeEach(testing_1.async(function () {
        $_$wf(16);
        $_$w(16, 7), testing_1.TestBed.configureTestingModule({
            imports: [app_module_1.AppModule],
            providers: [{
                    provide: config_collector_1.ConfigCollector,
                    useClass: config_collector_mock_1.ConfigCollectorMock
                }]
        }).compileComponents();
    }));
});
$_$wpe(16);