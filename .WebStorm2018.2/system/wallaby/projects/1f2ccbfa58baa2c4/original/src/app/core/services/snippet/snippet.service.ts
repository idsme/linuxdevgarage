import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { ConfigService } from '../config/config.service';
import { TaskEndpointConfig } from '../config/config.model';
import { Snippet } from '../../model';

import { Observable, of } from 'rxjs';
import { map, tap, startWith, catchError } from 'rxjs/operators';
import { SnippetActions } from './../../../core/redux/actions/snippet.action';

@Injectable()
export class SnippetService {

	private endpoint: TaskEndpointConfig;

	constructor(private http: HttpClient,
				private actions: SnippetActions,
				private configService: ConfigService) {
		this.endpoint = configService.get(TaskEndpointConfig);
	}

	public getSnippets(trayId: string) {
		// return Observable.create(observer => {
			this.http.get(`${this.endpoint.url}/${trayId}/tasks?page[offset]=0&page[limit]=10`)
			.pipe(map((data: Snippet[]) =>  {
				this.actions.loadSucceeded(data);
				// observer.next(data);
				// observer.complete();
			}))
			.pipe(catchError(response => of(this.actions.loadFailed('' + response.status ))))
			.pipe(startWith(this.actions.loadStarted())).subscribe();
		// });
	}
}
