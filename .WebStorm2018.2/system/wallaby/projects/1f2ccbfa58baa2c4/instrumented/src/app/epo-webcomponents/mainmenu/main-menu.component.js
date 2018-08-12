'use strict';
$_$wp(56);
var __decorate = ($_$w(56, 0), ($_$w(56, 1), ($_$w(56, 3), this) && ($_$w(56, 4), this.__decorate)) || ($_$w(56, 2), function (decorators, target, key, desc) {
    $_$wf(56);
    var c = ($_$w(56, 5), arguments.length), r = c < 3 ? ($_$w(56, 6), target) : ($_$w(56, 7), desc === null ? ($_$w(56, 8), desc = Object.getOwnPropertyDescriptor(target, key)) : ($_$w(56, 9), desc)), d;
    if ($_$w(56, 10), ($_$w(56, 11), typeof Reflect === 'object') && ($_$w(56, 12), typeof Reflect.decorate === 'function')) {
        $_$w(56, 13), r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; $_$w(56, 14), i >= 0; i--) {
            if ($_$w(56, 15), d = decorators[i]) {
                $_$w(56, 16), r = ($_$w(56, 17), c < 3 ? ($_$w(56, 19), d(r)) : ($_$w(56, 20), c > 3 ? ($_$w(56, 21), d(target, key, r)) : ($_$w(56, 22), d(target, key)))) || ($_$w(56, 18), r);
            }
        }
    }
    return $_$w(56, 23), (($_$w(56, 24), ($_$w(56, 26), c > 3) && ($_$w(56, 27), r)) && ($_$w(56, 25), Object.defineProperty(target, key, r)), r);
}));
var __metadata = ($_$w(56, 28), ($_$w(56, 29), ($_$w(56, 31), this) && ($_$w(56, 32), this.__metadata)) || ($_$w(56, 30), function (k, v) {
    $_$wf(56);
    if ($_$w(56, 33), ($_$w(56, 34), typeof Reflect === 'object') && ($_$w(56, 35), typeof Reflect.metadata === 'function')) {
        return $_$w(56, 36), Reflect.metadata(k, v);
    }
}));
$_$w(56, 37), Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = ($_$w(56, 38), require('@angular/core'));
var keycodes_1 = ($_$w(56, 39), require('../utils/keycodes'));
var EpoMainMenuComponent = ($_$w(56, 40), function () {
    $_$wf(56);
    function EpoMainMenuComponent(elem) {
        $_$wf(56);
        $_$w(56, 41), this.elem = elem;
        $_$w(56, 42), this.selectedItemChange = new core_1.EventEmitter();
        $_$w(56, 43), this.isOpen = false;
    }
    $_$w(56, 44), EpoMainMenuComponent.prototype.setFocus = function ($event) {
        $_$wf(56);
        var ESC = ($_$w(56, 45), keycodes_1.KEYS.ESC), ENTER = keycodes_1.KEYS.ENTER, UP = keycodes_1.KEYS.UP, DOWN = keycodes_1.KEYS.DOWN, PAGE_DOWN = keycodes_1.KEYS.PAGE_DOWN, PAGE_UP = keycodes_1.KEYS.PAGE_UP, HOME = keycodes_1.KEYS.HOME, END = keycodes_1.KEYS.END;
        if ($_$w(56, 46), this.isOpen) {
            switch ($_$w(56, 47), $event.keyCode) {
            case DOWN: {
                    $_$w(56, 48), this.focussedItem = ($_$w(56, 49), this.items[this.items.indexOf(this.focussedItem) + 1]) || ($_$w(56, 50), this.items[0]);
                    {
                        $_$w(56, 51);
                        break;
                    }
                }
            case UP: {
                    $_$w(56, 52), this.focussedItem = ($_$w(56, 53), this.items[this.items.indexOf(this.focussedItem) - 1]) || ($_$w(56, 54), this.items[this.items.length - 1]);
                    {
                        $_$w(56, 55);
                        break;
                    }
                }
            case ESC: {
                    $_$w(56, 56), this.isOpen = false;
                    {
                        $_$w(56, 57);
                        break;
                    }
                }
            case PAGE_UP:
            case HOME: {
                    $_$w(56, 58), this.focussedItem = this.items[0];
                    {
                        $_$w(56, 59);
                        break;
                    }
                }
            case PAGE_DOWN:
            case END: {
                    $_$w(56, 60), this.focussedItem = this.items[this.items.length - 1];
                    {
                        $_$w(56, 61);
                        break;
                    }
                }
            case ENTER: {
                    $_$w(56, 62), this.clickItem(this.focussedItem);
                    $_$w(56, 63), this.isOpen = false;
                    {
                        $_$w(56, 64);
                        break;
                    }
                }
            }
        } else if ($_$w(56, 65), $event.keyCode === ENTER) {
            $_$w(56, 66), this.toggle();
        }
    };
    $_$w(56, 67), EpoMainMenuComponent.prototype.clickout = function (event) {
        $_$wf(56);
        if ($_$w(56, 68), !this.elem.nativeElement.contains(event.target)) {
            $_$w(56, 69), this.isOpen = false;
        }
    };
    $_$w(56, 70), EpoMainMenuComponent.prototype.isFocused = function (item) {
        $_$wf(56);
        return $_$w(56, 71), item === this.focussedItem;
    };
    $_$w(56, 72), EpoMainMenuComponent.prototype.toggle = function () {
        $_$wf(56);
        $_$w(56, 73), this.isOpen = !this.isOpen;
        if ($_$w(56, 74), ($_$w(56, 75), !this.focussedItem) && ($_$w(56, 76), this.isOpen)) {
            $_$w(56, 77), this.focussedItem = this.selectedItem;
        }
    };
    $_$w(56, 78), EpoMainMenuComponent.prototype.clickItem = function (item) {
        $_$wf(56);
        $_$w(56, 79), this.selectedItemChange.emit(item);
    };
    $_$w(56, 80), __decorate([
        core_1.Input(),
        __metadata('design:type', Array)
    ], EpoMainMenuComponent.prototype, 'items', void 0);
    $_$w(56, 81), __decorate([
        core_1.Input(),
        __metadata('design:type', Object)
    ], EpoMainMenuComponent.prototype, 'selectedItem', void 0);
    $_$w(56, 82), __decorate([
        core_1.Output(),
        __metadata('design:type', Object)
    ], EpoMainMenuComponent.prototype, 'selectedItemChange', void 0);
    $_$w(56, 83), __decorate([
        core_1.HostListener('keydown', ['$event']),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Object]),
        __metadata('design:returntype', void 0)
    ], EpoMainMenuComponent.prototype, 'setFocus', null);
    $_$w(56, 84), __decorate([
        core_1.HostListener('document:click', ['$event']),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Object]),
        __metadata('design:returntype', void 0)
    ], EpoMainMenuComponent.prototype, 'clickout', null);
    $_$w(56, 85), EpoMainMenuComponent = __decorate([
        core_1.Component({
            selector: 'epo-main-menu',
            templateUrl: './main-menu.component.html',
            styleUrls: ['./main-menu.component.scss']
        }),
        __metadata('design:paramtypes', [($_$w(56, 86), ($_$w(56, 88), typeof (_a = ($_$w(56, 90), typeof core_1.ElementRef !== 'undefined') && ($_$w(56, 91), core_1.ElementRef)) === 'function') && ($_$w(56, 89), _a)) || ($_$w(56, 87), Object)])
    ], EpoMainMenuComponent);
    return $_$w(56, 92), EpoMainMenuComponent;
    var _a = _a || $_$w(56, 93);
}());
$_$w(56, 94), exports.EpoMainMenuComponent = EpoMainMenuComponent;
$_$wpe(56);