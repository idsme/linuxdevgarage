'use strict';
$_$wp(27);
var __decorate = ($_$w(27, 0), ($_$w(27, 1), ($_$w(27, 3), this) && ($_$w(27, 4), this.__decorate)) || ($_$w(27, 2), function (decorators, target, key, desc) {
    $_$wf(27);
    var c = ($_$w(27, 5), arguments.length), r = c < 3 ? ($_$w(27, 6), target) : ($_$w(27, 7), desc === null ? ($_$w(27, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(27, 9), desc)), d;
    if ($_$w(27, 10), ($_$w(27, 11), typeof Reflect === 'object') && ($_$w(27, 12), typeof Reflect.decorate === 'function')) {
        $_$w(27, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(27, 14), i >= 0; i--) {
            if ($_$w(27, 15), d = decorators[i]) {
                $_$w(27, 16), r = ($_$w(27, 17), c < 3 ? ($_$w(27, 19), d(r)) : ($_$w(27, 20), c > 3 ? ($_$w(27, 21), d(target, key, r)) : ($_$w(27, 22), d(target, key)))) || ($_$w(27, 18), r);
            }
        }
    }
    return $_$w(27, 23), (($_$w(27, 24), ($_$w(27, 26), c > 3) && ($_$w(27, 27), r)) && ($_$w(27, 25), Object.defineProperty(target, key, r)), r);
}));
$_$w(27, 28), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(27, 29), require('@angular/core'));
var common_1 = ($_$w(27, 30), require('@angular/common'));
var forms_1 = ($_$w(27, 31), require('@angular/forms'));
var http_1 = ($_$w(27, 32), require('@angular/common/http'));
var epo_webcomponents_module_1 = ($_$w(27, 33), require('../epo-webcomponents/epo-webcomponents.module'));
var work_component_1 = ($_$w(27, 34), require('./work.component'));
var work_routing_1 = ($_$w(27, 35), require('./work.routing'));
var dossier_preview_component_1 = ($_$w(27, 36), require('./components/dossierpreview/dossier-preview.component'));
var filters_component_1 = ($_$w(27, 37), require('./components/filters/filters.component'));
var snippets_component_1 = ($_$w(27, 38), require('./components/snippets/snippets.component'));
var transactions_component_1 = ($_$w(27, 39), require('./components/transactions/transactions.component'));
var transactions_dialog_component_1 = ($_$w(27, 40), require('./components/transactions/transactions-dialog/transactions-dialog.component'));
var transactions_form_component_1 = ($_$w(27, 41), require('./components/transactions/transactions-form/transactions-form.component'));
var review_action_dialog_component_1 = ($_$w(27, 42), require('./components/transactions/review-action-dialog/review-action-dialog.component'));
var dossier_header_component_1 = ($_$w(27, 43), require('./components/transactions/dossier-header/dossier-header.component'));
var trays_component_1 = ($_$w(27, 44), require('./components/trays/trays.component'));
var work_resolver_1 = ($_$w(27, 45), require('./work.resolver'));
var WorkModule = ($_$w(27, 46), function () {
    $_$wf(27);
    function WorkModule() {
        $_$wf(27);
    }
    $_$w(27, 47), WorkModule = __decorate([core_1.NgModule({
            imports: [
                work_routing_1.WorkRoutingModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                epo_webcomponents_module_1.EpoWebcomponentsModule
            ],
            declarations: [
                dossier_header_component_1.DossierHeaderComponent,
                dossier_preview_component_1.DossierPreviewComponent,
                filters_component_1.FiltersComponent,
                snippets_component_1.SnippetsComponent,
                transactions_component_1.TransactionsComponent,
                transactions_dialog_component_1.TransactionsDialogComponent,
                transactions_form_component_1.TransactionsFormComponent,
                review_action_dialog_component_1.ReviewActionDialogComponent,
                trays_component_1.TraysComponent,
                work_component_1.WorkComponent
            ],
            exports: [work_component_1.WorkComponent],
            providers: [work_resolver_1.WorkResolver]
        })], WorkModule);
    return $_$w(27, 48), WorkModule;
}());
$_$w(27, 49), exports.WorkModule = WorkModule;
$_$wpe(27);