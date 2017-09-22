import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { MoviesService } from './service';
import { Movie } from './model';
import * as actions from './action';

@Injectable()
export class AlbumEffects {

  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(actions.LOAD)
    .switchMap(() =>
      this._albums
        .getList()
        .map((catalogs: Movie[]) => new actions.LoadSuccess(catalogs))
        .catch(error => Observable.of(new actions.LoadFail(error)))
    );

  constructor(private actions$: Actions, private _albums: MoviesService) { }
}
