import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FlexLayoutModule, BREAKPOINT } from '@angular/flex-layout';
import { CUSTOM_BREAKPOINTS } from './core/flexlayout/custom-breakpoints';

import { StoreModule } from './core/redux/store.module';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';

import { AppInitializer } from './app.initializer';
import { AppRouteModule } from './app-route.module';
import { ActivateGuard } from './core/services/guard/activate.guard';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { EpoWebcomponentsModule } from './epo-webcomponents/epo-webcomponents.module';

import { AccountService } from './core/services/account/account.service';
import { Authentication } from './core/services/authentication/authentication';
import { ConfigService } from './core/services/config/config.service';
import { ConfigMapper } from './core/services/config/config.mapper';
import { ConfigCollector } from './core/services/config/config.collector';

import { LoggerService } from './core/services/logger/logger.service';
import { ConsoleLoggerService } from './core/services/logger/console-logger.service';

import { SelectedStatesActions } from './core/redux/actions/selected-states.action';

import { TrayActions } from './core/redux/actions/tray.action';
import { TrayService } from './core/services/tray/tray.service';

import { SnippetActions } from './core/redux/actions/snippet.action';
import { SnippetService } from './core/services/snippet/snippet.service';
import { MenuActions } from './core/redux/actions/menu.action';

export function appInitializerFactory(appInitializer: AppInitializer): Function {
	return () => appInitializer.init();
}

@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent
	],
	imports: [
		AppRouteModule,
		BrowserModule,
		FlexLayoutModule,
		HttpClientModule,
		StoreModule,
		EpoWebcomponentsModule,
	],
	providers: [
		AccountService,
		ActivateGuard,
		Authentication,
		AppInitializer,
		ConfigService,
		ConfigCollector,
		ConfigMapper,
		MenuActions,
		SelectedStatesActions,
		SnippetActions,
		SnippetService,
		TrayActions,
		TrayService,
		{ provide: APP_INITIALIZER, useFactory: appInitializerFactory, deps: [ AppInitializer ], multi: true },
		{ provide: BREAKPOINT, useValue: CUSTOM_BREAKPOINTS, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
		{ provide: LoggerService, useClass: ConsoleLoggerService }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {
}
