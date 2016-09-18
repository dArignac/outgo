import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Expense } from './expense';


@Injectable()
export class ExpenseService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private expensesUrl = 'app/expenses';  // URL to web api

  constructor(private http: Http) { }

  getExpenses(): Promise<Expense[]> {
    return this.http.get(this.expensesUrl)
      .toPromise()
      .then(response => response.json().data as Expense[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // FIXME this is not production ready
    console.log('Error occurred', error);
    return Promise.reject(error.message || error);
  }
}