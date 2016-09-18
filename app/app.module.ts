import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }          from './app.component';
import { ExpensesListComponent } from './expenses-list.component';
import { ExpenseService }        from './expense.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    ExpensesListComponent
  ],
  providers: [
    ExpenseService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
