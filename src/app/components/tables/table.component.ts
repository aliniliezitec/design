import { Component, OnInit } from '@angular/core';
import { TableCodeBlocks } from './table.interface';
import { BehaviorSubject, Subscription } from 'rxjs';
import { every, some } from 'lodash';
import { AppService } from '../../app.service';

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
    { name: 'Jon Doe', email: 'jon@doe.com', company: 'DoeCompany', selected: false },
    { name: 'Jon Doe', email: 'jon@doe.com', company: 'DoeCompany', selected: false },
    { name: 'Jon Doe', email: 'jon@doe.com', company: 'DoeCompany', selected: false },
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
