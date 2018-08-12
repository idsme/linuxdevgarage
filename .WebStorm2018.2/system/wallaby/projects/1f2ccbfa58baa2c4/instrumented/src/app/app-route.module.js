'use strict';
$_$wp(15);
$_$w(15, 0), Object.defineProperty(exports, '__esModule', { value: true });
var router_1 = ($_$w(15, 1), require('@angular/router'));
var not_found_component_1 = ($_$w(15, 2), require('./not-found.component'));
$_$w(15, 3), exports.routes = [
    {
        path: '',
        redirectTo: 'wm',
        pathMatch: 'full'
    },
    {
        path: 'wm',
        loadChildren: './work/work.module#WorkModule'
    },
    {
        path: '404',
        component: not_found_component_1.NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];
$_$w(15, 4), exports.AppRouteModule = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
$_$wpe(15);