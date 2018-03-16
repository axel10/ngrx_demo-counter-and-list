import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Num} from '../models/num';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public num: number;

  constructor(private _store: Store<any>) {
    this._store.select('todos').subscribe(num => {
      this.num = num;
    });
  }

  add() {
    console.log('add');
    this._store.dispatch({
      type: 'ADD'
    });
  }

  ngOnInit() {
  }


}
