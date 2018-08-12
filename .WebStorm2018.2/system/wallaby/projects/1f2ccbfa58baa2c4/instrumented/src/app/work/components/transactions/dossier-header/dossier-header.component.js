'use strict';
$_$wp(112);
var __decorate = ($_$w(112, 0), ($_$w(112, 1), ($_$w(112, 3), this) && ($_$w(112, 4), this.__decorate)) || ($_$w(112, 2), function (decorators, target, key, desc) {
    $_$wf(112);
    var c = ($_$w(112, 5), arguments.length), r = c < 3 ? ($_$w(112, 6), target) : ($_$w(112, 7), desc === null ? ($_$w(112, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(112, 9), desc)), d;
    if ($_$w(112, 10), ($_$w(112, 11), typeof Reflect === 'object') && ($_$w(112, 12), typeof Reflect.decorate === 'function')) {
        $_$w(112, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(112, 14), i >= 0; i--) {
            if ($_$w(112, 15), d = decorators[i]) {
                $_$w(112, 16), r = ($_$w(112, 17), c < 3 ? ($_$w(112, 19), d(r)) : ($_$w(112, 20), c > 3 ? ($_$w(112, 21), d(target, key, r)) : ($_$w(112, 22), d(target, key)))) || ($_$w(112, 18), r);
            }
        }
    }
    return $_$w(112, 23), (($_$w(112, 24), ($_$w(112, 26), c > 3) && ($_$w(112, 27), r)) && ($_$w(112, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(112, 28), ($_$w(112, 29), ($_$w(112, 31), this) && ($_$w(112, 32), this.__metadata)) || ($_$w(112, 30), function (k, v) {
    $_$wf(112);
    if ($_$w(112, 33), ($_$w(112, 34), typeof Reflect === 'object') && ($_$w(112, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(112, 36), Reflect.metadata(k, v);
    }
}));
$_$w(112, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(112, 38), require('@angular/core'));
var config_service_1 = ($_$w(112, 39), require('./../../../../core/services/config/config.service'));
var config_model_1 = ($_$w(112, 40), require('./../../../../core/services/config/config.model'));
var DossierHeaderComponent = ($_$w(112, 41), function () {
    $_$wf(112);
    function DossierHeaderComponent(configService) {
        $_$wf(112);
        $_$w(112, 42), this.configService = configService;
        $_$w(112, 43), this.dossierWorkspace = '#';
        $_$w(112, 44), this.dossierTitle = 'Multi-panel sunroof module for an automobile vehicle';
    }
    $_$w(112, 45), DossierHeaderComponent.prototype.ngOnInit = function () {
        $_$wf(112);
        var configData = ($_$w(112, 46), this.configService.get(config_model_1.TransactionsConfig)['transactions']);
        $_$w(112, 47), this.configData = configData.find(function (obj) {
            $_$wf(112);
            return $_$w(112, 48), obj.taskTypeName === 'H_MP-SEARCH.01_CREATE-COMM';
        })['taskTypeData'];
    };
    $_$w(112, 49), DossierHeaderComponent = __decorate([
        core_1.Component({
            selector: 'eds-dossier-header',
            templateUrl: './dossier-header.component.html',
            styleUrls: ['./dossier-header.component.scss']
        }),
        __metadata('design:paramtypes', [config_service_1.ConfigService])
    ], DossierHeaderComponent);
    return $_$w(112, 50), DossierHeaderComponent;
}());
$_$w(112, 51), exports.DossierHeaderComponent = DossierHeaderComponent;
$_$wpe(112);