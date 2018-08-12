'use strict';
$_$wp(118);
var __decorate = ($_$w(118, 0), ($_$w(118, 1), ($_$w(118, 3), this) && ($_$w(118, 4), this.__decorate)) || ($_$w(118, 2), function (decorators, target, key, desc) {
    $_$wf(118);
    var c = ($_$w(118, 5), arguments.length), r = c < 3 ? ($_$w(118, 6), target) : ($_$w(118, 7), desc === null ? ($_$w(118, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(118, 9), desc)), d;
    if ($_$w(118, 10), ($_$w(118, 11), typeof Reflect === 'object') && ($_$w(118, 12), typeof Reflect.decorate === 'function')) {
        $_$w(118, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(118, 14), i >= 0; i--) {
            if ($_$w(118, 15), d = decorators[i]) {
                $_$w(118, 16), r = ($_$w(118, 17), c < 3 ? ($_$w(118, 19), d(r)) : ($_$w(118, 20), c > 3 ? ($_$w(118, 21), d(target, key, r)) : ($_$w(118, 22), d(target, key)))) || ($_$w(118, 18), r);
            }
        }
    }
    return $_$w(118, 23), (($_$w(118, 24), ($_$w(118, 26), c > 3) && ($_$w(118, 27), r)) && ($_$w(118, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(118, 28), ($_$w(118, 29), ($_$w(118, 31), this) && ($_$w(118, 32), this.__metadata)) || ($_$w(118, 30), function (k, v) {
    $_$wf(118);
    if ($_$w(118, 33), ($_$w(118, 34), typeof Reflect === 'object') && ($_$w(118, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(118, 36), Reflect.metadata(k, v);
    }
}));
$_$w(118, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(118, 38), require('@angular/core'));
var config_service_1 = ($_$w(118, 39), require('./../../../../core/services/config/config.service'));
var config_model_1 = ($_$w(118, 40), require('./../../../../core/services/config/config.model'));
var TransactionsDialogComponent = ($_$w(118, 41), function () {
    $_$wf(118);
    function TransactionsDialogComponent(configService) {
        $_$wf(118);
        $_$w(118, 42), this.configService = configService;
        $_$w(118, 43), this.positiveOpinion = false;
        $_$w(118, 44), this.dueDate = new Date('2018-08-27');
        $_$w(118, 45), this.state = 'In progress';
        $_$w(118, 46), this.communicationType = 'STSE-Standard Search + Search Opinion';
        $_$w(118, 47), this.existComments = false;
        $_$w(118, 48), this.comments = 'Comment text comes here. Comment text comes here. Comment text comes here. Comment text comes here';
        $_$w(118, 49), this.timeStamp = Date.now();
    }
    $_$w(118, 50), TransactionsDialogComponent.prototype.ngOnInit = function () {
        $_$wf(118);
        var configData = ($_$w(118, 51), this.configService.get(config_model_1.TransactionsConfig)['transactions']);
        $_$w(118, 52), this.configData = configData.find(function (obj) {
            $_$wf(118);
            return $_$w(118, 53), obj.taskTypeName === 'H_MP-SEARCH.01_CREATE-COMM';
        })['taskTypeData'];
    };
    $_$w(118, 54), TransactionsDialogComponent = __decorate([
        core_1.Component({
            selector: 'eds-transactions-dialog',
            templateUrl: './transactions-dialog.component.html',
            styleUrls: ['./transactions-dialog.component.scss']
        }),
        __metadata('design:paramtypes', [config_service_1.ConfigService])
    ], TransactionsDialogComponent);
    return $_$w(118, 55), TransactionsDialogComponent;
}());
$_$w(118, 56), exports.TransactionsDialogComponent = TransactionsDialogComponent;
$_$wpe(118);