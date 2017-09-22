import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCatalog from './catalog';
import * as fromCatalog1 from './catalog';
import * as fromCatalog2 from './catalog';

import * as fromRoot from '../../core/reducers';

export interface State extends fromRoot.State {
  catalog: fromCatalog.State;
  catalog1: fromCatalog1.State;
  catalog2: fromCatalog2.State;
}


export const reducers = {
  catalog: fromCatalog.reducer,
  catalog1: fromCatalog1.reducer,
  catalog2: fromCatalog2.reducer,
};

export const getHomeState = createFeatureSelector<fromCatalog.State>('catalog');
export const getHomeState1 = createFeatureSelector<fromCatalog1.State>('catalog1');
export const getHomeState2 = createFeatureSelector<fromCatalog2.State>('catalog2');


export const getHomeCatalog1State = createSelector(
  getHomeState,
  state => state
);

export const getHomeCatalog1State = createSelector(
  getHomeState,
  state => state
);

export const getHomeCatalogs = createSelector(
  getHomeCatalogState,
  fromCatalog
);
