'use strict';
$_$wp(121);
var __decorate = ($_$w(121, 0), ($_$w(121, 1), ($_$w(121, 3), this) && ($_$w(121, 4), this.__decorate)) || ($_$w(121, 2), function (decorators, target, key, desc) {
    $_$wf(121);
    var c = ($_$w(121, 5), arguments.length), r = c < 3 ? ($_$w(121, 6), target) : ($_$w(121, 7), desc === null ? ($_$w(121, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(121, 9), desc)), d;
    if ($_$w(121, 10), ($_$w(121, 11), typeof Reflect === 'object') && ($_$w(121, 12), typeof Reflect.decorate === 'function')) {
        $_$w(121, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(121, 14), i >= 0; i--) {
            if ($_$w(121, 15), d = decorators[i]) {
                $_$w(121, 16), r = ($_$w(121, 17), c < 3 ? ($_$w(121, 19), d(r)) : ($_$w(121, 20), c > 3 ? ($_$w(121, 21), d(target, key, r)) : ($_$w(121, 22), d(target, key)))) || ($_$w(121, 18), r);
            }
        }
    }
    return $_$w(121, 23), (($_$w(121, 24), ($_$w(121, 26), c > 3) && ($_$w(121, 27), r)) && ($_$w(121, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(121, 28), ($_$w(121, 29), ($_$w(121, 31), this) && ($_$w(121, 32), this.__metadata)) || ($_$w(121, 30), function (k, v) {
    $_$wf(121);
    if ($_$w(121, 33), ($_$w(121, 34), typeof Reflect === 'object') && ($_$w(121, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(121, 36), Reflect.metadata(k, v);
    }
}));
$_$w(121, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(121, 38), require('@angular/core'));
var config_service_1 = ($_$w(121, 39), require('../../../../core/services/config/config.service'));
var config_model_1 = ($_$w(121, 40), require('../../../../core/services/config/config.model'));
var ReviewActionDialogComponent = ($_$w(121, 41), function () {
    $_$wf(121);
    function ReviewActionDialogComponent(configService) {
        $_$wf(121);
        $_$w(121, 42), this.configService = configService;
        $_$w(121, 43), this.dialogVisible = new core_1.EventEmitter();
    }
    $_$w(121, 44), ReviewActionDialogComponent.prototype.ngOnInit = function () {
        $_$wf(121);
        var configData = ($_$w(121, 45), this.configService.get(config_model_1.TransactionsConfig)['transactions']);
        $_$w(121, 46), this.configData = configData.find(function (obj) {
            $_$wf(121);
            return $_$w(121, 47), obj.taskTypeName === 'H_MP-SEARCH.01_CREATE-COMM';
        })['taskTypeData'];
    };
    $_$w(121, 48), ReviewActionDialogComponent.prototype.closeDialog = function () {
        $_$wf(121);
        $_$w(121, 49), this.dialogVisible.emit(false);
    };
    $_$w(121, 50), __decorate([
        core_1.Output(),
        __metadata('design:type', Object)
    ], ReviewActionDialogComponent.prototype, 'dialogVisible', void 0);
    $_$w(121, 51), ReviewActionDialogComponent = __decorate([
        core_1.Component({
            selector: 'eds-review-action-dialog',
            templateUrl: './review-action-dialog.component.html'
        }),
        __metadata('design:paramtypes', [config_service_1.ConfigService])
    ], ReviewActionDialogComponent);
    return $_$w(121, 52), ReviewActionDialogComponent;
}());
$_$w(121, 53), exports.ReviewActionDialogComponent = ReviewActionDialogComponent;
$_$wpe(121);