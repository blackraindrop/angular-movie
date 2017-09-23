import { NgModule } from '@angular/core';

import { createSelector, createFeatureSelector, StoreModule } from '@ngrx/store';

import * as fromEpisode from './episode';
import * as fromMovie from './movie';

import * as fromRoot from '@core/reducers';

export interface MovieState {
  movie: fromMovie.State;
  episode: fromEpisode.State;
}

export interface State extends fromRoot.State {
  movie: MovieState;
}

export const reducers = {
  movie: fromMovie.reducer,
  episode: fromEpisode.reducer
};

export const getMovieState = createFeatureSelector<MovieState>('movie');

export const getMovieMovieState = createSelector(
  getMovieState,
  state => state.movie
);

export const getMovieEpisodeState = createSelector(
  getMovieState,
  state => state.episode
);

export const getMovieMovies = createSelector(
  getMovieMovieState,
  fromMovie.getMovies
);

export const getMovieEpisode = createSelector(
  getMovieEpisodeState,
  fromEpisode.getEpisode
);
