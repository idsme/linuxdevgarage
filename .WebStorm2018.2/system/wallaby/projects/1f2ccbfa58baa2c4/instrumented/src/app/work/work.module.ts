import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EpoWebcomponentsModule } from '../epo-webcomponents/epo-webcomponents.module';

import { WorkComponent } from './work.component';
import { WorkRoutingModule } from './work.routing';

import { DossierPreviewComponent } from './components/dossierpreview/dossier-preview.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionsDialogComponent } from './components/transactions/transactions-dialog/transactions-dialog.component';
import { TransactionsFormComponent } from './components/transactions/transactions-form/transactions-form.component';
import { ReviewActionDialogComponent } from './components/transactions/review-action-dialog/review-action-dialog.component';
import { DossierHeaderComponent } from './components/transactions/dossier-header/dossier-header.component';

import { TraysComponent } from './components/trays/trays.component';
import { WorkResolver } from './work.resolver';

@NgModule({
	imports: [
		WorkRoutingModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		EpoWebcomponentsModule,
	],
	declarations: [
		DossierHeaderComponent,
		DossierPreviewComponent,
		FiltersComponent,
		SnippetsComponent,
		TransactionsComponent,
		TransactionsDialogComponent,
		TransactionsFormComponent,
		ReviewActionDialogComponent,
		TraysComponent,
		WorkComponent,
	],
	exports: [
		WorkComponent
	],
	providers: [
		WorkResolver,
	]
})
export class WorkModule { }
