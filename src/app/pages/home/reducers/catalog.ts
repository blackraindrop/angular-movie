import { Catalog } from '../models/catalog';
import * as actions from '../actions/catalog';

export interface State {
  catalogs: Catalog[];
  selectedIndex: number;
}

const initialState: State = {
  catalogs: [],
  selectedIndex: 0
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.LOAD_SUCCESS:
      return { ...state, catalogs: action.payload };
    case actions.SELECT:
      return { ...state, selectedIndex: state.catalogs.indexOf(action.payload) };
    default:
      return state;
  }
}

export const getCatalogs = (state: State) => state.catalogs;
export const getSelectedIndex = (state) => state.selectedIndex;
