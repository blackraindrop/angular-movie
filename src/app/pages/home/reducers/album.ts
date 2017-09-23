import { Album } from '../models/album';
import * as actions from '../actions/album';

export interface State {
  albums: Album[];
}

const initialState: State = {
  albums: []
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.LOAD_SUCCESS:
      return { albums: action.payload };
    case actions.LOAD_FAIL:
    default:
      return state;
  }
}

export const getAlbums = (state: State) => state.albums;
