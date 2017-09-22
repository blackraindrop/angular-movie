import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCatalog from './albums/reducer';
import * as fromRoot from '../../core/reducers';

export interface AlbumState {
  album: fromCatalog.State;
}

export interface State extends fromRoot.State {
  album: AlbumState;
}

export const reducers = {
    catalog: fromCatalog.reducer
};

export const getState = createFeatureSelector<AlbumState>('album');

export const getAlbumsState = createSelector(
    getState,
    state => state.album
);

export const getHomeCatalogs = createSelector(
    getAlbumsState,
    fromCatalog.getAlbums
);
