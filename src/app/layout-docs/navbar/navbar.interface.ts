export interface MenuInterface {
  type: string;
  text: string;
  route: string;
  href?: string;
  active: boolean;
  isOpen?: boolean;               // used for Dropdowns
  items?: DropdownItemInterface[];    // used for Dropdowns
}

export interface DropdownItemInterface {
  type: string;
  text: string;
  route: string;
  active: boolean;
}

export interface MenuItemInterface {
  type: string;
  textTranslate: string;
  route: string;
  active: boolean;
}

export interface SideMenuInterface {
  type: string;
  textTranslate: string;
  route: string;
  icon: string;
  isOpen: boolean;
  items?: MenuItemInterface[];
}

export interface SideMenuV2Interface {
  type: string;
  textTranslate?: string;
  route?: string;
  icon?: string;
  active?: boolean;
}

export const NavbarCodeBlocks = [
  {
    html: `
      <header>
          <div class="top-header d-none d-md-flex">
            <a [routerLink]="['/']" class="mr-auto" href="javascript:void(0)">
              <img alt="Naologic logo" src="assets-local/images/crm-assets/logo-crm.svg" width="35"/>
            </a>
            <div class="d-flex align-items-center ml-auto">
              <!-- Show help -->
              <div class="top-header-help mr-2">
                <a class="d-flex align-items-center" href="javascript:void(0)">
                  <span class="font-weight-bold mr-1 ml-4">HELP</span>
                  <i class="nao-icon-help ml-1"></i>
                </a>
              </div>

              <div class="btn-group dropdown-remove-arrow" display="dynamic" ngbDropdown>
                <a href="javascript:void(0)" ngbDropdownToggle>
                  <span class="d-inline-flex align-items-center nao-dropdown-avatar-container">
                    <img class="d-block nao-dropdown-avatar rounded-circle"
                         src="assets-local/images/placeholder/default-avatar.png"/>
                    <span [ngClass]="{ 'dot_disconnected': false, 'dot_connected': true }" class="dot"></span>
                  </span>
                </a>
                <div class="nao-dropdown-1" ngbDropdownMenu>
                  <div class="nao-dropdown-profile">
                    <div class="d-flex">
                      <img class="d-block nao-dropdown-avatar rounded-circle mr-2"
                           src="assets-local/images/placeholder/default-avatar.png"/>
                      <div class="d-flex flex-column">
                        <span class="font-weight-bold">Jon Doe</span>
                        <span class="nao-dropdown-small-text">jon@naologic.com</span>
                      </div>
                    </div>
                  </div>
                  <a class="dropdown-item" href="javascript:void(0)">
                    Your account
                  </a>
                  <a class="dropdown-item" href="javascript:void(0)">
                    Invite People
                  </a>
                  <a class="dropdown-item" href="javascript:void(0)">
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="navbar-container-nao bg-white">
            <div
              class="content-wrapper d-flex align-items-end flex-row-reverse-rtl-only px-md-4">
              <div [ngClass]="{'hide-navbar-scroll-buttons': !showPrevBtn}" class="d-none d-md-block align-self-end">
                <a (click)="scrollPrev()" class="navbar-horizontal-prev">
                </a>
              </div>

              <!--remove buttons for website-->
              <div #navbarContent class="navbar-content w-100 nao-navbar-content">

                <nav [ngClass]="{'b-0' : !isCollapsed}" class="navbar navbar-expand-md navbar-sm-fixed-top px-3 px-md-0">
                  <!--Collapsed view-->
                  <a (click)="isCollapsed = true" [routerLink]="'/'" class="navbar-brand d-md-none" href="javascript:void(0)">
                    <img alt="Naologic" src="assets-local/images/crm-assets/logo-crm.svg" width="35">
                  </a>

                  <div class="d-md-none mx-auto">
                    <a class="btn btn-sm btn-primary" href="https://crm.naologic.com/subscription/crm-free-trial">Try NAO CRM
                      for
                      free</a>
                  </div>

                  <div class="align-items-center d-md-none">

                    <button (click)="isCollapsed = !isCollapsed" [attr.aria-expanded]="!isCollapsed" aria-controls="naoNavbar"
                            aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler custom-toggler border-0"
                            data-target="#naoNavbar" data-toggle="collapse" type="button">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                  </div>

                  <div [ngbCollapse]="isCollapsed" class="collapse navbar-collapse" id="navbarNaoContent">
                    <ul class="navbar-nav mr-auto">
                      <!--Iterate over the links-->
                      <li *ngFor="let elem of menuItems; let i = index" class="nav-item">
                        <!--single item-->
                        <a (click)="isCollapsed=true" *ngIf="elem.type === 'item'" [ngClass]="{'active': elem.active}"
                           [routerLink]="elem.route" [title]="elem.text" class="nav-link"
                           href="javascript:void(0)">{{ elem.text }}</a>
                        <!--href link blank-->
                        <a (click)="isCollapsed=true" *ngIf="elem.type === 'blank'" [href]="elem.href" class="nav-link" rel="noopener"
                           target="_blank">{{ elem.text }}</a>

                        <!--Dropdown-->
                        <ng-container *ngIf="elem.type ==='items'">

                          <div class="d-block d-md-none">
                            <a (click)="toggleMenu(i)" class="nav-link d-flex align-items-center justify-content-between flex-row-reverse-rtl-only"
                               href="javascript:void(0)">
                              {{ elem.text }}
                              <i [ngClass]="{'nao-icon-arrow-active': elem.isOpen}" class="nao-icon-arrow"></i>
                            </a>

                            <ul *ngIf="elem.isOpen" [@expandCollapse]='elem.isOpen' class="m-0">
                              <li *ngFor="let subitem of elem.items" class="nav-item">
                                <a (click)="isCollapsed=true; elem.isOpen=false" [ngClass]="{'active': subitem.active}" [routerLink]="subitem.route"
                                   class="nav-link" href="javascript:void(0)">
                                  {{ subitem.text }}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="d-none d-md-block">
                            <div class="dropdown" container="body" display="dynamic" ngbDropdown>
                              <a [ngClass]="{'active': elem.active}" class="nav-link dropdown-toggle" href="javascript:void(0)"
                                 ngbDropdownToggle>
                                {{ elem.text }}
                              </a>
                              <div class="nao-dropdown-navbar" ngbDropdownMenu>
                                <a *ngFor="let subitem of elem.items" [ngClass]="{'active': subitem.active}" [routerLink]="subitem.route"
                                   class="dropdown-item" href="javascript:void(0)">
                                  {{ subitem.text }}
                                </a>
                              </div>
                            </div>
                          </div>
                        </ng-container>

                      </li>
                    </ul>
                  </div>
                </nav>

              </div>

              <div [ngClass]="{'hide-navbar-scroll-buttons': !showNextBtn}" class="d-none d-md-block align-self-end">
                <a (click)="scrollNext()" class="navbar-horizontal-next">
                </a>
              </div>

            </div>
          </div>
        </header>
        `,
    ts1: `
            @Component({
                ...
                animations: [
                trigger('expandCollapse', [
                    state('expandCollapseState', style({ height: '*' })),
                    transition('* => void', [
                    style({ height: '*' }),
                    animate(200, style({ height: '0' }))
                    ]),
                    transition('void => *', [
                    style({ height: '0' }),
                    animate(200, style({ height: '*' }))
                    ])
                ])
                ]
            })

            ...
            public menuItems: MenuInterface[] = [
                {
                  type: 'item', text: 'CRM', route: '/', active: false,
                },
                {
                  type: 'item', text: 'Business Apps', route: '/', active: false,
                },
                {
                  type: 'item', text: 'Enterprise', route: '/', active: true,
                },
                {
                  type: 'item', text: 'Pricing', route: '/', active: false,
                },
                {
                  type: 'items', text: 'Dropdown', route: '/', isOpen: false, active: false,
                  items: [
                    { type: 'item', route: '/', text: 'Sub item 1', active: false },
                    { type: 'item', route: '/', text: 'Sub item 2', active: true },
                    { type: 'item', route: '/', text: 'Sub item 3', active: false },
                  ]
                },
                {
                  type: 'item', text: 'Blog', route: '/', active: false,
                },
                {
                  type: 'item', text: 'Dashboard', route: '/', active: false,
                },
                {
                  type: 'items', text: 'Another Dropdown', route: '/', isOpen: false, active: false,
                  items: [
                    { type: 'item', route: '/', text: 'Sub item 1', active: false },
                    { type: 'item', route: '/', text: 'Sub item 2', active: true },
                    { type: 'item', route: '/', text: 'Sub item 3', active: false },
                  ]
                },
                {
                  type: 'item', text: 'Sales', route: '/', active: false,
                },
                {
                  type: 'item', text: 'Leads', route: '/', active: false,
                },
                {
                  type: 'item', text: 'Contact', route: '/', active: false,
                },
              ];
            public isCollapsed = true;
            public sizeChanged$ = new BehaviorSubject<boolean>(null);
            public showPrevBtn = false;
            public showNextBtn = false;
            public scrollValue = 150; // How much do you want to scroll

            @ViewChild('navbarContent', { static: false }) public navbarContent: ElementRef<any>;
            @HostListener('window:resize')
            onResize() {
                // -->Refresh: scroll buttons on size change
                this.sizeChanged$.next(true);
            }

            ...

            ngAfterViewInit() {
                // -->Refresh: horizontal scroll for navbar
                this.subs.add(
                this.sizeChanged$
                    .subscribe(() => {
                    // -->Refresh: scroll buttons
                    setTimeout(() => {
                        this.refreshScrollPrevBtn(true);
                        this.refreshScrollNextBtn(true);
                    });
                    })
                );
            }
        `,
    ts2: `
        /**
         * Toggle a menu item
         */
        public toggleMenu(index): void {
            if (index >= 0) {
            // If the current menu item is closed, close other items
            if (!this.menuItems[index].isOpen) {
                this.menuItems.map((el, i) => {
                if (i !== index) {
                    el.isOpen = false;
                }
                });
            }
            this.menuItems[index].isOpen = !this.menuItems[index].isOpen;
            }
        }

        public refreshScrollPrevBtn(isResized: boolean = false): void {
            const scrollLeft = this.navbarContent.nativeElement.scrollLeft;
            // -->Set: the scroll value
            const scrollingValue = isResized ? 0 : this.scrollValue;

            if (scrollLeft > scrollingValue) {
            // -->Show: Prev button
            this.showPrevBtn = true;
            } else {
            // -->Hide: Prev button
            this.showPrevBtn = false;
            }
        }
        public refreshScrollNextBtn(isResized: boolean = false): void {
            const scrollLeft = this.navbarContent.nativeElement.scrollLeft;
            const offsetWidth = this.navbarContent.nativeElement.offsetWidth;
            const scrollWidth = this.navbarContent.nativeElement.scrollWidth;
            // -->Set: the scroll value
            const scrollingValue = isResized ? 0 : this.scrollValue;

            if (scrollLeft + offsetWidth < scrollWidth - scrollingValue) {
            // -->Show: next button
            this.showNextBtn = true;
            } else {
            // -->Hide: next button
            this.showNextBtn = false;
            }
        }


        public scrollNext(): void {
            this.navbarContent.nativeElement
            .scrollTo({ left: (this.navbarContent.nativeElement.scrollLeft + this.scrollValue), behavior: 'smooth' });
            // -->Show: Prev button
            this.showPrevBtn = true;
            // -->Refresh: next button
            this.refreshScrollNextBtn();

        }

        public scrollPrev(): void {
            this.navbarContent.nativeElement
            .scrollTo({ left: (this.navbarContent.nativeElement.scrollLeft - this.scrollValue), behavior: 'smooth' });
            // -->Show: Next button
            this.showNextBtn = true;
            // -->Refresh: prev button
            this.refreshScrollPrevBtn();
        }

        ...

        ngOnDestroy(): void {
            this.subs.unsubscribe();
        }`,
    ts3: `
        export interface MenuInterface {
            type: string;
            text: string;
            route: string;
            active: boolean;
            isOpen?: boolean;               // used for Dropdowns
            items?: MenuItemInterface[];    // used for Dropdowns
        }

        export interface MenuItemInterface {
            type: string;
            text: string;
            route: string;
            active: boolean;
        }`
  },
  {
    html: `
      <div class="sidenav d-none d-sm-block">
      <div class="sidenav-wrapper min-vh-100">
        <a href="javascript:void(0)" [routerLink]="['/']">
          <img class="nao-logo" src="assets-local/images/logo/logo.png" width="180">
        </a>

        <li *ngFor="let elem of sideMenuItems; let i = index">
          <div [ngSwitch]="elem.type">
            <div *ngSwitchCase="'items'">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center justify-content-center menu-icon">
                  <i [class]="elem.icon"></i>
                </div>
                <a href="javascript:void(0)" (click)="toggleSideMenuItems(i)" class="sidenav-menu-text">{{ elem.text }}</a>
              </div>
              <ul class="m-0" [@expandCollapse]='elem.isOpen' *ngIf="elem.isOpen">
                <li *ngFor="let item of elem.items">
                  <a href="javascript:void(0)" [routerLink]="item.route">{{item.text}}</a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <div class="made-with">
          Made with 🤖 by Naologic
        </div>

      </div>
    </div>`,
    ts1: `
        @Component({
          ...
          animations: [
          trigger('expandCollapse', [
              state('expandCollapseState', style({ height: '*' })),
              transition('* => void', [
              style({ height: '*' }),
              animate(200, style({ height: '0' }))
              ]),
              transition('void => *', [
              style({ height: '0' }),
              animate(200, style({ height: '*' }))
              ])
          ])
          ]
      })

      ...

    public sideMenuItems: SideMenuInterface[] = [
      {
          type: 'items', text: 'Layout', route: '', icon: 'nao-icon-crm', isOpen: false,
          items: [
              { type: 'item', route: '', text: 'Grid', active: false },
              { type: 'item', route: '', text: 'Components', active: false },
              { type: 'item', route: '', text: 'Navigation', active: false },
          ]
      },
      {
          type: 'items', text: 'Components', route: '', icon: 'nao-icon-surveys', isOpen: false,
          items: [
              { type: 'item', route: '', text: 'Buttons', active: false },
              { type: 'item', route: '', text: 'Cards', active: false },
              { type: 'item', route: '', text: 'Dropdowns', active: false },
              { type: 'item', route: '', text: 'Forms', active: false },
              { type: 'item', route: '', text: 'Input groups', active: false },
              { type: 'item', route: '', text: 'Loaders', active: false },
              { type: 'item', route: '', text: 'Modals', active: false },
              { type: 'item', route: '', text: 'Tables', active: false },
          ]
      },
      {
          type: 'items', text: 'Utilities', route: '', icon: 'nao-icon-settings', isOpen: false,
          items: [
              { type: 'item', route: '', text: 'Colors', active: false },
              { type: 'item', route: '', text: 'Iconography', active: false },
              { type: 'item', route: '', text: 'Illustration', active: false },
              { type: 'item', route: '', text: 'Typography', active: false },
              { type: 'item', route: '', text: 'Spacing', active: false },
              { type: 'item', route: '', text: 'Sizing', active: false },
          ]
      },
      {
          type: 'items', text: 'Photography ', route: '', icon: 'nao-icon-image-placeholder', isOpen: false,
          items: [
              { type: 'item', route: '', text: 'Overview', active: false },
              { type: 'item', route: '', text: 'Compositions', active: false },
              { type: 'item', route: '', text: 'Casting', active: false },
              { type: 'item', route: '', text: 'Lighting and color', active: false },
              { type: 'item', route: '', text: 'Locations', active: false },
          ]
      },
      {
          type: 'items', text: 'Samples ', route: '', icon: 'nao-icon-multiple-choice', isOpen: false,
          items: [
              { type: 'item', route: '', text: 'Forms', active: false },
          ]
      },
  ];

    /**
     * Toggle a sidemenu item
     */
    public toggleSideMenuItems(index): void {
      if (index >= 0) {
        // If the current menu item is closed, close other items
        if (!this.sideMenuItems[index].isOpen) {
          this.sideMenuItems.map((el, i) => {
            if (i !== index) {
              el.isOpen = false;
            }
          });
        }
        this.sideMenuItems[index].isOpen = !this.sideMenuItems[index].isOpen;
      }
    }`,
    ts2: `
    export interface MenuItemInterface {
      type: string;
      text: string;
      route: string;
      active: boolean;
    }
    export interface SideMenuInterface {
      type: string;
      text: string;
      route: string;
      icon: string;
      isOpen: boolean;
      items?: MenuItemInterface[];
    }`
  }, {
    html: `
    <div class="nao-sidenav d-block" style="position: relative;">
        <div class="sidenav-wrapper min-vh-100">
          <ng-container *ngFor="let elem of sideMenuV2Items; let i = index">
            <div [ngSwitch]="elem.type">
              <div *ngSwitchCase="'divider'">
                <div class="sidenav-divider"></div>
              </div>

              <li class="d-flex align-items-center group-name" *ngSwitchCase="'group-name'">
                {{ elem.textTranslate }}
              </li>

              <li class="d-flex align-items-center nav-item" *ngSwitchCase="'item'"
                [ngClass]="{'active': elem.active === true}">
                <div class="d-flex align-items-center justify-content-center menu-icon">
                  <i [class]="elem.icon"></i>
                </div>
                <a href="javascript:void(0)">{{ elem.textTranslate }}</a>
              </li>
            </div>
          </ng-container>


          <div class="nao-sidenav-footer d-flex flex-column">
            <div class="other-links d-flex align-items-center">
              <a href="javascript:void(0)">Help</a>
              <span class="oval mx-2"></span>
              <a href="javascript:void(0)">Our blog</a>
              <span class="oval mx-2"></span>
              <a href="javascript:void(0)">Policies</a>
              <span class="oval mx-2"></span>
              <a href="javascript:void(0)">Contact</a>
            </div>
            <div class="made-with mt-1">
              Made with 🤖 by Naologic
            </div>
          </div>

        </div>
      </div>`,
      ts1: `
      public sideMenuV2Items: SideMenuV2Interface[] = [
        { type: 'divider' },
        { type: 'group-name', textTranslate: 'ACCOUNT ADMINISTRATION' },
        { type: 'item', textTranslate: 'Profile', route: '', icon: 'nao-icon-help', active: true },
        { type: 'item', textTranslate: 'Manage Team Members', route: '', icon: 'nao-icon-help', active: false },
        { type: 'item', textTranslate: 'Billing Information', route: '', icon: 'nao-icon-help', active: false },
        { type: 'item', textTranslate: 'Invoices', route: '', icon: 'nao-icon-help', active: false },
        { type: 'item', textTranslate: 'Manage Subscription', route: '', icon: 'nao-icon-help', active: false },
        { type: 'divider' },
        { type: 'group-name', textTranslate: 'BUSINESS SETTINGS' },
        { type: 'item', textTranslate: 'Account Information', route: '', icon: 'nao-icon-help', active: false },
        { type: 'item', textTranslate: 'Tax Details', route: '', icon: 'nao-icon-help', active: false },
        { type: 'item', textTranslate: 'Payment Methods', route: '', icon: 'nao-icon-help', active: false },
        { type: 'item', textTranslate: 'Branding', route: '', icon: 'nao-icon-help', active: false },
        { type: 'divider' },
        { type: 'group-name', textTranslate: 'ADVANCED' },
        { type: 'item', textTranslate: 'APIs', route: '', icon: 'nao-icon-help', active: false },
        { type: 'item', textTranslate: 'Advanced Settings', route: '', icon: 'nao-icon-help', active: false },
        { type: 'item', textTranslate: 'Payment Methods', route: '', icon: 'nao-icon-help', active: false },
      ];`,
      ts2: `
      export interface SideMenuV2Interface {
        type: string;
        textTranslate?: string;
        route?: string;
        icon?: string;
        active?: boolean;
      }`
  }

];

