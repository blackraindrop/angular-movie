import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot({ routerReducer: routerReducer }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument()
  ]
})
export class AppStoreModule { }
