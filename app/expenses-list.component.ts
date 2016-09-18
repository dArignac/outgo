import { Component } from '@angular/core';
import { OnInit }    from '@angular/core';

import { ExpenseService } from './expense.service';

@Component({
  selector: 'og-expenses-list',
  templateUrl: 'app/expenses-list.component.html',
})

export class ExpensesListComponent implements OnInit {
  expenses = [];

  constructor(
    private expenseService: ExpenseService
  ) { }

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses(): void {
    this.expenseService.getExpenses().then(expenses => this.expenses = expenses);
  }
}
