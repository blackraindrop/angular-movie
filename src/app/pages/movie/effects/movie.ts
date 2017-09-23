import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';

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
  select$: Observable<Action> = this.actions$
    .ofType(movieActions.SELECT)
    .map((action: movieActions.Select) => new episodeActions.Load(action.payload.path));

  constructor(
    private actions$: Actions,
    private service: MovieService
  ) { }
}
