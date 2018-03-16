import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as list from '../actions/list';
import {State} from '../reducers/list';
import {User} from '../models/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public list: User[];

  constructor(private store: Store<any>) {
    this.store.select('list').subscribe(_list => {
      if (_list) {
        console.log(_list);

        console.log(_list.list);

        this.list = _list.list;
      }
    });
  }

  removeUser(id) {
    console.log(id);
    this.store.dispatch(new list.RemoveUser(id));
  }

  ngOnInit() {
    this.store.dispatch(new list.Load());
  }
}
