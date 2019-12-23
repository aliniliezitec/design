import { Component, OnInit } from '@angular/core';
import { TableCodeBlocks } from './table.interface';
import { BehaviorSubject, Subscription } from 'rxjs';
import { every, some } from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  public data = TableCodeBlocks;
  public paging = {
    currentPage: 1, totalPages: 1, currentRows: 0, totalRows: 0, maxSize: 5,
    perPage$: new BehaviorSubject<number>(20), selectAll: false, someSelected: false,
    viewRelaxed: true
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

  constructor() { }

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
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = code;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}


// public customizeAccess(data?): void {
//   // NOTICE: this opens a modal and returns the data here! It doesn't submit it by itself!!!!
//   // NOTICE: this opens a modal and returns the data here! It doesn't submit it by itself!!!!
//   // NOTICE: this opens a modal and returns the data here! It doesn't submit it by itself!!!!
//   // -->Open: the modal-ish
//   const modalRef = this.modalService.open(CustomizeUserAccessLevelModalComponent, {
//     centered: true, windowClass: 'nao-modal', backdropClass: 'nao-modal-backdrop', size: 'lg',
//   });
//   // -->Set: data
//   modalRef.componentInstance.data = data;
//   // -->Await: result
//   modalRef.result
//     .then(modalRes => {
//       if (modalRes && modalRes.ok) {
//         // -->Refresh: and add new shit
//         this.refresh();
//       }
//     })
//     .catch(err => {
//       // this.status.error();
//       // this.contactsService.sharedService.swalApiError(err);
//     });
// }