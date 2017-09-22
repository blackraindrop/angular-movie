import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCatalog from './episode';
import * as fromRoot from '../../core/reducers';

export interface State extends fromRoot.State {
  catalog: fromCatalog.State;
}

export const reducers = {
  catalog: fromCatalog.reducer
};

export const getHomeState = createFeatureSelector<HomeState>('home');

export const getHomeCatalogState = createSelector(
  getHomeState,
  state => state.catalog
);

export const getHomeCatalogs = createSelector(
  getHomeCatalogState,
  fromCatalog.getEpisodes
);
