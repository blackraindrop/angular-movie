import { Episode } from '../models/episode';
import * as actions from '../actions/episode';

export interface State {
  episode: Episode;
}

export const initialState: State = {
  episode: { url: '' }
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.LOAD_SUCCESS:
      return { episode: action.payload };
    case actions.LOAD_FAIL:
    default:
      return state;
  }
}

export const getEpisode = (state: State) => state.episode;
