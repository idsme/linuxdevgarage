import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkModule } from './work/work.module';

import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [
{
	path: '',
	redirectTo: 'wm',
	pathMatch: 'full'
},
{
	path: 'wm',
	loadChildren: './work/work.module#WorkModule',
},
{
	path: '404', component: NotFoundComponent
},
{
	path: '**',
	redirectTo: '/404'
}
];
export const AppRouteModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
