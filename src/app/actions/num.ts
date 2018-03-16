import {Action} from '@ngrx/store';

export enum NumActionType {
  Add = 'ADD'
}

export class ADD implements Action {
  readonly type = NumActionType.Add;
}
