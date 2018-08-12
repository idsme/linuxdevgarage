'use strict';
$_$wp(115);
var __decorate = ($_$w(115, 0), ($_$w(115, 1), ($_$w(115, 3), this) && ($_$w(115, 4), this.__decorate)) || ($_$w(115, 2), function (decorators, target, key, desc) {
    $_$wf(115);
    var c = ($_$w(115, 5), arguments.length), r = c < 3 ? ($_$w(115, 6), target) : ($_$w(115, 7), desc === null ? ($_$w(115, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(115, 9), desc)), d;
    if ($_$w(115, 10), ($_$w(115, 11), typeof Reflect === 'object') && ($_$w(115, 12), typeof Reflect.decorate === 'function')) {
        $_$w(115, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(115, 14), i >= 0; i--) {
            if ($_$w(115, 15), d = decorators[i]) {
                $_$w(115, 16), r = ($_$w(115, 17), c < 3 ? ($_$w(115, 19), d(r)) : ($_$w(115, 20), c > 3 ? ($_$w(115, 21), d(target, key, r)) : ($_$w(115, 22), d(target, key)))) || ($_$w(115, 18), r);
            }
        }
    }
    return $_$w(115, 23), (($_$w(115, 24), ($_$w(115, 26), c > 3) && ($_$w(115, 27), r)) && ($_$w(115, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(115, 28), ($_$w(115, 29), ($_$w(115, 31), this) && ($_$w(115, 32), this.__metadata)) || ($_$w(115, 30), function (k, v) {
    $_$wf(115);
    if ($_$w(115, 33), ($_$w(115, 34), typeof Reflect === 'object') && ($_$w(115, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(115, 36), Reflect.metadata(k, v);
    }
}));
$_$w(115, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(115, 38), require('@angular/core'));
var config_service_1 = ($_$w(115, 39), require('./../../../../core/services/config/config.service'));
var config_model_1 = ($_$w(115, 40), require('../../../../core/services/config/config.model'));
var TransactionsFormComponent = ($_$w(115, 41), function () {
    $_$wf(115);
    function TransactionsFormComponent(configService) {
        $_$wf(115);
        $_$w(115, 42), this.configService = configService;
        $_$w(115, 43), this.showDialog = false;
        $_$w(115, 44), this.caseTool = '#';
        $_$w(115, 45), this.caseLink = 'CASE evaluation tool';
        $_$w(115, 46), this.caseDescription = 'Please go to the CASE tool via the link below, and perform the CASE evaluation.\n        Please reproduce the outcome of the CASE evaluation by selecting \'Yes\' or \'No\' in the dialogue below.';
        $_$w(115, 47), this.caseQuestion = 'Is this search conforming?';
        $_$w(115, 48), this.secaQuestion = 'Does this case contain potentially sensitive matter';
    }
    $_$w(115, 49), TransactionsFormComponent.prototype.ngOnInit = function () {
        $_$wf(115);
        var configData = ($_$w(115, 50), this.configService.get(config_model_1.TransactionsConfig)['transactions']);
        $_$w(115, 51), this.configData = configData.find(function (obj) {
            $_$wf(115);
            return $_$w(115, 52), obj.taskTypeName === 'H_MP-SEARCH.01_CREATE-COMM';
        })['taskTypeData'];
    };
    $_$w(115, 53), TransactionsFormComponent.prototype.toggleDialog = function (showDialog) {
        $_$wf(115);
        $_$w(115, 54), this.showDialog = showDialog;
    };
    $_$w(115, 55), TransactionsFormComponent.prototype.radioBtnState = function () {
        $_$wf(115);
        if ($_$w(115, 56), this.configData.form.selectedOption === 'Undecided') {
            return $_$w(115, 57), true;
        } else {
            return $_$w(115, 58), false;
        }
    };
    $_$w(115, 59), TransactionsFormComponent = __decorate([
        core_1.Component({
            selector: 'eds-transactions-form',
            templateUrl: './transactions-form.component.html'
        }),
        __metadata('design:paramtypes', [config_service_1.ConfigService])
    ], TransactionsFormComponent);
    return $_$w(115, 60), TransactionsFormComponent;
}());
$_$w(115, 61), exports.TransactionsFormComponent = TransactionsFormComponent;
$_$wpe(115);