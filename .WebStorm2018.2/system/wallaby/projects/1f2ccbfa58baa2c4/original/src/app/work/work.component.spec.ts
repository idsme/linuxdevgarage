import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkComponent } from './work.component';
import {WorkModule} from './work.module';
import {AppModule} from '../app.module';
import {ConfigCollectorMock} from '../core/services/config/config.collector.mock';
import {ConfigCollector} from '../core/services/config/config.collector';

describe('WorkComponent', () => {
	let component: WorkComponent;
	let fixture: ComponentFixture<WorkComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				AppModule,
				WorkModule,
			],
			providers: [
				{provide: ConfigCollector, useClass: ConfigCollectorMock }
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WorkComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

/*    it('should create', () => {
        expect(component).toBeTruthy();
    });*/
});
