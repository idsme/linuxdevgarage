import { AppState } from '../core/redux/store.model';
import { LoggerService } from '../core/services/logger/logger.service';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { TrayService } from '../core/services/tray/tray.service';
import { TrayMenuConfig } from '../core/services/config/config.model';
import { Authentication } from '../core/services/authentication/authentication';
import { forkJoin, Observable } from 'rxjs/index';
import { MenuActions } from '../core/redux/actions/menu.action';
import { SnippetService } from '../core/services/snippet/snippet.service';
import { map } from 'rxjs/internal/operators';
import { ConfigService } from '../core/services/config/config.service';
import { SelectedStatesActions } from '../core/redux/actions/selected-states.action';
import { Injectable } from '@angular/core';
import { menu } from '../core/redux/reducers/menu.reducer';

@Injectable()
export class WorkResolver implements Resolve<any> {

	constructor(
		private router: Router,
		private ngRedux: NgRedux<AppState>,
		private configService: ConfigService,
		private logger: LoggerService,
		private authentication: Authentication,
		private selectedStateActions: SelectedStatesActions,
		private menuActions: MenuActions,
		private trayService: TrayService,
		private snippetService: SnippetService,
	) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		const started = Date.now();
		const observables = [];
		let resolved = true;

		const trayId = route.paramMap.get('trayId');
		const taskId = route.paramMap.get('taskId');

		observables.push(this.resolveTreeTray());
		if (trayId) {
			// observables.push(this.resolveSnippets(trayId)); // TODO continue from here Barry
		}
		const menuItems = this.configService.get(TrayMenuConfig).items;
		this.menuActions.setMenu(menuItems);
		this.selectedStateActions.setSelectedMenuItem(menuItems.find(item => item.label === 'Work'));

		return Observable.create(observer => {
			forkJoin(...observables).pipe(map(results => {
				if (!trayId) {
					this.router.navigate([`/wm/tray/${results[0].tabs[0].panels[0].id}`]);
					resolved = false;
				} else {
					if (!taskId) {
						this.resolveSnippets(trayId);
						// taskId = results[0]
					}

					this.selectedStateActions.setSelectedTray(trayId);
					if (taskId) {
						this.selectedStateActions.setSelectedSnippet(taskId);
					}
				}
				this.logger.info(`Resolver took ${(Date.now() - started)} ms.`);

				observer.next(resolved);
				observer.complete();
			}));
		}).subscribe();
	}

	private resolveTreeTray() {
		return this.trayService.getTrays();
	}

	private resolveSnippets(trayId: string) {
		return this.snippetService.getSnippets(trayId);
	}

	private resolveTransactions(taskId: string) {}
}
