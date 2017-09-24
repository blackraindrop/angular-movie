import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';

import { CatalogService } from '../services/catalog.service';
import { Catalog } from '../models/catalog';

import * as fromHome from '../reducers';
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
    .map((action: catalogActions.LoadSuccess) => action.payload)
    .withLatestFrom(this.store$.select(fromHome.getHomeSelectedIndex))
    .map(([catalogs, index]: [Catalog[], number]) => new albumActions.Load(catalogs[index].path));

  @Effect()
  select$: Observable<Action> = this.actions$
    .ofType(catalogActions.SELECT)
    .map((action: catalogActions.Select) => action.payload)
    .map((catalog: Catalog) => new albumActions.Load(catalog.path));

  constructor(
    private actions$: Actions,
    private service: CatalogService,
    private store$: Store<fromHome.State>
  ) { }
}
