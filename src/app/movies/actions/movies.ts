import { Action } from '@ngrx/store';
import { Movie } from '../models/movie';

export const LOAD = '[Catalog] Load';
export const LOAD_SUCCESS = '[Catalog] Load Success';
export const LOAD_FAIL = '[Catalog] Load Fail';

export class Load implements Action {
  readonly type = LOAD;
  constructor(public payload: string) { }
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Movie[]) { }
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: string) { }
}

export type Actions =
  | Load
  | LoadSuccess
  | LoadFail;
