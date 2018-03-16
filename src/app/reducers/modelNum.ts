import {Num} from '../models/num';
import {Action} from '@ngrx/store';
import {NumActionType} from '../actions/num';


export const modelNum = (state: Num = new Num(0), action: Action) => {
  switch (action.type) {
    case NumActionType.Add:
      state.count++;
      return state;
    default:
      return state;
  }
};
