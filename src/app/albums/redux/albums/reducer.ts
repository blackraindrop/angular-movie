import { Album } from './model';
import * as album from './action';

export interface State {
  albums: Album[];
}

const initialState: State = {
  albums: []
};

export function reducer(state = initialState, action: album.Actions): State {
  switch (action.type) {
    case album.LOAD_SUCCESS:
      return { albums: action.payload };
    case album.LOAD_FAIL:
    default:
      return state;
  }
}

export const getAlbums = (state: State) => state.albums;
