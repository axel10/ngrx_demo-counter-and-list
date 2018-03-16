import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as list from '../actions/list';
import {User} from '../models/user';

@Component({
  selector: 'app-list-body',
  templateUrl: './list-body.component.html',
  styleUrls: ['./list-body.component.scss']
})
export class ListBodyComponent implements OnInit {
  public list: User[];

  constructor(private store: Store<any>) {
    this.store.select('list').subscribe(_list => {
      if (_list) {
        this.list = _list.list;
      }
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch(new list.RemoveUser(1));
    }, 1000);
  }

}
