import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { ConfigService } from '../config/config.service';
import { TabConfig, TabsConfig, TrayEndpointConfig, TrayTreeConfig } from '../config/config.model';
import { Tray, TrayModule, TrayTree, TrayTreeTab } from '../../model';

import { Observable, of } from 'rxjs';
import { map, tap, startWith, catchError } from 'rxjs/operators';
import { TrayActions, TrayAction } from './../../../core/redux/actions/tray.action';
import { Authentication } from '../authentication/authentication';

@Injectable()
export class TrayService {

	private endpoint: TrayEndpointConfig;
	private tabConfigs: TabConfig[];

	constructor(private http: HttpClient,
				private actions: TrayActions,
				private configService: ConfigService,
				private authentication: Authentication) {
		this.endpoint = configService.get(TrayEndpointConfig);
		this.tabConfigs = configService.get(TabsConfig).tabs
			.filter(tabConfig => {
				return authentication.hasPermission(tabConfig.permission) && !this.authentication.hasPermission(tabConfig.permissionDenied);
			});
	}

	public getTrays(): Observable<TrayTree> {
		return Observable.create(observer => {
				this.http.get(`${this.endpoint.url}`)
				.pipe(map((trayModules: TrayModule[]) =>  {
					const tabs = this.tabConfigs.reduce<TrayTreeTab[]>((result, config) => {
						const panels: Tray[] = trayModules
							.filter(trayModule => config.moduleIds.indexOf(trayModule.name) > -1)
							.reduce<Tray[]>((filteredTrays, trayModule) => {
								return filteredTrays.concat(trayModule.trays.filter(tray => tray.parentId === null));
							}, []);

						const trays: Tray[] = trayModules
							.filter(trayModule => config.moduleIds.indexOf(trayModule.name) > -1)
							.reduce<Tray[]>((filteredTrays, trayModule) => {
								return filteredTrays.concat(trayModule.trays.filter(tray => tray.parentId !== null));
							}, []);

						result.push(<TrayTreeTab> {
							label: config.label,
							panels: panels,
							trays: trays
						});
						return result;
					}, []);

					const trayTree: TrayTree = {
						tabs: tabs,
						loading: false
					};
					this.actions.loadSucceeded(trayTree);
					observer.next(trayTree);
					observer.complete();
				}))
				.pipe(catchError(response => of(this.actions.loadFailed('' + response.status ))))
				.pipe(startWith(this.actions.loadStarted())).subscribe();
		});
	}
}
