import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/table/table.component';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css'
})
export class TransactionHistoryComponent {
  
  title = "Transaction History"

  columns = [
    { key: 'id', label: 'Transaction ID' },
    { key: 'trainer', label: 'Trainer Name' },
    { key: 'sport', label: 'Sport Type' },
    { key: 'date', label: 'Transaction Date' },
    { key: 'amount', label: 'Total Amount' },
    { key: 'status', label: 'Status' },
  ];

  tableData = [
    {
      id: '#1',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Accepted',

    },
        {
      id: '#12344477',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done',
    },

  ];
}
