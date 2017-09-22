
import { Action } from '@ngrx/store';
import { Episode } from '../models';

export const LOAD = '[Episode] Load';
export const LOAD_SUCCESS = '[Episode] Load Success';
export const LOAD_FAIL = '[Episode] Load Fail';

export class Load implements Action {
  readonly type = LOAD;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Episode[]) { }
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: string) { }
}

export type Actions =
  | Load
  | LoadSuccess
  | LoadFail;
