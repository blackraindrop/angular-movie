import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMovie from './movies/reducer';
import * as fromRoot from '@core/reducers';

export interface State extends fromRoot.State {
  movies: fromMovie.State;
}


export const reducers = {
  movies: fromMovie.reducer
};

const getHomeState = createFeatureSelector<fromMovie.State>('catalog');
const getMovieState = createSelector(
  getHomeState,
  state => state.movies
);

export const getMoviesState = createSelector(
  getHomeState,
  state => state.movies
);

