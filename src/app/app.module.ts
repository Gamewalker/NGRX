import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {RouterModule} from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'entity',
        pathMatch: 'full'
      },
      {
        path: 'entity',
        loadChildren: () =>
          import('./test-module-entity/test-module-entity.module').then(
            (m) => m.TestModuleEntityModule
          )
      },
      {
        path: 'feature',
        loadChildren: () =>
          import('./test-module-feature/test-module-feature.module').then(
            (m) => m.TestModuleFeatureModule
          )
      },
      {
        path: '**',
        redirectTo: 'entity'
      }
    ]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
