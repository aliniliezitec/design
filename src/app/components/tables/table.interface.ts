export const TableCodeBlocks = [
  {
    html: `
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
        </div>`
  },
  {
    html: `
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
        </div>`
  },
  {
    html: `
    <div class="card nao-card-table-1 mb-5" [ngClass]="{'nao-condensed-table': paging.tableCondensed$.value}">
          <div class="d-flex flex-row card-header selected align-items-center" *ngIf="noSelectedRows() > 0">
            <div class="pr-3">
              <a href="javascript:void(0)" class="btn btn-transparent" (click)="deselectAll()">X</a>
            </div>
            <div class="pl-3 mr-3">
              <div class="card-header-title text-lowercase">
                {{ noSelectedRows() }} {{ (noSelectedRows() === 1 ? 'selected contact' : 'selected contacts') }}
              </div>
            </div>
            <div class="">
              <button class="btn btn-simple-primary">
                Delete multiple
              </button>
            </div>
          </div>
          <div class="d-flex flex-row card-header align-items-center" *ngIf="noSelectedRows() === 0">
            <div class="mr-3">
              <div class="card-header-title">
                Contacts&nbsp;&nbsp;|
              </div>
            </div>
            <div class="pr-3">
              <span class="nao-table-info">
                3 contacts
              </span>
            </div>
            <div class="">
              <button class="btn btn-simple-primary">
                Option 1
              </button>
              <button class="btn btn-simple-primary">
                Option 2
              </button>
              <button class="btn btn-simple-primary">
                Option 3
              </button>
            </div>
            <div class="nao-condensed-btn-group">
              <div class="nao-condensed-btn-group">
                <button type="button" class="btn btn-flip btn-condensed"
                  [ngClass]="paging.tableCondensed$.value ? 'flipped' : ''"
                  (click)="paging.tableCondensed$.next(true)">Condensed</button>
                <button type="button" class="btn btn-flip btn-relaxed"
                  [ngClass]="!paging.tableCondensed$.value ? 'flipped' : ''"
                  (click)="paging.tableCondensed$.next(false)">Relaxed</button>
              </div>
            </div>
          </div>
          <div class="card-search d-flex align-items-center justify-content-between">
            <div class="col-7 align-middle">
              <ng-select bindValue="query" [multiple]="true" placeholder="Add filter" [clearable]="false"
                clearAllText="Clear">
                <ng-template ng-label-tmp let-item="item" let-clear="clear">
                  <span class="ng-value-label">
                    {{ item.fieldName }}: <strong>'{{ item.term }}'</strong>
                  </span>
                  <span class="ng-value-icon right" aria-hidden="true">×</span>
                </ng-template>
                <ng-option *ngFor="let item of searchFor" [value]="item">{{ item.value }}
                </ng-option>
              </ng-select>
            </div>
            <div class="">
              <button type="button" class="btn btn-transparent text-dark-blue" (click)="searchFormGroup.empty()">
                Clear filter
              </button>
            </div>
          </div>

          <div class="card-body p-0 table-responsive">
            <table class="table mb-0 table-borderless">
              <thead class="table-header">
                <tr>
                  <th scope="col" class="nao-th-checkbox">
                    <label class="custom-control custom-checkbox m-0">
                      <input type="checkbox" class="custom-control-input" (ngModelChange)="selectAllChange()"
                        [(ngModel)]="paging.selectAll">
                      <span class="custom-control-label"></span>
                    </label>
                  </th>
                  <th scope="col" class="nao-th" style="width: 20%">Name</th>
                  <th scope="col" class="nao-th" style="width: 20%">Email</th>
                  <th scope="col" class="nao-th" style="width: 20%">Company</th>
                  <th scope="col" class="nao-th"></th>
                </tr>
              </thead>
              <tbody class="table-body">
                <td colspan="100">
                  <loader-table checkbox="true" icon="true" numberOfRows="10"
                    [condensed]="paging.tableCondensed$.value"></loader-table>
                </td>
              </tbody>
            </table>
          </div>
          <div class="card-footer d-flex flex-row align-items-center justify-content-between">
            <div>
              <span class='rows-label'>Rows per page: </span>
              <select (change)="paging.perPage$.next($event.target.value)" [value]="paging.perPage$.getValue()"
                class="custom-select custom-select-sm d-inline-block w-auto">
                <option *ngFor="let limit of [5, 10, 20, 50, 100]" [value]="limit">{{ limit }}</option>
              </select>
            </div>
            <div>
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
        </div>`
  },
  {
    html: `
      <ng-template #rowOverlay let-item let-i="i">
          <div class="d-flex justify-content-end align-items-center nao-row-overlay">
            <div>
              <button class="btn btn-simple-primary">
                Edit
              </button>
              <button class="btn btn-simple-primary">
                Delete
              </button>
              <div ngbDropdown class="d-inline-block btn-group dropdown-remove-arrow" container="body">
                <button class="btn btn-without-box-shadow btn-sm" ngbDropdownToggle>
                  <i class="nao-icon-additional-options"></i>
                </button>
                <div ngbDropdownMenu class="nao-dropdown-1">
                  <a class="dropdown-item" href="javascript:void(0)" >Edit name</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)">Change access level</a>
                  <a class="dropdown-item" href="javascript:void(0)">Change password</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)">Deactivate
                    Account</a>
                  <a class="dropdown-item dropdown-item-danger" href="javascript:void(0)">Delete
                    Account</a>
                </div>
              </div>
            </div>
          </div>
        </ng-template>

      <div class="card nao-card-table-1 mb-5" [ngClass]="{'nao-condensed-table': paging.tableCondensed$.value}">
          <div class="d-flex flex-row card-header selected align-items-center" *ngIf="noSelectedRows() > 0">
            <div class="pr-3">
              <a href="javascript:void(0)" class="btn btn-transparent" (click)="deselectAll()">X</a>
            </div>
            <div class="pl-3 mr-3">
              <div class="card-header-title text-lowercase">
                {{ noSelectedRows() }} {{ (noSelectedRows() === 1 ? 'selected contact' : 'selected contacts') }}
              </div>
            </div>
            <div class="">
              <button class="btn btn-simple-primary">
                Delete multiple
              </button>
            </div>
          </div>
          <div class="d-flex flex-row card-header align-items-center" *ngIf="noSelectedRows() === 0">
            <div class="mr-3">
              <div class="card-header-title">
                Contacts&nbsp;&nbsp;|
              </div>
            </div>
            <div class="pr-3">
              <span class="nao-table-info">
                3 contacts
              </span>
            </div>
            <div class="">
              <button class="btn btn-simple-primary">
                Option 1
              </button>
              <button class="btn btn-simple-primary">
                Option 2
              </button>
              <button class="btn btn-simple-primary">
                Option 3
              </button>
            </div>
            <div class="nao-condensed-btn-group">
              <div class="nao-condensed-btn-group">
                <button type="button" class="btn btn-flip btn-condensed"
                  [ngClass]="paging.tableCondensed$.value ? 'flipped' : ''"
                  (click)="paging.tableCondensed$.next(true)">Condensed</button>
                <button type="button" class="btn btn-flip btn-relaxed"
                  [ngClass]="!paging.tableCondensed$.value ? 'flipped' : ''"
                  (click)="paging.tableCondensed$.next(false)">Relaxed</button>
              </div>
            </div>
          </div>
          <div class="card-search d-flex align-items-center justify-content-between">
            <div class="col-7 align-middle">
              <ng-select bindValue="query" [multiple]="true" placeholder="Add filter" [clearable]="false"
                clearAllText="Clear">
                <ng-template ng-label-tmp let-item="item" let-clear="clear">
                  <span class="ng-value-label">
                    {{ item.fieldName }}: <strong>'{{ item.term }}'</strong>
                  </span>
                  <span class="ng-value-icon right" aria-hidden="true">×</span>
                </ng-template>
                <ng-option *ngFor="let item of searchFor" [value]="item">{{ item.value }}
                </ng-option>
              </ng-select>
            </div>
            <div class="">
              <button type="button" class="btn btn-transparent text-dark-blue" (click)="searchFormGroup.empty()">
                Clear filter
              </button>
            </div>
          </div>

          <div class="card-body p-0 table-responsive">
            <table class="table mb-0 table-borderless">
              <thead class="table-header">
                <tr>
                  <th scope="col" class="nao-th-checkbox">
                    <label class="custom-control custom-checkbox m-0">
                      <input type="checkbox" class="custom-control-input" (ngModelChange)="selectAllChange()"
                        [(ngModel)]="paging.selectAll">
                      <span class="custom-control-label"></span>
                    </label>
                  </th>
                  <th scope="col" class="nao-th" style="width: 20%">Name</th>
                  <th scope="col" class="nao-th" style="width: 20%">Email</th>
                  <th scope="col" class="nao-th" style="width: 20%">Company</th>
                  <th scope="col" class="nao-th"></th>
                </tr>
              </thead>
              <tbody class="table-body">
                <tr *ngFor="let item of dataTable; let i = index; let last = last"
                  [ngClass]="{'selected': item.selected}">
                  <td class="align-middle">
                    <label class="custom-control custom-checkbox m-0">
                      <input type="checkbox" class="custom-control-input" (ngModelChange)="selectChange($event, i)"
                        [(ngModel)]="item.selected">
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="align-middle"
                    [ngClass]="{'td-success': item.name.status === 'success', 'td-danger': item.name.status === 'fail'}">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.name.value }}</div>
                    </div>
                  </td>
                  <td class="align-middle"
                    [ngClass]="{'td-success': item.email.status === 'success', 'td-danger': item.email.status === 'fail'}">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.email.value }}</div>
                    </div>
                  </td>
                  <td class="align-middle"
                    [ngClass]="{'td-success': item.company.status === 'success', 'td-danger': item.company.status === 'fail'}">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.company.value }}</div>
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
          <div class="card-footer d-flex flex-row align-items-center justify-content-between">
            <div>
              <span class='rows-label'>Rows per page: </span>
              <select (change)="paging.perPage$.next($event.target.value)" [value]="paging.perPage$.getValue()"
                class="custom-select custom-select-sm d-inline-block w-auto">
                <option *ngFor="let limit of [5, 10, 20, 50, 100]" [value]="limit">{{ limit }}</option>
              </select>
            </div>
            <div>
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
        </div>`,
    ts1: `
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
      name: { value: 'Jon Doe', status: ''},
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
    ];`,
    ts2: `
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
    }`
  },
  {
    html: `
      <ng-template #rowOverlay let-item let-i="i">
          <div class="d-flex justify-content-end align-items-center nao-row-overlay">
            <div>
              <button class="btn btn-simple-primary">
                Edit
              </button>
              <button class="btn btn-simple-primary">
                Delete
              </button>
              <div ngbDropdown class="d-inline-block btn-group dropdown-remove-arrow" container="body">
                <button class="btn btn-without-box-shadow btn-sm" ngbDropdownToggle>
                  <i class="nao-icon-additional-options"></i>
                </button>
                <div ngbDropdownMenu class="nao-dropdown-1">
                  <a class="dropdown-item" href="javascript:void(0)" >Edit name</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)">Change access level</a>
                  <a class="dropdown-item" href="javascript:void(0)">Change password</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)">Deactivate
                    Account</a>
                  <a class="dropdown-item dropdown-item-danger" href="javascript:void(0)">Delete
                    Account</a>
                </div>
              </div>
            </div>
          </div>
        </ng-template>

      <div class="card nao-card-table-1 mb-5" [ngClass]="{'nao-condensed-table': paging.tableCondensed$.value}">
          <div class="d-flex flex-row card-header selected align-items-center" *ngIf="noSelectedRows() > 0">
            <div class="pr-3">
              <a href="javascript:void(0)" class="btn btn-transparent" (click)="deselectAll()">X</a>
            </div>
            <div class="pl-3 mr-3">
              <div class="card-header-title text-lowercase">
                {{ noSelectedRows() }} {{ (noSelectedRows() === 1 ? 'selected contact' : 'selected contacts') }}
              </div>
            </div>
            <div class="">
              <button class="btn btn-simple-primary">
                Delete multiple
              </button>
            </div>
          </div>
          <div class="d-flex flex-row card-header align-items-center" *ngIf="noSelectedRows() === 0">
            <div class="mr-3">
              <div class="card-header-title">
                Contacts&nbsp;&nbsp;|
              </div>
            </div>
            <div class="pr-3">
              <span class="nao-table-info">
                3 contacts
              </span>
            </div>
            <div class="">
              <button class="btn btn-simple-primary">
                Option 1
              </button>
              <button class="btn btn-simple-primary">
                Option 2
              </button>
              <button class="btn btn-simple-primary">
                Option 3
              </button>
            </div>
            <div class="nao-condensed-btn-group">
              <div class="nao-condensed-btn-group">
                <button type="button" class="btn btn-flip btn-condensed"
                  [ngClass]="paging.tableCondensed$.value ? 'flipped' : ''"
                  (click)="paging.tableCondensed$.next(true)">Condensed</button>
                <button type="button" class="btn btn-flip btn-relaxed"
                  [ngClass]="!paging.tableCondensed$.value ? 'flipped' : ''"
                  (click)="paging.tableCondensed$.next(false)">Relaxed</button>
              </div>
            </div>
          </div>

          <div class="card-body p-0 table-responsive">
            <table class="table mb-0 table-borderless">
              <thead class="table-header">
                <tr>
                  <th scope="col" class="nao-th-checkbox">
                    <label class="custom-control custom-checkbox m-0">
                      <input type="checkbox" class="custom-control-input" (ngModelChange)="selectAllChange()"
                        [(ngModel)]="paging.selectAll">
                      <span class="custom-control-label"></span>
                    </label>
                  </th>
                  <th scope="col" class="nao-th" style="width: 20%">Name</th>
                  <th scope="col" class="nao-th" style="width: 20%">Email</th>
                  <th scope="col" class="nao-th" style="width: 20%">Company</th>
                  <th scope="col" class="nao-th"></th>
                </tr>
              </thead>
              <tbody class="table-body">
                <tr *ngFor="let item of dataTable; let i = index; let last = last"
                  [ngClass]="{'selected': item.selected}">
                  <td class="align-middle">
                    <label class="custom-control custom-checkbox m-0">
                      <input type="checkbox" class="custom-control-input" (ngModelChange)="selectChange($event, i)"
                        [(ngModel)]="item.selected">
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="align-middle"
                    [ngClass]="{'td-success': item.name.status === 'success', 'td-danger': item.name.status === 'fail'}">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.name.value }}</div>
                    </div>
                  </td>
                  <td class="align-middle"
                    [ngClass]="{'td-success': item.email.status === 'success', 'td-danger': item.email.status === 'fail'}">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.email.value }}</div>
                    </div>
                  </td>
                  <td class="align-middle"
                    [ngClass]="{'td-success': item.company.status === 'success', 'td-danger': item.company.status === 'fail'}">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.company.value }}</div>
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
          <div class="card-footer d-flex flex-row align-items-center justify-content-between">
            <div>
              <span class='rows-label'>Rows per page: </span>
              <select (change)="paging.perPage$.next($event.target.value)" [value]="paging.perPage$.getValue()"
                class="custom-select custom-select-sm d-inline-block w-auto">
                <option *ngFor="let limit of [5, 10, 20, 50, 100]" [value]="limit">{{ limit }}</option>
              </select>
            </div>
            <div>
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
        </div>`,
    ts1: `
    public paging = {
      currentPage: 1, totalPages: 1, currentRows: 0, totalRows: 0, maxSize: 5,
      perPage$: new BehaviorSubject<number>(20), selectAll: false, someSelected: false,
      tableCondensed$: new BehaviorSubject<boolean>(false)
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
      name: { value: 'Jon Doe', status: ''},
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
    ];`,
    ts2: `
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
    }`
  },
  {
    html: `
    <ng-template #rowOverlay let-item let-i="i">
          <div class="d-flex justify-content-end align-items-center nao-row-overlay">
            <div>
              <button class="btn btn-simple-primary">
                Edit
              </button>
              <button class="btn btn-simple-primary">
                Delete
              </button>
              <div ngbDropdown class="d-inline-block btn-group dropdown-remove-arrow" container="body">
                <button class="btn btn-without-box-shadow btn-sm" ngbDropdownToggle>
                  <i class="nao-icon-additional-options"></i>
                </button>
                <div ngbDropdownMenu class="nao-dropdown-1">
                  <a class="dropdown-item" href="javascript:void(0)" >Edit name</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)">Change access level</a>
                  <a class="dropdown-item" href="javascript:void(0)">Change password</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)">Deactivate
                    Account</a>
                  <a class="dropdown-item dropdown-item-danger" href="javascript:void(0)">Delete
                    Account</a>
                </div>
              </div>
            </div>
          </div>
        </ng-template>

        <div class="card nao-card-table-1 mb-5">
          <div class="d-flex flex-row card-header selected align-items-center" *ngIf="noSelectedRows() > 0">
            <div class="pr-3">
              <a href="javascript:void(0)" class="btn btn-transparent" (click)="deselectAll()">X</a>
            </div>
            <div class="pl-3 mr-3">
              <div class="card-header-title text-lowercase">
                {{ noSelectedRows() }} {{ (noSelectedRows() === 1 ? 'selected contact' : 'selected contacts') }}
              </div>
            </div>
            <div class="">
              <button class="btn btn-simple-primary">
                Delete multiple
              </button>
            </div>
          </div>
          <div class="d-flex flex-row card-header align-items-center" *ngIf="noSelectedRows() === 0">
            <div class="mr-3">
              <div class="card-header-title">
                Nestead&nbsp;&nbsp;|
              </div>
            </div>
            <div class="pr-3">
              <span class="nao-table-info">
                3 contacts
              </span>
            </div>
          </div>

          <div class="card-search d-flex align-items-center justify-content-between">
            <div class="col-7 align-middle">
              <ng-select bindValue="query" [multiple]="true" placeholder="Add filter" [clearable]="false"
                         clearAllText="Clear">
                <ng-template ng-label-tmp let-item="item" let-clear="clear">
                  <span class="ng-value-label">
                    {{ item.fieldName }}: <strong>'{{ item.term }}'</strong>
                  </span>
                  <span class="ng-value-icon right" aria-hidden="true">×</span>
                </ng-template>
                <ng-option *ngFor="let item of searchFor" [value]="item">{{ item.value }}
                </ng-option>
              </ng-select>
            </div>
            <div class="">
              <button type="button" class="btn btn-transparent text-dark-blue" (click)="searchFormGroup.empty()">
                Clear filter
              </button>
            </div>
          </div>

          <div class="card-body p-0 table-responsive">
            <table class="table mb-0 table-borderless">
              <thead class="table-header">
                <tr>
                  <th scope="col" class="nao-th-checkbox">
                    <label class="custom-control custom-checkbox m-0">
                      <input type="checkbox" class="custom-control-input" (ngModelChange)="selectAllChange()"
                        [(ngModel)]="paging.selectAll">
                      <span class="custom-control-label"></span>
                    </label>
                  </th>
                  <th scope="col" class="nao-th" style="width: 20%">Deployment</th>
                  <th scope="col" class="nao-th" style="width: 20%">Status</th>
                  <th scope="col" class="nao-th" style="width: 20%">Number of users</th>
                  <th scope="col" class="nao-th" style="width: 20%">Date Created</th>
                  <th scope="col" class="nao-th"></th>
                </tr>
              </thead>
              <tbody class="table-body">
                <ng-template #tableRow let-item let-i="i" let-level="level">

                  <tr [ngClass]="{'selected': item.selected}">
                    <td class="align-middle">
                      <label class="custom-control custom-checkbox m-0">
                        <input type="checkbox" class="custom-control-input" (ngModelChange)="selectChange($event, i)"
                          [(ngModel)]="item.selected">
                        <span class="custom-control-label"></span>
                      </label>
                    </td>
                    <td class="align-middle">
                      <div class="d-flex align-items-center">
                        <div class="cell-multiline-header" [ngStyle]="{'padding-left': 30*level+'px'}">
                          <button class="btn btn-sm btn-without-box-shadow pl-0 btn-no-min-width"
                            *ngIf="item.childRows?.length>0"
                            (click)="item.expandChildren ? item.expandChildren = !item.expandChildren : item.expandChildren = true">
                            <i class="nao-icon-arrow-next-1 nao-icon-rotate" [ngClass]="{'rotate-90': item.expandChildren}"></i></button>
                          {{ item.deployment.value }}
                        </div>
                      </div>
                    </td>
                    <td class=" align-middle">
                      <div class="d-flex align-items-center">
                        <div class="cell-multiline-header d-flex flex-wrap">
                          <span class="nao-pill-lg text-white mr-1 mb-1" *ngFor="let status of item.status.value"
                            [ngClass]="{'bg-success': status === 'Production', 'bg-tertiary': status === 'Staging', 'bg-primary': status === 'Demo'}">{{ status }}</span>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <div class="d-flex align-items-center">
                        <div class="cell-multiline-header">{{ item.numberOfUsers.value }}</div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <div class="d-flex align-items-center">
                        <div class="cell-multiline-header">{{ item.dateCreated.value }}</div>
                      </div>
                    </td>
                    <td class="py-0" style="position: relative;">
                      <div class="nao-row-overlay-container show-on-hover mr-4" *ngIf="noSelectedRows() === 0">
                        <ng-template *ngTemplateOutlet="rowOverlay; context: { $implicit: item, i: i }"></ng-template>
                      </div>
                    </td>
                  </tr>

                  <ng-container
                    *ngIf="item.expandChildren && item.childRows && item.childRows.length > 0">
                    <ng-container *ngFor="let childItem of item.childRows; let index_child = index">
                      <ng-template
                        *ngTemplateOutlet="tableRow; context: { $implicit: childItem, i: index_child, level: 1+level}">
                      </ng-template>
                    </ng-container>
                  </ng-container>

                </ng-template>


                <ng-container *ngFor="let item of dataTableNested; let i = index; let last = last">
                  <ng-template *ngTemplateOutlet="tableRow; context: { $implicit: item, i: i, level: 0}"></ng-template>
                </ng-container>

              </tbody>
            </table>
          </div>
          <div class="card-footer d-flex flex-row align-items-center justify-content-between">
            <div>
              <span class='rows-label'>Rows per page:</span>
              <select (change)="paging.perPage$.next($event.target.value)" [value]="paging.perPage$.getValue()"
                class="custom-select custom-select-sm d-inline-block w-auto">
                <option *ngFor="let limit of [5, 10, 20, 50, 100]" [value]="limit">{{ limit }}</option>
              </select>
            </div>
            <div>
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
        </div>
`,
    ts1: `
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
`
  }
];
