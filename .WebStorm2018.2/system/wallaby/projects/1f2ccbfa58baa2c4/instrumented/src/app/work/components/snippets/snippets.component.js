'use strict';
$_$wp(102);
var __decorate = ($_$w(102, 0), ($_$w(102, 1), ($_$w(102, 3), this) && ($_$w(102, 4), this.__decorate)) || ($_$w(102, 2), function (decorators, target, key, desc) {
    $_$wf(102);
    var c = ($_$w(102, 5), arguments.length), r = c < 3 ? ($_$w(102, 6), target) : ($_$w(102, 7), desc === null ? ($_$w(102, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(102, 9), desc)), d;
    if ($_$w(102, 10), ($_$w(102, 11), typeof Reflect === 'object') && ($_$w(102, 12), typeof Reflect.decorate === 'function')) {
        $_$w(102, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(102, 14), i >= 0; i--) {
            if ($_$w(102, 15), d = decorators[i]) {
                $_$w(102, 16), r = ($_$w(102, 17), c < 3 ? ($_$w(102, 19), d(r)) : ($_$w(102, 20), c > 3 ? ($_$w(102, 21), d(target, key, r)) : ($_$w(102, 22), d(target, key)))) || ($_$w(102, 18), r);
            }
        }
    }
    return $_$w(102, 23), (($_$w(102, 24), ($_$w(102, 26), c > 3) && ($_$w(102, 27), r)) && ($_$w(102, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(102, 28), ($_$w(102, 29), ($_$w(102, 31), this) && ($_$w(102, 32), this.__metadata)) || ($_$w(102, 30), function (k, v) {
    $_$wf(102);
    if ($_$w(102, 33), ($_$w(102, 34), typeof Reflect === 'object') && ($_$w(102, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(102, 36), Reflect.metadata(k, v);
    }
}));
$_$w(102, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(102, 38), require('@angular/core'));
var store_1 = ($_$w(102, 39), require('@angular-redux/store'));
var rxjs_1 = ($_$w(102, 40), require('rxjs'));
var router_1 = ($_$w(102, 41), require('@angular/router'));
var snippet_service_1 = ($_$w(102, 42), require('./../../../core/services/snippet/snippet.service'));
var SnippetsComponent = ($_$w(102, 43), function () {
    $_$wf(102);
    function SnippetsComponent(activatedRoute, router, snippetService) {
        $_$wf(102);
        $_$w(102, 44), this.activatedRoute = activatedRoute;
        $_$w(102, 45), this.router = router;
        $_$w(102, 46), this.snippetService = snippetService;
        $_$w(102, 47), this.selectedSnippet = new core_1.EventEmitter();
    }
    $_$w(102, 48), SnippetsComponent.prototype.ngOnInit = function () {
        $_$wf(102);
        var _this = ($_$w(102, 49), this);
        $_$w(102, 50), this.selectedTray$.subscribe(function (res) {
            $_$wf(102);
            $_$w(102, 51), _this.snippetService.getSnippets(_this.activatedRoute.snapshot.paramMap.get('trayId'));
        });
        $_$w(102, 52), this.snippets$.subscribe(function (res) {
            $_$wf(102);
            if ($_$w(102, 53), res) {
                $_$w(102, 54), _this.snippetList = res;
            }
        });
    };
    $_$w(102, 55), SnippetsComponent.prototype.selectSnippet = function (snippet) {
        $_$wf(102);
        var userId = ($_$w(102, 56), this.activatedRoute.snapshot.paramMap.get('userId'));
        var moduleId = ($_$w(102, 57), this.activatedRoute.snapshot.paramMap.get('moduleId'));
        var trayId = ($_$w(102, 58), this.activatedRoute.snapshot.paramMap.get('trayId'));
        $_$w(102, 59), this.router.navigate(['/wm/tray/' + trayId + '/task/' + snippet.id], { queryParamsHandling: 'preserve' });
    };
    $_$w(102, 60), __decorate([
        store_1.select([
            'snippets',
            'data'
        ]),
        __metadata('design:type', ($_$w(102, 61), ($_$w(102, 63), typeof (_a = ($_$w(102, 65), typeof rxjs_1.Observable !== 'undefined') && ($_$w(102, 66), rxjs_1.Observable)) === 'function') && ($_$w(102, 64), _a)) || ($_$w(102, 62), Object))
    ], SnippetsComponent.prototype, 'snippets$', void 0);
    $_$w(102, 67), __decorate([
        store_1.select([
            'selectedStates',
            'selectedTray'
        ]),
        __metadata('design:type', ($_$w(102, 68), ($_$w(102, 70), typeof (_b = ($_$w(102, 72), typeof rxjs_1.Observable !== 'undefined') && ($_$w(102, 73), rxjs_1.Observable)) === 'function') && ($_$w(102, 71), _b)) || ($_$w(102, 69), Object))
    ], SnippetsComponent.prototype, 'selectedTray$', void 0);
    $_$w(102, 74), __decorate([
        core_1.Output(),
        __metadata('design:type', Object)
    ], SnippetsComponent.prototype, 'selectedSnippet', void 0);
    $_$w(102, 75), SnippetsComponent = __decorate([
        core_1.Component({
            selector: 'eds-snippets',
            templateUrl: './snippets.component.html',
            styleUrls: ['./snippet.component.scss']
        }),
        __metadata('design:paramtypes', [
            ($_$w(102, 76), ($_$w(102, 78), typeof (_c = ($_$w(102, 80), typeof router_1.ActivatedRoute !== 'undefined') && ($_$w(102, 81), router_1.ActivatedRoute)) === 'function') && ($_$w(102, 79), _c)) || ($_$w(102, 77), Object),
            ($_$w(102, 82), ($_$w(102, 84), typeof (_d = ($_$w(102, 86), typeof router_1.Router !== 'undefined') && ($_$w(102, 87), router_1.Router)) === 'function') && ($_$w(102, 85), _d)) || ($_$w(102, 83), Object),
            snippet_service_1.SnippetService
        ])
    ], SnippetsComponent);
    return $_$w(102, 88), SnippetsComponent;
    var _a = _a || $_$w(102, 89), _b, _c, _d;
}());
$_$w(102, 90), exports.SnippetsComponent = SnippetsComponent;
$_$wpe(102);