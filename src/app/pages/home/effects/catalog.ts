import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { CatalogsService } from '../services/catalogs.service';
import { Catalog } from '../models/catalog';

import * as album from '../actions/album';
import * as catalog from '../actions/catalog';

@Injectable()
export class CatalogEffects {

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(catalog.LOAD)
    .switchMap(() =>
      this.service
        .getList()
        .map((catalogs: Catalog[]) => new catalog.LoadSuccess(catalogs))
        .catch(error => Observable.of(new catalog.LoadFail(error)))
    );

  @Effect()
  loadSuccess$: Observable<Action> = this.actions$
    .ofType(catalog.LOAD_SUCCESS)
    .map((action: catalog.LoadSuccess) => new album.Load(action.payload[1].path));

  @Effect()
  select$: Observable<Action> = this.actions$
    .ofType(catalog.SELECT)
    .map((action: catalog.Select) => new album.Load(action.payload.path));

  constructor(private actions$: Actions, private service: CatalogsService) { }
}
