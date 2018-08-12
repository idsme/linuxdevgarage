import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ConfigService } from '../../../../core/services/config/config.service';
import { TransactionsConfig } from '../../../../core/services/config/config.model';

@Component({
	selector: 'eds-review-action-dialog',
	templateUrl: './review-action-dialog.component.html'
})
export class ReviewActionDialogComponent implements OnInit {

	@Output() dialogVisible = new EventEmitter();

	public configData: any;

	constructor(private configService: ConfigService) { }

	ngOnInit(): void {
		// TODO from hard coded to getting current taskTypeId from redux store
		const configData: any[] = this.configService.get(TransactionsConfig)['transactions'];
		this.configData = configData.find((obj) => obj.taskTypeName === 'H_MP-SEARCH.01_CREATE-COMM')['taskTypeData'];
	}

	public closeDialog() {
		this.dialogVisible.emit(false);
	}
}
