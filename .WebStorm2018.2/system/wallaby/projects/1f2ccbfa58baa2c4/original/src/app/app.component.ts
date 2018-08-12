import { Component } from '@angular/core';
import { ConfigService } from './core/services/config/config.service';
import { AccountEndpointConfig } from './core/services/config/config.model';

@Component({
	selector: 'eds-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	constructor(private configService: ConfigService) {
		const endpoint = configService.get(AccountEndpointConfig);
	}
}
