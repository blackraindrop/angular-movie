import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviePageComponent } from './containers/movie-page/movie-page.component';

const routes: Routes = [
  { path: '', component: MoviePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
