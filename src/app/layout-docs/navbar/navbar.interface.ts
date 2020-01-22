export interface MenuInterface {
  type: string;
  textTranslate: string;
  route: string;
  active: boolean;
  isOpen?: boolean;               // used for Dropdowns
  items?: MenuItemInterface[];    // used for Dropdowns
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

export const NavbarCodeBlocks = [
  {
    html: `
        <nav class="navbar navbar-expand bg-white py-0 pl-3 pr-0">
          <a href="javascript:void(0)" class="navbar-brand py-0 mr-4">
            <img src="assets/images/crm-assets/logo-crm.svg" alt="Naologic" height="30">
          </a>
          <div class="navbar-collapse">
            <!-- Divider -->
            <hr class="d-lg-none w-100">
            <div class="navbar-nav align-items-lg-center ml-auto">
              <!-- Show help -->
              <div class="navbar-text mr-2">
                <a class="d-flex align-items-center" href="javascript:void(0)">
                  <span class="text-dark font-weight-bold mr-1 ml-4">HELP</span>
                  <i class="nao-icon-help nao-help ml-1"></i>
                </a>
              </div>

              <div ngbDropdown display="dynamic" class="btn-group dropdown-remove-arrow"
                [placement]="$flow.isRTL() ? 'bottom-left' : 'bottom-right'">
                <a ngbDropdownToggle href="javascript:void(0)">
                  <span class="d-inline-flex align-items-center nao-dropdown-avatar-container">
                    <img class="d-block nao-dropdown-avatar mt-1 rounded-circle"
                      src="assets/images/placeholder/default-avatar.png" />
                    <span class="dot" [ngClass]="{ 'dot_disconnected': false, 'dot_connected': true }"></span>
                  </span>
                </a>
                <div ngbDropdownMenu class="nao-dropdown-1">
                  <div class="nao-dropdown-profile">
                    <div class="d-flex">
                      <img class="d-block nao-dropdown-avatar rounded-circle mr-2"
                        src="assets/images/placeholder/default-avatar.png" />
                      <div class="d-flex flex-column">
                        <span class="font-weight-bold">Jon Doe</span>
                        <span class="nao-dropdown-small-text">jon@naologic.com</span>
                      </div>
                    </div>
                  </div>
                  <a href="javascript:void(0)" class="dropdown-item">
                    Your account
                  </a>
                  <a href="javascript:void(0)" class="dropdown-item">
                    Invite People
                  </a>
                  <a href="javascript:void(0)" class="dropdown-item">
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>`
  },
  {
    html: `
        <div class="nao-navbar bg-white">
        <div class="content-wrapper d-flex flex-row-reverse-rtl-only justify-content-between justify-content-md-start px-md-4">
            <div class="d-none d-md-block align-self-end" [ngClass]="{'hide-navbar-scroll-buttons': !showPrevBtn}">
                <a class="navbar-horizontal-prev" (click)="scrollPrev()">
                </a>
                </div>

                <div #navbarContent class="nao-navbar-container">
                    <nav class="navbar navbar-expand-md navbar-sm-fixed-top px-3 px-md-0"
                        [ngClass]="{'b-0' : !isCollapsed}">
                        <a class="navbar-brand d-md-none" href="javascript:void(0)" (click)="isCollapsed = true">
                        <img src="assets/images/crm-assets/logo-crm.svg" alt="Naologic" height="30">
                        </a>

                        <div class="align-items-center ml-auto d-md-none">
                        <div ngbDropdown display="dynamic" class="btn-group dropdown-remove-arrow"
                            [placement]="$flow.isRTL() ? 'bottom-left' : 'bottom-right'">
                            <a ngbDropdownToggle href="javascript:void(0)">
                            <span class="d-inline-flex align-items-center nao-dropdown-avatar-container">
                                <img class="d-block nao-dropdown-avatar mt-1 rounded-circle"
                                src="assets/images/placeholder/default-avatar.png" />
                                <span class="dot" [ngClass]="{ 'dot_disconnected': false, 'dot_connected': true }"></span>
                            </span>
                            </a>
                            <div ngbDropdownMenu class="nao-dropdown-1">
                                <div class="nao-dropdown-profile">
                                    <div class="d-flex">
                                        <img class="d-block nao-dropdown-avatar rounded-circle mr-2"
                                            src="assets/images/placeholder/default-avatar.png" />
                                        <div class="d-flex flex-column">
                                            <span class="font-weight-bold">Jon Doe</span>
                                            <span class="nao-dropdown-small-text">jon@naologic.com</span>
                                    </div>
                                </div>
                            </div>
                            <a href="javascript:void(0)" class="dropdown-item">
                                Your account
                            </a>
                            <a href="javascript:void(0)" class="dropdown-item">
                                Invite People
                            </a>
                            <a href="javascript:void(0)" class="dropdown-item">
                                Log Out
                            </a>
                            </div>
                        </div>

                        <button class="navbar-toggler custom-toggler border-0" type="button" data-toggle="collapse"
                            data-target="#naoNavbar" aria-expanded="false" aria-label="Toggle navigation"
                            (click)="isCollapsed = !isCollapsed" [attr.aria-expanded]="!isCollapsed" aria-controls="naoNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        </div>

                        <div class="collapse navbar-collapse nao-navbar-collapse" id="naoNavbar" [ngbCollapse]="isCollapsed">

                        <ul class="navbar-nav border-bottom-0">

                            <li *ngFor="let elem of menuItems; let i = index" class="nav-item">

                            <div *ngIf="elem.type ==='items'">

                                <div class="d-block d-md-none">
                                <a href="javascript:void(0)" (click)="toggleMenu(i)"
                                    class="nav-link d-flex align-items-center justify-content-between flex-row-reverse-rtl-only">
                                    {{ elem.text }}
                                    <i class="nao-icon-arrow" [ngClass]="{'nao-icon-arrow-active': elem.isOpen}"></i>
                                </a>

                                <ul class="m-0" [@expandCollapse]='elem.isOpen' *ngIf="elem.isOpen">
                                    <li *ngFor="let subitem of elem.items" class="nav-item">
                                    <a href="javascript:void(0)" [routerLink]="subitem.route" class="nav-link"
                                        (click)="isCollapsed=true; elem.isOpen=false" [ngClass]="{'active': subitem.active}">
                                        {{ subitem.text }}
                                        </a>
                                    </li>
                                </ul>
                                </div>
                                <div class="d-none d-md-block">
                                <div class="dropdown" ngbDropdown container="body" display="dynamic"
                                    [placement]="$flow.isRTL() ? 'bottom-right' : 'bottom-left'">
                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)"
                                    [ngClass]="{'active': elem.active}" ngbDropdownToggle>
                                    {{ elem.text }}
                                    </a>
                                    <div class="nao-dropdown-navbar" ngbDropdownMenu>
                                    <a class="dropdown-item" href="javascript:void(0)" [routerLink]="subitem.route"
                                        [ngClass]="{'active': subitem.active}" *ngFor="let subitem of elem.items">
                                        {{ subitem.text }}
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div *ngIf="elem.type === 'item'" (click)="isCollapsed=true">
                                <a class="nav-link" href="javascript:void(0)" [routerLink]="elem.route"
                                [ngClass]="{'active': elem.active}">{{ elem.text }}</a>
                            </div>
                            </li>
                        </ul>

                        </div>
                    </nav>
                </div>

                <div class="d-none d-md-block align-self-end" [ngClass]="{'hide-navbar-scroll-buttons': !showNextBtn}">
                    <a class="navbar-horizontal-next" (click)="scrollNext()">
                </a>
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
          <img class="nao-logo" src="assets/images/logo/logo.png" width="180">
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
  }

];

