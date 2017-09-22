import { Catalog } from '../models/catalog';
import * as actions from '../actions/catalog';

export interface State {
  catalogs: Catalog[];
}

const initialState: State = {
  catalogs: []
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.LOAD_SUCCESS:
      return { catalogs: action.payload };
    case actions.LOAD_FAIL:
    default:
      return state;
  }
}

export const getCatalogs = (state: State) => state.catalogs;
