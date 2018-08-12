import { Component, OnInit } from '@angular/core';

import { ConfigService } from './../../../../core/services/config/config.service';
import { TransactionsConfig } from './../../../../core/services/config/config.model';

@Component({
	selector: 'eds-transactions-dialog',
	templateUrl: './transactions-dialog.component.html',
	styleUrls: ['./transactions-dialog.component.scss']
})
export class TransactionsDialogComponent implements OnInit {

	public configData: any;

	public positiveOpinion = false;
	public dueDate = new Date('2018-08-27');
	public state = 'In progress';
	public communicationType = 'STSE-Standard Search + Search Opinion';
	public existComments = false;
	public comments = 'Comment text comes here. Comment text comes here. Comment text comes here. Comment text comes here';
	public timeStamp: number = Date.now();

	constructor(
		private configService: ConfigService
	) {

	}

	ngOnInit() {
		// TODO from hard coded to getting current taskTypeId from redux store
		const configData: any[] = this.configService.get(TransactionsConfig)['transactions'];
		this.configData = configData.find((obj) => obj.taskTypeName === 'H_MP-SEARCH.01_CREATE-COMM')['taskTypeData'];
	}

}
