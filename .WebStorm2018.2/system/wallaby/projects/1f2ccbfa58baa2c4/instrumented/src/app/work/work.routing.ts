import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkComponent } from './work.component';
import { ActivateGuard } from '../core/services/guard/activate.guard';
import { WorkResolver } from './work.resolver';

const routes: Routes = [
	{
		path: '',
		component: WorkComponent,
		canActivate: [ ActivateGuard ],
		resolve: {
			appResolver: WorkResolver
		}
	},
	{
		path: 'tray/:trayId',
		component: WorkComponent,
		canActivate: [ ActivateGuard ],
		resolve: {
			appResolver: WorkResolver
		}
	},
	{
		path: 'tray/:trayId/task/:taskId',
		component: WorkComponent,
		canActivate: [ ActivateGuard ],
		resolve: {
			appResolver: WorkResolver
		}
	}
];

export const WorkRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
