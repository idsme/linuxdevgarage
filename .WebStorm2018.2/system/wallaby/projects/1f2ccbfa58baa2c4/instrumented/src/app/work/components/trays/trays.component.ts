import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { TrayMenuConfig } from '../../../core/services/config/config.model';

import { Authentication } from './../../../core/services/authentication/authentication';
import { ConfigService } from '../../../core/services/config/config.service';
import { EpoTree } from '../../../core/model';
import { EpoMainMenuItem } from '../../../epo-webcomponents/mainmenu/main-menu-item.model';

interface MenuItem {
	id: number;
	label: string;
	url: string;
	type: number;
	sequence: number;
	color: string;
	acronym: string;
	external: boolean;
}

@Component({
	selector: 'eds-trays',
	templateUrl: './trays.component.html',
	styleUrls: ['./trays.component.scss']
})
export class TraysComponent implements OnInit {

	@select([ 'trayTree', 'tabs' ])
	readonly tabs$: Observable<any>;

	@select(['menu', 'items'])
	readonly menuItems$: Observable<EpoMainMenuItem>;

	@select(['selectedStates', 'selectedMenuItem'])
	readonly selectedMenuItem$: Observable<EpoMainMenuItem>;

	public menu: EpoMainMenuItem[];
	public selectedItem: EpoMainMenuItem;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private authentication: Authentication,
		private configService: ConfigService) {}

	ngOnInit() {
		this.menu = this.configService.get(TrayMenuConfig).items;
		this.selectedItem = this.menu[0];
	}

	menuItemSelected(item: EpoMainMenuItem) {
		window.open(item.url);
	}

	public trayClicked(event: any) {
		const userId = this.activatedRoute.snapshot.paramMap.get('userId');
		const moduleId = this.activatedRoute.snapshot.paramMap.get('moduleId');
		this.router.navigate([`/wm/tray/${event.id}`], { queryParamsHandling: 'preserve' });
	}

}
