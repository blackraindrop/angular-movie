import { Action } from '@ngrx/store';
import { Movie } from '../models/movie';

export const LOAD = '[Movie] Load';
export const LOAD_SUCCESS = '[Movie] Load Success';
export const LOAD_FAIL = '[Movie] Load Fail';
export const SELECT = '[Movie] SELECT';

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

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: Movie) { }
}

export type Actions =
  | Load
  | LoadSuccess
  | LoadFail
  | Select;
