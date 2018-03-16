import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {StoreModule} from '@ngrx/store';
import {todos} from './reducers/todos';
import {ModelDemoComponent} from './model-demo/model-demo.component';
import {modelNum} from './reducers/modelNum';
import {list} from './reducers/list';
import {ListComponent} from './list/list.component';
import {EffectsModule} from '@ngrx/effects';
import {ListEffects} from './effects/list';
import {ListService} from './services/ListService';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ListBodyComponent } from './list-body/list-body.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ModelDemoComponent,
    ListComponent,
    ListBodyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({todos, modelNum, list}),
    EffectsModule.forRoot([ListEffects]),
    HttpClientModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
