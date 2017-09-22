import { Action } from '@ngrx/store';
import { Catalog } from '../models/catalog';

export const LOAD = '[Albums] Load';
export const LOAD_SUCCESS = '[Albums] Load Success';
export const LOAD_FAIL = '[Albums] Load Fail';

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

export type Actions =
  | Load
  | LoadSuccess
  | LoadFail;
