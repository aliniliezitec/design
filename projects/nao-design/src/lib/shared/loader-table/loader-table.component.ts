import { Component, Input, OnInit } from '@angular/core';
import { range } from 'lodash';

@Component({
  selector: 'loader-table',
  templateUrl: './loader-table.component.html',
  styles: [`
    .loader-table {
      animation: fadeIn 1s infinite alternate;
      margin: 0px;
    }

    .row-loading {
      height: 56px;
      align-items: center;
      display: flex;
    }

    .row-loading-condensed {
      height: 36px;
    }

    .icon-loading {
      background-color: var(--lighter);
      min-width: 28px;
      min-height: 28px;
      border-radius: 14px;
      margin-right: 10px;
      margin-left: 12px;
    }

    .checkbox-loading {
      background-color: var(--lighter);
      min-width: 18px;
      min-height: 18px;
      border-radius: 3px;
      margin-right: 22px;
      margin-left: 33px;
    }

    .content-loading {
      align-self: center;
      border-radius: 4px;
      background-color: var(--lighter);
      width: 100%;
      min-height: 16px;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
    }
  `]
})
export class LoaderTableComponent implements OnInit {
  @Input() public condensed = false;
  @Input() public numberOfRows = 15;
  @Input() public checkbox = false;
  @Input() public icon = false;
  public rowsRange = [];

  constructor() {

  }

  ngOnInit() {
    this.rowsRange = range(this.numberOfRows);
  }
}
