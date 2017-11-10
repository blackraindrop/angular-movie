import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

import * as actions from '../actions/album';

@Injectable()
export class AlbumEffects {

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(actions.LOAD)
    .switchMap((action: actions.Load) =>
      this.service
        .getList(action.payload)
        .map((albums: Album[]) => new actions.LoadSuccess(albums))
        .catch(error => Observable.of(new actions.LoadFail(error)))
    );

  @Effect({ dispatch: false })
  select$: Observable<Action> = this.actions$
    .ofType(actions.SELECT)
    .do((action: actions.Select) =>
      this.router.navigate(['/movie'], { queryParams: { path: action.payload.path } })
    );

  constructor(
    private actions$: Actions,
    private service: AlbumService,
    private router: Router
  ) { }
}
