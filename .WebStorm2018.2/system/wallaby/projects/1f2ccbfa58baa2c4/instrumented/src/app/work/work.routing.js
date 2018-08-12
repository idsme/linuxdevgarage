'use strict';
$_$wp(28);
$_$w(28, 0), Object.defineProperty(exports, '__esModule', { value: true });
var router_1 = ($_$w(28, 1), require('@angular/router'));
var work_component_1 = ($_$w(28, 2), require('./work.component'));
var activate_guard_1 = ($_$w(28, 3), require('../core/services/guard/activate.guard'));
var work_resolver_1 = ($_$w(28, 4), require('./work.resolver'));
var routes = ($_$w(28, 5), [
    {
        path: '',
        component: work_component_1.WorkComponent,
        canActivate: [activate_guard_1.ActivateGuard],
        resolve: { appResolver: work_resolver_1.WorkResolver }
    },
    {
        path: 'tray/:trayId',
        component: work_component_1.WorkComponent,
        canActivate: [activate_guard_1.ActivateGuard],
        resolve: { appResolver: work_resolver_1.WorkResolver }
    },
    {
        path: 'tray/:trayId/task/:taskId',
        component: work_component_1.WorkComponent,
        canActivate: [activate_guard_1.ActivateGuard],
        resolve: { appResolver: work_resolver_1.WorkResolver }
    }
]);
$_$w(28, 6), exports.WorkRoutingModule = router_1.RouterModule.forChild(routes);
$_$wpe(28);