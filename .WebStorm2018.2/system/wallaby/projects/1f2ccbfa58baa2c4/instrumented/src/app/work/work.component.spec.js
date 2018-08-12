'use strict';
$_$wp(33);
$_$w(33, 0), Object.defineProperty(exports, '__esModule', { value: true });
var testing_1 = ($_$w(33, 1), require('@angular/core/testing'));
var work_component_1 = ($_$w(33, 2), require('./work.component'));
var work_module_1 = ($_$w(33, 3), require('./work.module'));
var app_module_1 = ($_$w(33, 4), require('../app.module'));
var config_collector_mock_1 = ($_$w(33, 5), require('../core/services/config/config.collector.mock'));
var config_collector_1 = ($_$w(33, 6), require('../core/services/config/config.collector'));
$_$w(33, 7), describe('WorkComponent', function () {
    $_$wf(33);
    var component = component || $_$w(33, 8);
    var fixture = fixture || $_$w(33, 9);
    $_$w(33, 10), beforeEach(testing_1.async(function () {
        $_$wf(33);
        $_$w(33, 11), testing_1.TestBed.configureTestingModule({
            imports: [
                app_module_1.AppModule,
                work_module_1.WorkModule
            ],
            providers: [{
                    provide: config_collector_1.ConfigCollector,
                    useClass: config_collector_mock_1.ConfigCollectorMock
                }]
        }).compileComponents();
    }));
    $_$w(33, 12), beforeEach(function () {
        $_$wf(33);
        $_$w(33, 13), fixture = testing_1.TestBed.createComponent(work_component_1.WorkComponent);
        $_$w(33, 14), component = fixture.componentInstance;
        $_$w(33, 15), fixture.detectChanges();
    });
});
$_$wpe(33);