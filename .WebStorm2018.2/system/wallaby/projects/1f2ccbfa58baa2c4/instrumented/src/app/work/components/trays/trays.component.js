'use strict';
$_$wp(97);
var __decorate = ($_$w(97, 0), ($_$w(97, 1), ($_$w(97, 3), this) && ($_$w(97, 4), this.__decorate)) || ($_$w(97, 2), function (decorators, target, key, desc) {
    $_$wf(97);
    var c = ($_$w(97, 5), arguments.length), r = c < 3 ? ($_$w(97, 6), target) : ($_$w(97, 7), desc === null ? ($_$w(97, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(97, 9), desc)), d;
    if ($_$w(97, 10), ($_$w(97, 11), typeof Reflect === 'object') && ($_$w(97, 12), typeof Reflect.decorate === 'function')) {
        $_$w(97, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(97, 14), i >= 0; i--) {
            if ($_$w(97, 15), d = decorators[i]) {
                $_$w(97, 16), r = ($_$w(97, 17), c < 3 ? ($_$w(97, 19), d(r)) : ($_$w(97, 20), c > 3 ? ($_$w(97, 21), d(target, key, r)) : ($_$w(97, 22), d(target, key)))) || ($_$w(97, 18), r);
            }
        }
    }
    return $_$w(97, 23), (($_$w(97, 24), ($_$w(97, 26), c > 3) && ($_$w(97, 27), r)) && ($_$w(97, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(97, 28), ($_$w(97, 29), ($_$w(97, 31), this) && ($_$w(97, 32), this.__metadata)) || ($_$w(97, 30), function (k, v) {
    $_$wf(97);
    if ($_$w(97, 33), ($_$w(97, 34), typeof Reflect === 'object') && ($_$w(97, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(97, 36), Reflect.metadata(k, v);
    }
}));
$_$w(97, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(97, 38), require('@angular/core'));
var router_1 = ($_$w(97, 39), require('@angular/router'));
var store_1 = ($_$w(97, 40), require('@angular-redux/store'));
var rxjs_1 = ($_$w(97, 41), require('rxjs'));
var config_model_1 = ($_$w(97, 42), require('../../../core/services/config/config.model'));
var authentication_1 = ($_$w(97, 43), require('./../../../core/services/authentication/authentication'));
var config_service_1 = ($_$w(97, 44), require('../../../core/services/config/config.service'));
var TraysComponent = ($_$w(97, 45), function () {
    $_$wf(97);
    function TraysComponent(activatedRoute, router, authentication, configService) {
        $_$wf(97);
        $_$w(97, 46), this.activatedRoute = activatedRoute;
        $_$w(97, 47), this.router = router;
        $_$w(97, 48), this.authentication = authentication;
        $_$w(97, 49), this.configService = configService;
    }
    $_$w(97, 50), TraysComponent.prototype.ngOnInit = function () {
        $_$wf(97);
        $_$w(97, 51), this.menu = this.configService.get(config_model_1.TrayMenuConfig).items;
        $_$w(97, 52), this.selectedItem = this.menu[0];
    };
    $_$w(97, 53), TraysComponent.prototype.menuItemSelected = function (item) {
        $_$wf(97);
        $_$w(97, 54), window.open(item.url);
    };
    $_$w(97, 55), TraysComponent.prototype.trayClicked = function (event) {
        $_$wf(97);
        var userId = ($_$w(97, 56), this.activatedRoute.snapshot.paramMap.get('userId'));
        var moduleId = ($_$w(97, 57), this.activatedRoute.snapshot.paramMap.get('moduleId'));
        $_$w(97, 58), this.router.navigate(['/wm/tray/' + event.id], { queryParamsHandling: 'preserve' });
    };
    $_$w(97, 59), __decorate([
        store_1.select([
            'trayTree',
            'tabs'
        ]),
        __metadata('design:type', ($_$w(97, 60), ($_$w(97, 62), typeof (_a = ($_$w(97, 64), typeof rxjs_1.Observable !== 'undefined') && ($_$w(97, 65), rxjs_1.Observable)) === 'function') && ($_$w(97, 63), _a)) || ($_$w(97, 61), Object))
    ], TraysComponent.prototype, 'tabs$', void 0);
    $_$w(97, 66), __decorate([
        store_1.select([
            'menu',
            'items'
        ]),
        __metadata('design:type', ($_$w(97, 67), ($_$w(97, 69), typeof (_b = ($_$w(97, 71), typeof rxjs_1.Observable !== 'undefined') && ($_$w(97, 72), rxjs_1.Observable)) === 'function') && ($_$w(97, 70), _b)) || ($_$w(97, 68), Object))
    ], TraysComponent.prototype, 'menuItems$', void 0);
    $_$w(97, 73), __decorate([
        store_1.select([
            'selectedStates',
            'selectedMenuItem'
        ]),
        __metadata('design:type', ($_$w(97, 74), ($_$w(97, 76), typeof (_c = ($_$w(97, 78), typeof rxjs_1.Observable !== 'undefined') && ($_$w(97, 79), rxjs_1.Observable)) === 'function') && ($_$w(97, 77), _c)) || ($_$w(97, 75), Object))
    ], TraysComponent.prototype, 'selectedMenuItem$', void 0);
    $_$w(97, 80), TraysComponent = __decorate([
        core_1.Component({
            selector: 'eds-trays',
            templateUrl: './trays.component.html',
            styleUrls: ['./trays.component.scss']
        }),
        __metadata('design:paramtypes', [
            ($_$w(97, 81), ($_$w(97, 83), typeof (_d = ($_$w(97, 85), typeof router_1.ActivatedRoute !== 'undefined') && ($_$w(97, 86), router_1.ActivatedRoute)) === 'function') && ($_$w(97, 84), _d)) || ($_$w(97, 82), Object),
            ($_$w(97, 87), ($_$w(97, 89), typeof (_e = ($_$w(97, 91), typeof router_1.Router !== 'undefined') && ($_$w(97, 92), router_1.Router)) === 'function') && ($_$w(97, 90), _e)) || ($_$w(97, 88), Object),
            authentication_1.Authentication,
            config_service_1.ConfigService
        ])
    ], TraysComponent);
    return $_$w(97, 93), TraysComponent;
    var _a = _a || $_$w(97, 94), _b, _c, _d, _e;
}());
$_$w(97, 95), exports.TraysComponent = TraysComponent;
$_$wpe(97);