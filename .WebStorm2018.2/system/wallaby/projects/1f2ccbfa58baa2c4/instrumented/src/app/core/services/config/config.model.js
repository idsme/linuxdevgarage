'use strict';
$_$wp(85);
var __extends = ($_$w(85, 0), ($_$w(85, 1), ($_$w(85, 3), this) && ($_$w(85, 4), this.__extends)) || ($_$w(85, 2), function () {
    $_$wf(85);
    var extendStatics = ($_$w(85, 5), ($_$w(85, 6), ($_$w(85, 8), Object.setPrototypeOf) || ($_$w(85, 9), ($_$w(85, 10), { __proto__: [] } instanceof Array) && ($_$w(85, 11), function (d, b) {
        $_$wf(85);
        $_$w(85, 12), d.__proto__ = b;
    }))) || ($_$w(85, 7), function (d, b) {
        $_$wf(85);
        for (var p in $_$w(85, 13), b) {
            if ($_$w(85, 14), b.hasOwnProperty(p)) {
                $_$w(85, 15), d[p] = b[p];
            }
        }
    }));
    return $_$w(85, 16), function (d, b) {
        $_$wf(85);
        $_$w(85, 17), extendStatics(d, b);
        function __() {
            $_$wf(85);
            $_$w(85, 18), this.constructor = d;
        }
        $_$w(85, 19), d.prototype = b === null ? ($_$w(85, 20), Object.create(b)) : ($_$w(85, 21), (__.prototype = b.prototype, new __()));
    };
}()));
$_$w(85, 22), Object.defineProperty(exports, '__esModule', { value: true });
var Config = ($_$w(85, 23), function () {
    $_$wf(85);
    function Config(init) {
        $_$wf(85);
        $_$w(85, 24), Object.assign(this, init);
    }
    return $_$w(85, 25), Config;
}());
$_$w(85, 26), exports.Config = Config;
var EndpointConfig = ($_$w(85, 27), function (_super) {
    $_$wf(85);
    $_$w(85, 28), __extends(EndpointConfig, _super);
    function EndpointConfig() {
        $_$wf(85);
        return $_$w(85, 29), ($_$w(85, 30), ($_$w(85, 32), _super !== null) && ($_$w(85, 33), _super.apply(this, arguments))) || ($_$w(85, 31), this);
    }
    return $_$w(85, 34), EndpointConfig;
}(Config));
$_$w(85, 35), exports.EndpointConfig = EndpointConfig;
var AccountEndpointConfig = ($_$w(85, 36), function (_super) {
    $_$wf(85);
    $_$w(85, 37), __extends(AccountEndpointConfig, _super);
    function AccountEndpointConfig() {
        $_$wf(85);
        return $_$w(85, 38), ($_$w(85, 39), ($_$w(85, 41), _super !== null) && ($_$w(85, 42), _super.apply(this, arguments))) || ($_$w(85, 40), this);
    }
    return $_$w(85, 43), AccountEndpointConfig;
}(EndpointConfig));
$_$w(85, 44), exports.AccountEndpointConfig = AccountEndpointConfig;
var TrayEndpointConfig = ($_$w(85, 45), function (_super) {
    $_$wf(85);
    $_$w(85, 46), __extends(TrayEndpointConfig, _super);
    function TrayEndpointConfig() {
        $_$wf(85);
        return $_$w(85, 47), ($_$w(85, 48), ($_$w(85, 50), _super !== null) && ($_$w(85, 51), _super.apply(this, arguments))) || ($_$w(85, 49), this);
    }
    return $_$w(85, 52), TrayEndpointConfig;
}(EndpointConfig));
$_$w(85, 53), exports.TrayEndpointConfig = TrayEndpointConfig;
var TrayTreeConfig = ($_$w(85, 54), function (_super) {
    $_$wf(85);
    $_$w(85, 55), __extends(TrayTreeConfig, _super);
    function TrayTreeConfig() {
        $_$wf(85);
        return $_$w(85, 56), ($_$w(85, 57), ($_$w(85, 59), _super !== null) && ($_$w(85, 60), _super.apply(this, arguments))) || ($_$w(85, 58), this);
    }
    return $_$w(85, 61), TrayTreeConfig;
}(Config));
$_$w(85, 62), exports.TrayTreeConfig = TrayTreeConfig;
var TrayMenuConfig = ($_$w(85, 63), function (_super) {
    $_$wf(85);
    $_$w(85, 64), __extends(TrayMenuConfig, _super);
    function TrayMenuConfig() {
        $_$wf(85);
        return $_$w(85, 65), ($_$w(85, 66), ($_$w(85, 68), _super !== null) && ($_$w(85, 69), _super.apply(this, arguments))) || ($_$w(85, 67), this);
    }
    return $_$w(85, 70), TrayMenuConfig;
}(Config));
$_$w(85, 71), exports.TrayMenuConfig = TrayMenuConfig;
var TaskEndpointConfig = ($_$w(85, 72), function (_super) {
    $_$wf(85);
    $_$w(85, 73), __extends(TaskEndpointConfig, _super);
    function TaskEndpointConfig() {
        $_$wf(85);
        return $_$w(85, 74), ($_$w(85, 75), ($_$w(85, 77), _super !== null) && ($_$w(85, 78), _super.apply(this, arguments))) || ($_$w(85, 76), this);
    }
    return $_$w(85, 79), TaskEndpointConfig;
}(EndpointConfig));
$_$w(85, 80), exports.TaskEndpointConfig = TaskEndpointConfig;
var TransactionsConfig = ($_$w(85, 81), function (_super) {
    $_$wf(85);
    $_$w(85, 82), __extends(TransactionsConfig, _super);
    function TransactionsConfig() {
        $_$wf(85);
        return $_$w(85, 83), ($_$w(85, 84), ($_$w(85, 86), _super !== null) && ($_$w(85, 87), _super.apply(this, arguments))) || ($_$w(85, 85), this);
    }
    return $_$w(85, 88), TransactionsConfig;
}(Config));
$_$w(85, 89), exports.TransactionsConfig = TransactionsConfig;
var TabsConfig = ($_$w(85, 90), function (_super) {
    $_$wf(85);
    $_$w(85, 91), __extends(TabsConfig, _super);
    function TabsConfig() {
        $_$wf(85);
        return $_$w(85, 92), ($_$w(85, 93), ($_$w(85, 95), _super !== null) && ($_$w(85, 96), _super.apply(this, arguments))) || ($_$w(85, 94), this);
    }
    return $_$w(85, 97), TabsConfig;
}(Config));
$_$w(85, 98), exports.TabsConfig = TabsConfig;
$_$wpe(85);