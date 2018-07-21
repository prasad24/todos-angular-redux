import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { TodosService } from './redux/todos.service';
import { store } from './redux/store';
import { IAppState } from './interfaces/appState';
import { FormsModule } from '@angular/forms';
//required if you use configureStore instead of provideStore for ngRedux
import { rootReducer, INITIAL_STORE_STATE } from './redux/reducers';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule
  ],
  providers: [
    TodosService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store)
    //or you could use
    // ngRedux.configureStore(rootReducer, INITIAL_STORE_STATE);
  }
}
