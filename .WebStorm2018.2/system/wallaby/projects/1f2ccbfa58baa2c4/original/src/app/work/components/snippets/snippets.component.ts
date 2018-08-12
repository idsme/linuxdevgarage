import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { Snippet } from '../../../core/model';
import { SnippetService } from './../../../core/services/snippet/snippet.service';

@Component({
	selector: 'eds-snippets',
	templateUrl: './snippets.component.html',
	styleUrls: ['./snippet.component.scss']
})
export class SnippetsComponent implements OnInit {
	@select(['snippets', 'data'])
	readonly snippets$: Observable<any>;

	@select(['selectedStates', 'selectedTray'])
	readonly selectedTray$: Observable<any>;

	@Output() public selectedSnippet = new EventEmitter();

	public snippetList: Snippet[];
	// TODO IDSME=>WALTER What is the purpose of this
	public routingString: string;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private snippetService: SnippetService) { }

	ngOnInit() {

		this.selectedTray$.subscribe(res => {
			// When the selected tray id changes so we dispatch a new dispatch to load snippets
			this.snippetService.getSnippets(this.activatedRoute.snapshot.paramMap.get('trayId'));
		});

		this.snippets$.subscribe(res => {
			if (res) { this.snippetList = res; }
		});
	}

	public selectSnippet(snippet: any) {
	  // TODO IDSME=>WALTER what  needs tobe done.. obviously this is not complete.
		const userId = this.activatedRoute.snapshot.paramMap.get('userId');
		const moduleId = this.activatedRoute.snapshot.paramMap.get('moduleId');
		const trayId = this.activatedRoute.snapshot.paramMap.get('trayId');
		this.router.navigate([`/wm/tray/${trayId}/task/${snippet.id}`], { queryParamsHandling: 'preserve' });
	}
}
