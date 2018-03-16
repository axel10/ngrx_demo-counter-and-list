import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {ListActionType, Load, LoadSuccess, RemoveUser, RemoveUserError, RemoveUserSuccess} from '../actions/list';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ListService} from '../services/ListService';
import {of} from 'rxjs/observable/of';


@Injectable()
export class ListEffects {

  @Effect()
  loadList$: Observable<Action> = this.action$.pipe(
    ofType<Load>(ListActionType.Load),
    switchMap(action => {
      return this.listService.getList().pipe(map(
        users => {
          return new LoadSuccess(users);
        }
      ));
    })
  );

  @Effect()
  removeUser$: Observable<Action> = this.action$.pipe(
    ofType<RemoveUser>(ListActionType.RemoveUser),
    switchMap(_ => {
      return this.listService.removeUser().pipe(
        map(res => {
          console.log(res);
          if (res === 'true') {
            return new RemoveUserSuccess();
          } else {
            return new RemoveUserError();
          }
        }),
        catchError(err => of(new RemoveUserError()))
      );
    })
  );


  constructor(private action$: Actions, private listService: ListService) {
  }

}
