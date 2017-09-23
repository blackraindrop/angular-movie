import { Movie } from '../models/movie';
import * as actions from '../actions/movie';

export interface State {
  movies: Movie[];
  selectedIndex: number;
}

const initialState: State = {
  movies: [],
  selectedIndex: 0
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.LOAD_SUCCESS:
      return { movies: action.payload, selectedIndex: 0 };
    case actions.SELECT:
      return { ...state, selectedIndex: state.movies.indexOf(action.payload) };
    default:
      return state;
  }
}

export const getMovies = (state: State) => state.movies;
export const getSelectedIndex = (state: State) => state.selectedIndex;
