import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';

import * as fromMovie from '../reducers';
import * as episodeActions from '../actions/episode';
import * as movieActions from '../actions/movie';

@Injectable()
export class MovieEffects {

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(movieActions.LOAD)
    .switchMap((action: movieActions.Load) =>
      this.service
        .getList(action.payload)
        .map((movies: Movie[]) => new movieActions.LoadSuccess(movies))
        .catch(error => Observable.of(new movieActions.LoadFail(error)))
    );

  @Effect()
  loadSuccess$: Observable<Action> = this.actions$
    .ofType(movieActions.LOAD_SUCCESS)
    .map((action: movieActions.LoadSuccess) => action.payload)
    .withLatestFrom(this.store$.select(fromMovie.getMovieSelectedIndex))
    .map(([movies, index]) => new episodeActions.Load(movies[index].path));

  @Effect()
  select$: Observable<Action> = this.actions$
    .ofType(movieActions.SELECT)
    .map((action: movieActions.Select) => action.payload)
    .map((movie: Movie) => new episodeActions.Load(movie.path));

  constructor(
    private actions$: Actions,
    private service: MovieService,
    private store$: Store<fromMovie.State>
  ) { }
}
