import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ConfigCollector } from './core/services/config/config.collector';
import { ConfigCollectorMock } from './core/services/config/config.collector.mock';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ AppModule ],
			providers: [
				{provide: ConfigCollector, useClass: ConfigCollectorMock}
			]
		}).compileComponents();
	}));
});
