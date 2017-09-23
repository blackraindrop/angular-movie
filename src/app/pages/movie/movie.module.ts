import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviePageComponent } from './containers/movie-page/movie-page.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  declarations: [MoviePageComponent]
})
export class MovieModule { }
