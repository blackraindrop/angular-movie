import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { StoreModule } from '@ngrx/store';
import * as reducers from './reducers';
@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    StoreModule.forFeature(reducers.reducers)
  ],
  declarations: []
})
export class MoviesModule { }
