import { Component, OnInit } from '@angular/core';
import { ReviewActionDialogComponent } from './../review-action-dialog/review-action-dialog.component';
import { ConfigService } from './../../../../core/services/config/config.service';
import { TransactionsConfig } from '../../../../core/services/config/config.model';

@Component({
	selector: 'eds-transactions-form',
	templateUrl: './transactions-form.component.html'
})
export class TransactionsFormComponent implements OnInit {

	public configData: any;
	public showDialog = false;

	// CASE FORM vars
	private caseTool = '#';
	private caseLink = 'CASE evaluation tool';
	private caseDescription = `Please go to the CASE tool via the link below, and perform the CASE evaluation.
        Please reproduce the outcome of the CASE evaluation by selecting 'Yes' or 'No' in the dialogue below.`;
	private caseQuestion = 'Is this search conforming?';

	// SECA FORM vars
	private secaQuestion = 'Does this case contain potentially sensitive matter';

	constructor(
		private configService: ConfigService) {

	}

	ngOnInit() {
		// TODO from hard coded to getting current taskTypeId from redux store
		const configData: any[] = this.configService.get(TransactionsConfig)['transactions'];
		this.configData = configData.find((obj) => obj.taskTypeName === 'H_MP-SEARCH.01_CREATE-COMM')['taskTypeData'];
	}

	public toggleDialog(showDialog: boolean) {
		this.showDialog = showDialog;
	}

	public radioBtnState() {
		if (this.configData.form.selectedOption === 'Undecided') {
			return true;
		} else { return false; }
	}
}
