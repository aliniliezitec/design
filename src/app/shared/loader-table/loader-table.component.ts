import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loader-table',
  template: `
    <div class="loader-table">
      <div class="row-loading">
        <div class="icon-loading"></div>
        <div class="content-loading"></div>
      </div>
      <div class="row-loading">
        <div class="icon-loading"></div>
        <div class="content-loading"></div>
      </div>
      <div class="row-loading">
        <div class="icon-loading"></div>
        <div class="content-loading"></div>
      </div>
      <div class="row-loading">
        <div class="icon-loading"></div>
        <div class="content-loading"></div>
      </div>
    </div>
  `,
  styles: [`
    .loader-table {
      animation: fadeIn 1s infinite alternate;
      margin: 0 15px;
    }

    .row-loading {
      padding: 14px 0;
      display: flex;
    }

    .icon-loading {
      background-color: var(--lighter);
      min-width: 28px;
      min-height: 28px;
      border-radius: 14px;
      margin-right: 10px;
      margin-left: 30px;
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
  ngOnInit() {
  }
}
