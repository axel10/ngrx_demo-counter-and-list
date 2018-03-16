import {Action} from '@ngrx/store';


export const todos = (state: number = 0, action: Action) => {
  switch (action.type) {
    case 'ADD':
      return ++state;
    default:
      return state;
  }
};
