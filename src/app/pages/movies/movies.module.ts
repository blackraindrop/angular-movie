import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { StoreModule } from '@ngrx/store';
import * as reducers from './redux';
import { MoviesComponent } from './movies.component';
@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    StoreModule.forFeature('movies', reducers.reducers)
  ],
  declarations: [MoviesComponent]
})
export class MoviesModule { }
