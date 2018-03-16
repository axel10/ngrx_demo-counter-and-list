import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ModelDemoComponent} from './model-demo/model-demo.component';
import {ListComponent} from './list/list.component';


export const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'model',
    component: ModelDemoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

