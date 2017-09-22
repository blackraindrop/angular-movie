import { createSelector, createFeatureSelector, StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import * as fromCatalog from './catalog';
import * as fromRoot from '../../core/reducers';

export interface HomeState {
  catalog: fromCatalog.State;
}

export interface State extends fromRoot.State {
  home: HomeState;
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
  fromCatalog.getCatalogs
);

@NgModule({
  imports: []
})
export class HomeStoreModule {

}