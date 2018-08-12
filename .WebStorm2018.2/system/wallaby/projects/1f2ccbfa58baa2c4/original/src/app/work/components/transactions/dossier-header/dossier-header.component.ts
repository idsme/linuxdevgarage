import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from './../../../../core/services/config/config.service';
import { TransactionsConfig } from './../../../../core/services/config/config.model';

@Component({
	selector: 'eds-dossier-header',
	templateUrl: './dossier-header.component.html',
	styleUrls: ['./dossier-header.component.scss']
})
export class DossierHeaderComponent implements OnInit {

	public configData: any;

	public dossierWorkspace = '#';
	public dossierTitle = 'Multi-panel sunroof module for an automobile vehicle';

	constructor(
		private configService: ConfigService
	) {
	}

	ngOnInit(): void {
		// TODO from hard coded to getting current taskTypeId from redux store
		const configData: any[] = this.configService.get(TransactionsConfig)['transactions'];
		this.configData = configData.find((obj) => obj.taskTypeName === 'H_MP-SEARCH.01_CREATE-COMM')['taskTypeData'];
	}

}
