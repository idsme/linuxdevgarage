import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpoAccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: EpoAccordionComponent;
  let fixture: ComponentFixture<EpoAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpoAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpoAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
