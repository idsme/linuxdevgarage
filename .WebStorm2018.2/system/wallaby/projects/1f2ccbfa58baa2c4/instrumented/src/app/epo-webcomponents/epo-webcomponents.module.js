'use strict';
$_$wp(35);
var __decorate = ($_$w(35, 0), ($_$w(35, 1), ($_$w(35, 3), this) && ($_$w(35, 4), this.__decorate)) || ($_$w(35, 2), function (decorators, target, key, desc) {
    $_$wf(35);
    var c = ($_$w(35, 5), arguments.length), r = c < 3 ? ($_$w(35, 6), target) : ($_$w(35, 7), desc === null ? ($_$w(35, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(35, 9), desc)), d;
    if ($_$w(35, 10), ($_$w(35, 11), typeof Reflect === 'object') && ($_$w(35, 12), typeof Reflect.decorate === 'function')) {
        $_$w(35, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(35, 14), i >= 0; i--) {
            if ($_$w(35, 15), d = decorators[i]) {
                $_$w(35, 16), r = ($_$w(35, 17), c < 3 ? ($_$w(35, 19), d(r)) : ($_$w(35, 20), c > 3 ? ($_$w(35, 21), d(target, key, r)) : ($_$w(35, 22), d(target, key)))) || ($_$w(35, 18), r);
            }
        }
    }
    return $_$w(35, 23), (($_$w(35, 24), ($_$w(35, 26), c > 3) && ($_$w(35, 27), r)) && ($_$w(35, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(35, 28), ($_$w(35, 29), ($_$w(35, 31), this) && ($_$w(35, 32), this.__metadata)) || ($_$w(35, 30), function (k, v) {
    $_$wf(35);
    if ($_$w(35, 33), ($_$w(35, 34), typeof Reflect === 'object') && ($_$w(35, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(35, 36), Reflect.metadata(k, v);
    }
}));
$_$w(35, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(35, 38), require('@angular/core'));
var forms_1 = ($_$w(35, 39), require('@angular/forms'));
var common_1 = ($_$w(35, 40), require('@angular/common'));
var focus_directive_1 = ($_$w(35, 41), require('./shared/focus.directive'));
var main_menu_component_1 = ($_$w(35, 42), require('./mainmenu/main-menu.component'));
var main_menu_item_component_1 = ($_$w(35, 43), require('./mainmenu/main-menu-item.component'));
var accordion_component_1 = ($_$w(35, 44), require('./accordion/accordion.component'));
var accordion_panel_component_1 = ($_$w(35, 45), require('./accordion/accordion-panel.component'));
var EpoWebcomponentsModule = ($_$w(35, 46), function () {
    $_$wf(35);
    function EpoWebcomponentsModule() {
        $_$wf(35);
    }
    $_$w(35, 47), EpoWebcomponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [
                main_menu_component_1.EpoMainMenuComponent,
                main_menu_item_component_1.EpoMainMenuItemComponent,
                focus_directive_1.EpoFocusDirective,
                accordion_component_1.EpoAccordionComponent,
                accordion_panel_component_1.EpoAccordionPanelComponent
            ],
            providers: [],
            exports: [
                main_menu_component_1.EpoMainMenuComponent,
                main_menu_item_component_1.EpoMainMenuItemComponent,
                focus_directive_1.EpoFocusDirective,
                accordion_component_1.EpoAccordionComponent,
                accordion_panel_component_1.EpoAccordionPanelComponent
            ]
        }),
        __metadata('design:paramtypes', [])
    ], EpoWebcomponentsModule);
    return $_$w(35, 48), EpoWebcomponentsModule;
}());
$_$w(35, 49), exports.EpoWebcomponentsModule = EpoWebcomponentsModule;
$_$wpe(35);