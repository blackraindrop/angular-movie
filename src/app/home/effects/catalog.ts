import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import 'rxjs/add/operator/switchMap';

import { CatalogsService } from '../services';
import { Catalog } from '../models';
import * as actions from '../actions/catalog';

import { Router } from '@angular/router';


@Injectable()
export class CatalogEffects {

  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(actions.LOAD)
    .switchMap(() =>
      this.servcie
        .getList()
        .map((catalogs: Catalog[]) => new actions.LoadSuccess(catalogs))
        .catch(error => Observable.of(new actions.LoadFail(error)))
    );

  @Effect()
  loadSuccess$: Observable<Action> = this.actions$
    .ofType(actions.LOAD_SUCCESS)
    .do((action: actions.LoadSuccess) => this.router.navigate(['/album', action.payload[0].path]));

  constructor(private actions$: Actions, private servcie: CatalogsService, public router: Router) { }
}
