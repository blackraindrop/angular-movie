import { Action } from '@ngrx/store';
import { Album } from '../models/album';

export const LOAD = '[Album] Load';
export const LOAD_SUCCESS = '[Album] Load Success';
export const LOAD_FAIL = '[Album] Load Fail';

export class Load implements Action {
  readonly type = LOAD;

  constructor(public payload: string) { }
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Album[]) { }
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: string) { }
}

export type Actions =
  | Load
  | LoadSuccess
  | LoadFail;
