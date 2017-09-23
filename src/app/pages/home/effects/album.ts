import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { AlbumsService } from '../services/albums.service';
import { Album } from '../models/album';
import * as album from '../actions/album';

@Injectable()
export class AlbumEffects {

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(album.LOAD)
    .switchMap((action: album.Load) =>
      this.service
        .getList(action.payload)
        .map((albums: Album[]) => new album.LoadSuccess(albums))
        .catch(error => Observable.of(new album.LoadFail(error)))
    );

  constructor(private actions$: Actions, private service: AlbumsService) { }
}
