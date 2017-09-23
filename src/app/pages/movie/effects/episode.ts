import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { EpisodeService } from '../services/episode.service';
import { Episode } from '../models/episode';

import * as actions from '../actions/episode';

@Injectable()
export class EpisodeEffects {

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(actions.LOAD)
    .switchMap((action: actions.Load) =>
      this.service
        .getItem(action.payload)
        .map((episode: Episode) => new actions.LoadSuccess(episode))
        .catch(error => Observable.of(new actions.LoadFail(error)))
    );

  constructor(
    private actions$: Actions,
    private service: EpisodeService
  ) { }
}
