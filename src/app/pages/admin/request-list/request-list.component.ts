import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-list',
  standalone: true,
  imports: [TableComponent,CommonModule],
  templateUrl: './request-list.component.html',
  styleUrl: './request-list.component.css'
})
export class RequestListComponent {
  openedAction: string | null = null;

toggleAction(row: any) {
  this.openedAction = this.openedAction === row.id ? null : row.id;
}

view(row: any) {
  alert(`Viewing: ${row.id}`);
  this.openedAction = null;
}

delete(row: any) {
  alert(`Deleting: ${row.id}`);
  this.openedAction = null;
}
title="Requests"

  columns = [
    { key: 'id', label: 'Request ID' },
    { key: 'player', label: 'Player Name' },
    { key: 'trainer', label: 'Trainer Name' },
    { key: 'sport', label: 'Sport Type' },
    { key: 'date', label: 'Due Date' },
    { key: 'amount', label: 'Total Amount' },
    { key: 'status', label: 'Status' },
    { key: 'action', label: 'Action' }

  ];

  tableData = [
    {
      id: '#1',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Accepted',

    },
        {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done',
    },

  ];
}
