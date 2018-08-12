'use strict';
$_$wp(108);
var __decorate = ($_$w(108, 0), ($_$w(108, 1), ($_$w(108, 3), this) && ($_$w(108, 4), this.__decorate)) || ($_$w(108, 2), function (decorators, target, key, desc) {
    $_$wf(108);
    var c = ($_$w(108, 5), arguments.length), r = c < 3 ? ($_$w(108, 6), target) : ($_$w(108, 7), desc === null ? ($_$w(108, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(108, 9), desc)), d;
    if ($_$w(108, 10), ($_$w(108, 11), typeof Reflect === 'object') && ($_$w(108, 12), typeof Reflect.decorate === 'function')) {
        $_$w(108, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(108, 14), i >= 0; i--) {
            if ($_$w(108, 15), d = decorators[i]) {
                $_$w(108, 16), r = ($_$w(108, 17), c < 3 ? ($_$w(108, 19), d(r)) : ($_$w(108, 20), c > 3 ? ($_$w(108, 21), d(target, key, r)) : ($_$w(108, 22), d(target, key)))) || ($_$w(108, 18), r);
            }
        }
    }
    return $_$w(108, 23), (($_$w(108, 24), ($_$w(108, 26), c > 3) && ($_$w(108, 27), r)) && ($_$w(108, 25), Object.defineProperty(target, key, r)), r);
}));
$_$w(108, 28), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(108, 29), require('@angular/core'));
var DossierPreviewComponent = ($_$w(108, 30), function () {
    $_$wf(108);
    function DossierPreviewComponent() {
        $_$wf(108);
    }
    $_$w(108, 31), DossierPreviewComponent = __decorate([core_1.Component({
            selector: 'eds-dossier-preview',
            templateUrl: './dossier-preview.component.html'
        })], DossierPreviewComponent);
    return $_$w(108, 32), DossierPreviewComponent;
}());
$_$w(108, 33), exports.DossierPreviewComponent = DossierPreviewComponent;
$_$wpe(108);