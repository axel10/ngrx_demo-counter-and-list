import {Component, OnInit} from '@angular/core';
import {Num} from '../models/num';
import {Store} from '@ngrx/store';
import {NumActionType} from '../actions/num';

@Component({
  selector: 'app-model-demo',
  templateUrl: './model-demo.component.html',
  styleUrls: ['./model-demo.component.scss']
})
export class ModelDemoComponent implements OnInit {

  constructor(private _store: Store<any>) {
    this._store.select('modelNum').subscribe(mNum => {
      this.num = mNum;
      console.log(mNum);
    });
  }

  public num: Num;

  public add() {
    console.log('add');
    this._store.dispatch({
      type: NumActionType.Add
    });
  }

  ngOnInit() {
  }

}
