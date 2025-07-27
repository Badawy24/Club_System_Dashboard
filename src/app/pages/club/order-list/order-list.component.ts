import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/table/table.component';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {
  title="Order List"
  columns = [
    { key: 'id', label: 'Order ID' },
    { key: 'player', label: 'Player Name' },
    { key: 'trainer', label: 'Trainer Name' },
    { key: 'sport', label: 'Sport Type' },
    { key: 'date', label: 'Due Date' },
    { key: 'amount', label: 'Total Amount' },
    { key: 'status', label: 'Status' }
  ];

  tableData = [
    {
      id: '#1',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Accepted'

    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Pending'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Canceled'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Pending'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },
    {
      id: '#12344477',
      player: 'Nelsa web developement',
      trainer: 'Om prakash sao',
      sport: 'Football 5x5',
      date: 'May 25, 2023',
      amount: '1500 EGP',
      status: 'Done'
    },

  ];

}
