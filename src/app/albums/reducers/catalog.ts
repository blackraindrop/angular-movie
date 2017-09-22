import { Album } from '../models';
import * as album from '../actions/catalog';

export interface State {
  catalogs: Album[];
}

const initialState: State = {
  catalogs: []
};

export function reducer(state = initialState, action: album.Actions): State {
  switch (action.type) {
    case album.LOAD_SUCCESS:
      return { catalogs: action.payload };
    case album.LOAD_FAIL:
    default:
      return state;
  }
}

export const getAlbum = (state: State) => state.catalogs;
