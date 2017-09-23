import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { CatalogService } from '../services/catalog.service';
import { Catalog } from '../models/catalog';

import * as albumActions from '../actions/album';
import * as catalogActions from '../actions/catalog';

@Injectable()
export class CatalogEffects {

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(catalogActions.LOAD)
    .switchMap(() =>
      this.service
        .getList()
        .map((catalogs: Catalog[]) => new catalogActions.LoadSuccess(catalogs))
        .catch(error => Observable.of(new catalogActions.LoadFail(error)))
    );

  @Effect()
  loadSuccess$: Observable<Action> = this.actions$
    .ofType(catalogActions.LOAD_SUCCESS)
    .map((action: catalogActions.LoadSuccess) => new albumActions.Load(action.payload[0].path));

  @Effect()
  select$: Observable<Action> = this.actions$
    .ofType(catalogActions.SELECT)
    .map((action: catalogActions.Select) => new albumActions.Load(action.payload.path));

  constructor(
    private actions$: Actions,
    private service: CatalogService
  ) { }
}
