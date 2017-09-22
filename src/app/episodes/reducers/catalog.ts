import { Catalog } from '../models/catalog';
import * as catalog from '../actions/catalog';

export interface State {
  catalogs: Catalog[];
}

const initialState: State = {
  catalogs: []
};

export function reducer(state = initialState, action: catalog.Actions): State {
  switch (action.type) {
    case catalog.LOAD_SUCCESS:
      return { catalogs: action.payload };
    case catalog.LOAD_FAIL:
    default:
      return state;
  }
}

export const getCatalogs = (state: State) => state.catalogs;
