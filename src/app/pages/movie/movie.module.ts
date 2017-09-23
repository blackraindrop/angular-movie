import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/shared.module';
import { MovieRoutingModule } from './movie-routing.module';

import { EpisodeService } from './services/episode.service';
import { MovieService } from './services/movie.service';

import { MoviesComponent } from './components/movies/movies.component';
import { PlayerComponent } from './components/player/player.component';
import { MoviePageComponent } from './containers/movie-page/movie-page.component';

import { reducers } from './reducers';
import { EpisodeEffects } from './effects/episode';
import { MovieEffects } from './effects/movie';

@NgModule({
  imports: [
    SharedModule,
    MovieRoutingModule,
    StoreModule.forFeature('movie', reducers),
    EffectsModule.forFeature([EpisodeEffects, MovieEffects])
  ],
  declarations: [
    MoviesComponent,
    PlayerComponent,
    MoviePageComponent,
  ],
  providers: [
    EpisodeService,
    MovieService
  ]
})
export class MovieModule { }
