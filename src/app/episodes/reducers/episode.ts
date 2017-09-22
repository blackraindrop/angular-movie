
import { Episode } from '../models';
import * as actions from '../actions/episodes';

export interface State {
  episodes: Episode[];
}

const initialState: State = {
  episodes: []
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.LOAD_SUCCESS:
      return { episodes: action.payload };
    case actions.LOAD_FAIL:
    default:
      return state;
  }
}

export const getEpisodes = (state: State) => state.episodes;
