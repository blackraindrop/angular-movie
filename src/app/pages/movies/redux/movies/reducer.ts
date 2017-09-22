import { Movie } from './model';
import * as actions from './action';

export interface State {
  movies: Movie[];
}

const initialState: State = {
  movies: []
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.LOAD_SUCCESS:
      return { movies: action.payload };
    case actions.LOAD_FAIL:
    default:
      return state;
  }
}

export const getMovies = (state: State) => state.movies;
