import { Action } from '@ngrx/store';
import { Class } from '../models/class';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 * 
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique. 
 */
export const ActionTypes = {
    LOAD: '[MOVIES] LOAD'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class LoadAction implements Action {
  type = ActionTypes.VERB;

  constructor(public payload: payloadType) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = VerbAction;
  //| AnotherAction