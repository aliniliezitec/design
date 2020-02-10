import { Component, OnInit } from '@angular/core';
import { TableCodeBlocks } from './table.interface';
import { BehaviorSubject, Subscription } from 'rxjs';
import { every, some } from 'lodash';
import { AppService } from '../../app.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  public data = TableCodeBlocks;
  public paging = {
    currentPage: 1, totalPages: 1, currentRows: 0, totalRows: 0, maxSize: 5,
    perPage$: new BehaviorSubject<number>(20), selectAll: false, someSelected: false,
    tableCondensed$: new BehaviorSubject<boolean>(false)
  };
  public filter = {
    search: new BehaviorSubject(''), searchType: new BehaviorSubject<string>('$or'),
    query: new BehaviorSubject<string>(null), searchFields: ['name'], sub: null
  };
  public sort = { lastSort: '', by: new BehaviorSubject(null), reverse: true, sub: null };
  public subs: { search$: Subscription, sort$: Subscription } = { search$: null, sort$: null };
  public searchFormGroup;
  public searchFor = [];
  public dataTable = [
    {
      name: { value: 'Jon Doe', status: '' },
      email: { value: 'jon@doe.com', status: 'success' },
      company: { value: 'DoeCompany', status: '' }, selected: false
    },
    {
      name: { value: 'Jon Doe', status: '' },
      email: { value: 'jon@doe.com', status: '' },
      company: { value: 'DoeCompany', status: '' }, selected: false
    },
    {
      name: { value: 'Jon', status: 'fail' },
      email: { value: 'jon@doe.com', status: '' },
      company: { value: 'DoeCompany', status: 'fail' }, selected: false
    },
    {
      name: { value: 'Jon Doe', status: '' },
      email: { value: 'jon@doe.com', status: 'success' },
      company: { value: 'DoeCompany', status: '' }, selected: false
    },
    {
      name: { value: 'Jon Doe', status: '' },
      email: { value: 'jon@doe.com', status: '' },
      company: { value: 'DoeCompany', status: '' }, selected: false
    },
    {
      name: { value: 'Jon', status: 'fail' },
      email: { value: 'jon@doe.com', status: '' },
      company: { value: 'DoeCompany', status: 'fail' }, selected: false
    },
  ];

  public dataTableNested = [
    {
      deployment: { value: 'Demo to tech team', },
      status: { value: ['Demo'], },
      numberOfUsers: { value: '1', },
      dateCreated: { value: '01 Jan 2020', },
      selected: false
    },
    {
      deployment: { value: 'Demo PR', },
      status: { value: ['Demo'], },
      numberOfUsers: { value: '5', },
      dateCreated: { value: '01 Jan 2020', },
      selected: false
    },
    {
      deployment: { value: 'Exec Demo', },
      status: { value: ['Demo', 'Staging', 'Production'], },
      numberOfUsers: { value: '12', },
      dateCreated: { value: '01 Jan 2020', },
      childRows: [
        {
          deployment: { value: 'Exec Demo', },
          status: { value: ['Demo'], },
          numberOfUsers: { value: '4', },
          dateCreated: { value: '01 Jan 2020', },
          selected: false
        },
        {
          deployment: { value: 'Exec Demo', },
          status: { value: ['Staging'], },
          numberOfUsers: { value: '4', },
          dateCreated: { value: '01 Jan 2020', },
          selected: false
        },
        {
          deployment: { value: 'Exec Demo', },
          status: { value: ['Production'], },
          numberOfUsers: { value: '4', },
          dateCreated: { value: '01 Jan 2020', },
          childRows: [
            {
              deployment: { value: 'Exec Demo', },
              status: { value: ['Demo'], },
              numberOfUsers: { value: '4', },
              dateCreated: { value: '01 Jan 2020', },
              selected: false
            },
            {
              deployment: { value: 'Exec Demo', },
              status: { value: ['Staging'], },
              numberOfUsers: { value: '4', },
              dateCreated: { value: '01 Jan 2020', },
              selected: false
            },
            {
              deployment: { value: 'Exec Demo', },
              status: { value: ['Production'], },
              numberOfUsers: { value: '4', },
              dateCreated: { value: '01 Jan 2020', },
              selected: false
            },
          ],
          selected: false
        },
      ],
      selected: false
    },
    {
      deployment: { value: 'Demo to tech team', },
      status: { value: ['Demo'], },
      numberOfUsers: { value: '4', },
      dateCreated: { value: '01 Jan 2020', },
      selected: false
    },
    {
      deployment: { value: 'Marketing prod', },
      status: { value: ['Production'], },
      numberOfUsers: { value: '3', },
      dateCreated: { value: '01 Jan 2020', },
      selected: false
    },
    {
      deployment: { value: 'Demo PR', },
      status: { value: ['Demo'], },
      numberOfUsers: { value: '12', },
      dateCreated: { value: '01 Jan 2020', },
      selected: false
    },
  ];

  constructor(public readonly appService: AppService) { }

  ngOnInit() {
  }

  /**
   * Has any selected rows
   */
  public noSelectedRows(): number {
    // -->Cut: the results to new size
    return this.dataTable.filter(r => r.selected).length;
  }
  /**
   * De-Select all
   */
  public deselectAll() {
    // -->Cut: the results to new size
    this.dataTable.map(d => {
      d.selected = false;
      return d;
    });
    this.paging.selectAll = false;
  }

  /**
   * Select all
   */
  public selectAllChange() {
    // -->Cut: the results to new size
    this.dataTable.map(d => {
      d.selected = !this.paging.selectAll;
      return d;
    });
  }

  /**
   * Select any other
   */
  public selectChange($ev, i) {
    // -->Set: the selected
    this.dataTable[i].selected = $ev;
    // -->Cut: the results to new size
    this.paging.selectAll = every(this.dataTable.map(d => d.selected));
    // -->Check: some
    this.paging.someSelected = some(this.dataTable.map(d => d.selected));
  }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }
}
