import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { CatalogsService } from '../services/catalogs.service';
import { Catalog } from '../models/catalog';
import * as catalog from '../actions/catalog';

@Injectable()
export class CatalogEffects {

  @Effect()
  loadCatalogs$: Observable<Action> = this.actions$
    .ofType(catalog.LOAD)
    .switchMap(() =>
      this.catalogsService
        .getCatalogs()
        .map((catalogs: Catalog[]) => new catalog.LoadSuccess(catalogs))
        .catch(error => Observable.of(new catalog.LoadFail(error)))
    );

  @Effect({ dispatch: false })
  gotoAlbum$: Observable<Action> = this.actions$
    .ofType(catalog.LOAD_SUCCESS)
    .do((action: catalog.LoadSuccess) => {
      console.log(action);
    });

  constructor(private actions$: Actions, private catalogsService: CatalogsService) { }
}
