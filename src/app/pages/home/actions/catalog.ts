import { Action } from '@ngrx/store';
import { Catalog } from '../models/catalog';

export const LOAD = '[Catalog] Load';
export const LOAD_SUCCESS = '[Catalog] Load Success';
export const LOAD_FAIL = '[Catalog] Load Fail';
export const SELECT = '[Catalog] Select';

export class Load implements Action {
  readonly type = LOAD;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Catalog[]) { }
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: string) { }
}

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: Catalog) { }
}

export type Actions =
  | Load
  | LoadSuccess
  | LoadFail
  | Select;
