import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { EpisodesService } from '../services';
import { Episode } from '../models';
import * as actions from '../actions/episodes';

@Injectable()
export class EpisodeEffects {

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(actions.LOAD)
    .switchMap(() =>
      this._episode
        .getList()
        .map((catalogs: Episode[]) => new actions.LoadSuccess(catalogs))
        .catch(error => Observable.of(new actions.LoadFail(error)))
    );

  constructor(private actions$: Actions, private _episode: EpisodesService) { }
}
