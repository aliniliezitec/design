export interface HtmlCodeBlock {
  code: string;
  syntaxHighlighter: string;
}

export const TableCodeBlocks = [
  {
    htmlCode: `
        <div class="nao-simple-table">
            <table class="table mb-0">
                <thead class="table-header">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Doe</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Lary</td>
                        <td>Doe</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jon</td>
                        <td>Doe</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Jacob</td>
                        <td>Doe</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Lary</td>
                        <td>Otto</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Jon</td>
                        <td>Otto</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Jacob</td>
                        <td>Otto</td>
                        <td>No</td>
                    </tr>
                </tbody>
            </table>
        </div>`},
  {
    htmlCode: `
        <div class="nao-simple-table nao-table-scroll-example">
            <table class="table mb-0">
                <thead class="table-header nao-sticky-thead">
                    <tr>
                      <th scope="col" style="min-width: 120px">#</th>
                      <th scope="col" style="min-width: 200px">Name</th>
                      <th scope="col" style="min-width: 200px">Email</th>
                      <th scope="col" style="min-width: 200px">Col_1</th>
                      <th scope="col" style="min-width: 200px">Col_2</th>
                      <th scope="col" style="min-width: 200px">Col_3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Doe</td>
                        <td>Col_1</td>
                        <td>Col_2</td>
                        <td>Col_3</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Lary</td>
                        <td>Doe</td>
                        <td>Col_1</td>
                        <td>Col_2</td>
                        <td>Col_3</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jon</td>
                        <td>Doe</td>
                        <td>Col_1</td>
                        <td>Col_2</td>
                        <td>Col_3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Jacob</td>
                        <td>Doe</td>
                        <td>Col_1</td>
                        <td>Col_2</td>
                        <td>Col_3</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Col_1</td>
                        <td>Col_2</td>
                        <td>Col_3</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Lary</td>
                        <td>Otto</td>
                        <td>Col_1</td>
                        <td>Col_2</td>
                        <td>Col_3</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Jon</td>
                        <td>Otto</td>
                        <td>Col_1</td>
                        <td>Col_2</td>
                        <td>Col_3</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Jacob</td>
                        <td>Otto</td>
                        <td>Col_1</td>
                        <td>Col_2</td>
                        <td>Col_3</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Col_1</td>
                        <td>Col_2</td>
                        <td>Col_3</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Lary</td>
                        <td>Otto</td>
                        <td>Col_1</td>
                        <td>Col_2</td>
                        <td>Col_3</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Jon</td>
                        <td>Otto</td>
                        <td>Col_1</td>
                        <td>Col_2</td>
                        <td>Col_3</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Jacob</td>
                        <td>Otto</td>
                        <td>Col_1</td>
                        <td>Col_2</td>
                        <td>Col_3</td>
                    </tr>
                </tbody>
            </table>
        </div>`},
  {
    htmlCode: `
        <ng-template #rowOverlay let-item let-i="i">
          <div class="d-flex justify-content-end align-items-center nao-row-overlay h-100">
            <div>
              <button class="btn btn-text-only text-uppercase-first">
                Edit
              </button>
              <button class="btn btn-text-only text-uppercase-first">
                Delete
              </button>
            </div>
          </div>
        </ng-template>
        <div class="card nao-card-table-1 mb-5">
          <div class="d-flex flex-row card-header selected align-items-center" *ngIf="noSelectedRows() > 0">
            <div class="pt-2 pr-3">
              <a href="javascript:void(0)" class="btn btn-transparent" (click)="deselectAll()">X</a>
            </div>
            <div class="pl-3 mr-3">
              <div class="card-header-title text-lowercase">
                {{ noSelectedRows() }}
              </div>
            </div>
            <div class="pt-2">
              <button class="btn btn-text-only text-uppercase-first">
                Delete multiple
              </button>
            </div>
            <div class="p-2 flex-grow-1">
            </div>
            <div class="p-2 flex-grow-1">
            </div>
          </div>
          <div class="d-flex flex-row card-header align-items-center" *ngIf="noSelectedRows() === 0">
            <div class="pl-3 mr-3">
              <div class="card-header-title">
                Contact&nbsp;&nbsp;|
              </div>
            </div>
            <div class="pt-2 pr-3">
              <span class="smallx">
                {{ paging.totalRows }}
              </span>
            </div>
            <div class="pt-2">
              <button class="btn btn-text-only text-uppercase-first">
                Add new contact
              </button>
              <button class="btn btn-text-only text-uppercase-first">
                Import contacts
              </button>
            </div>
          </div>
          <div class="d-flex card-search align-middle justify-content-end">
            <div class="col-7 align-middle pt-3 pl-4">
              <ng-select bindValue="query" class="nao-select-transparent" [multiple]="true"
                placeholder="Add filter" [clearable]="false" clearAllText="Clear">
                <ng-template ng-label-tmp let-item="item" let-clear="clear">
                  <span class="ng-value-label">
                    {{ item.fieldName }}: <strong>'{{ item.term }}'</strong>
                  </span>
                  <span class="ng-value-icon right" aria-hidden="true">×</span>
                </ng-template>
                <ng-option *ngFor="let item of searchFor; trackBy" [value]="item">{{ item.value }}
                </ng-option>
              </ng-select>
            </div>
            <div class="col pt-3">
              <button type="button" class="btn nao-btn btn-transparent text-uppercase pull-right"
                (click)="searchFormGroup.empty()">
                Clear filter
              </button>
            </div>
          </div>

          <div class="card-body p-0 table-responsive">
            <table class="table mb-0 table-borderless">
              <thead class="table-header">
                <tr>
                  <th scope="col" style="width: 60px;">
                    <label class="custom-control custom-checkbox px-2 m-0" style="margin-left: 22px !important;">
                      <input type="checkbox" class="custom-control-input" (ngModelChange)="selectAllChange()"
                        [(ngModel)]="paging.selectAll">
                      <span class="custom-control-label"></span>
                    </label>
                  </th>
                  <th scope="col" class="pl-3" style="width: 20%">Name</th>
                  <th scope="col" class="pl-3" style="width: 20%">Email</th>
                  <th scope="col" class="pl-3" style="width: 20%">Company</th>
                  <th scope="col" class="pl-3"></th>
                </tr>
              </thead>
              <tbody class="table-body">
                <tr *ngFor="let item of dataTable; let i = index; let last = last"
                  [ngClass]="{'selected': item.selected}">
                  <td class="align-middle p-3">
                    <label class="custom-control custom-checkbox px-2 m-0 ml-3">
                      <input type="checkbox" class="custom-control-input" (ngModelChange)="selectChange($event, i)"
                        [(ngModel)]="item.selected">
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="align-middle p-3">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.name }}</div>
                    </div>
                  </td>
                  <td class="align-middle p-3">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.email }}</div>
                    </div>
                  </td>
                  <td class="align-middle p-3">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.company }}</div>
                    </div>
                  </td>
                  <td class="py-0" style="position: relative;">
                    <div class="nao-row-overlay-container show-on-hover mr-4" *ngIf="noSelectedRows() === 0">
                      <ng-template *ngTemplateOutlet="rowOverlay; context: { $implicit: item, i: i }"></ng-template>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex flex-row align-items-center card-footer pt-4 pb-4 pr-5">
            <div class="pl-3">
              Per page
              <select (change)="paging.perPage$.next($event.target.value)"
                [value]="paging.perPage$.getValue()" class="custom-select custom-select-sm d-inline-block w-auto">
                <option *ngFor="let limit of [5, 10, 20, 50, 100]" [value]="limit">{{ limit }}</option>
              </select>
            </div>
            <div class="flex-grow-1 align-content-end">
              <ngb-pagination class="pull-right" [collectionSize]="paging.totalRows"
                [pageSize]="paging.perPage$.getValue()" [(page)]="paging.currentPage" [maxSize]="paging.maxSize"
                [directionLinks]="true" [boundaryLinks]="true">
                <ng-template ngbPaginationPrevious>Previous</ng-template>
                <ng-template ngbPaginationNext>Next</ng-template>
                <ng-template ngbPaginationEllipsis>...</ng-template>
                <ng-template ngbPaginationNumber let-page>{{ page }}</ng-template>
              </ngb-pagination>
            </div>
          </div>
`}
];
