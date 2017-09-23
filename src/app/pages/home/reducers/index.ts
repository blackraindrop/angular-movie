import { NgModule } from '@angular/core';

import { createSelector, createFeatureSelector, StoreModule } from '@ngrx/store';

import * as fromAlbum from './album';
import * as fromCatalog from './catalog';

import * as fromRoot from '@core/reducers';

export interface HomeState {
  album: fromAlbum.State;
  catalog: fromCatalog.State;
}

export interface State extends fromRoot.State {
  home: HomeState;
}

export const reducers = {
  album: fromAlbum.reducer,
  catalog: fromCatalog.reducer
};

export const getHomeState = createFeatureSelector<HomeState>('home');

export const getHomeAlbumState = createSelector(
  getHomeState,
  state => state.album
);

export const getHomeCatalogState = createSelector(
  getHomeState,
  state => state.catalog
);

export const getHomeAlbums = createSelector(
  getHomeAlbumState,
  fromAlbum.getAlbums
);

export const getHomeCatalogs = createSelector(
  getHomeCatalogState,
  fromCatalog.getCatalogs
);
