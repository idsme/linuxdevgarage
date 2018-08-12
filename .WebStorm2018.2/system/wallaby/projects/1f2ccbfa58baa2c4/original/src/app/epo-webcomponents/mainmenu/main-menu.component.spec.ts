/*/// <reference path='../../../node_modules/@types/jasmine/index.d.ts'/>

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EpoMainMenuComponent } from './main-menu.component';
import { EpoMainMenuItemComponent } from './main-menu-item.component';

import { EpoFocusDirective } from '../shared/focus.directive';
import { EpoTextFieldComponent } from '../textfield/textfield.component';
import { EpoInlineErrorsComponent } from '../shared/form/inline-errors.component';

import { EpoI18NService } from '../../services/I18NService';
import { EpoDefaultI18NService } from '../../services/defaultI18N.service';
import { EpoRegionService } from '../region/region.service';


describe('EpoMainMenuComponent', () => {

    let selectors = {
        'container':            '.epo-workmanager',
        'button':               '.workmanager-button',
        'items':                '.workmanager-items',
        'item':                 '.workmanager-items li',
        'secondItem':           '.workmanager-items li:nth-child(2)'
    };

    beforeEach( async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                BrowserModule
            ],
            declarations: [
                EpoMainMenuComponent,
                DefaultMenuComponent,
                EpoFocusDirective,
                EpoMainMenuItemComponent,
                EpoTextFieldComponent,
                EpoInlineErrorsComponent
            ],
            providers: [
                EpoRegionService, EpoDefaultI18NService,
                { provide: EpoI18NService, useExisting: EpoDefaultI18NService }
            ]
        }).compileComponents();
    }));

    describe('Default main menu', () => {
        let fixture: ComponentFixture<DefaultMenuComponent>;
        let comp: EpoMainMenuComponent;
        let el: DebugElement;
        let itemsEl: DebugElement;
        let dropdown: HTMLElement;
        let items: HTMLElement;
        let toggleButton: HTMLElement;

        beforeEach(() => {
            fixture = TestBed.createComponent(DefaultMenuComponent);
            comp = fixture.componentInstance.menu;
            fixture.detectChanges();
            el = fixture.debugElement;
            dropdown = el.query(By.css(selectors.container)).nativeElement;
        });

        it('should display the main menu', () => {
            expect(dropdown).toBeDefined();
        });

        it('should display first item name as menu title', () => {
            toggleButton = el.query(By.css(selectors.button)).nativeElement;
            expect(toggleButton.innerHTML).toContain('Work Manager');
        });

        it('should not show the items list', () => {
            itemsEl = el.query(By.css(selectors.items));
            expect(itemsEl).toBeNull;
        });

        describe('Opened', () => {
            beforeEach(() => {
                let button = el.query(By.css(selectors.button)).nativeElement;
                button.click();
                fixture.detectChanges();
            });

            it('should display the items list', () => {
                itemsEl = el.query(By.css(selectors.items));
                expect(itemsEl.nativeElement.childElementCount).toBe(10);
            });

            it('should select the 2nd option from the items list', () => {
                let secondItem = el.query(By.css(selectors.secondItem)).nativeElement;
                secondItem.click();
                fixture.detectChanges();

                toggleButton = el.query(By.css(selectors.button)).nativeElement;
                expect(toggleButton.innerHTML).toContain('Stock Manager');
            });
        });
    });
});

@Component({
    template: `<epo-main-menu [collection]="menuData"></epo-main-menu>`
})
class DefaultMenuComponent {
    menuData: any[] = [
        { 'id': '1', 'label': 'Work Manager', 'url': '/', 'type': 1, 'sequence': 1, 'color': '#228a4b', 'acronym': 'WM' },
        { 'id': '2', 'label': 'Stock Manager', 'url': '/', 'type': 1, 'sequence': 1, 'color': '#541eb8', 'acronym': 'SM' },
        { 'id': '3', 'label': 'Formality Officer', 'url': '/', 'type': 1, 'sequence': 1, 'color': '#228a4b', 'acronym': 'FO' },
        { 'id': '4', 'label': 'Director', 'url': '/', 'type': 1, 'sequence': 1, 'color': '#427ab3', 'acronym': 'D' },
        { 'id': '5', 'label': 'eStore', 'url': '/', 'type': 1, 'sequence': 1, 'color': '#c0433a', 'acronym': 'e' },
        { 'id': '6', 'label': 'My account', 'url': '/', 'type': 2, 'sequence': 1 },
        { 'id': '7', 'label': 'Accounts', 'url': '/', 'type': 2, 'sequence': 1 },
        { 'id': '8', 'label': 'Search', 'url': 'http://www.google.nl', 'type': 3, 'sequence': 1 },
        { 'id': '9', 'label': 'Settings', 'url': '/', 'type': 2, 'sequence': 1 },
        { 'id': '10', 'label': 'External link', 'url': 'http://www.google.nl', 'type': 2, 'sequence': 1, 'external': true }
    ];

    @ViewChild(EpoMainMenuComponent) menu: EpoMainMenuComponent;
}*/
