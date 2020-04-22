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
      <div class="nao-navbar-container d-flex align-items-center mx-auto">
        <!--LOGO-->
        <a [routerLink]="['/']" class="navbar-logo d-none d-lg-block" href="javascript:void(0)">
          <div class="mr-auto">
            <img alt="Naologic" src="assets/images/nav/logo.svg" width="125">
          </div>
        </a>

        <!--Menu items-->
        <div class="content-wrapper d-flex align-items-center flex-row-reverse-rtl-only px-lg-4 overflow-auto w-100">

          <!--Left arrow for horizontal scroll inside the navigation-->
          <div [ngClass]="{'hide-navbar-scroll-buttons': !showPrevBtn}" class="d-none d-lg-block">
            <a (click)="scrollPrev()" class="navbar-horizontal-prev">
              <i class="nao-icon-arrow-back-1"></i>
            </a>
          </div>

          <div #navbarContent class="navbar-content w-100 nao-navbar-content">
            <nav class="navbar navbar-expand-lg px-3 px-lg-0 position-unset">

              <!--Cart mobile button-->
              <div class="d-lg-none pt-1">
                <button class="btn btn-primary d-flex align-items-center btn-cart">
                  <img class="mr-3" height="12" src="assets/images/nav/cart.svg">
                  <span>8</span>
                </button>
              </div>

              <!--Collapsed view-->
              <a (click)="isCollapsed = true" [routerLink]="'/'" class="navbar-brand mx-auto d-lg-none"
                 href="javascript:void(0)">
                <img alt="Naologic" src="assets/images/nav/logo.svg" width="125">
              </a>

              <!--Burger menu-->
              <div class="align-items-center d-lg-none pt-1">
                <button (click)="isCollapsed = !isCollapsed" [attr.aria-expanded]="!isCollapsed" aria-controls="naoNavbar"
                        aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler custom-toggler border-0"
                        data-target="#naoNavbar" data-toggle="collapse" type="button">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>

              <div [ngbCollapse]="isCollapsed" class="collapse navbar-collapse" id="navbarNaoContent">
                <ul #navbarItems class="navbar-nav mr-auto position-unset">
                  <!--Iterate over the links-->
                  <li *ngFor="let elem of menuItems; let i = index" class="nav-item">

                    <!--Single item link-->
                    <a (click)="isCollapsed=true" *ngIf="elem.type === 'item'"
                       [ngClass]="{'active': isActive(elem.isActiveUrl)}"
                       [routerLink]="elem.route" [title]="elem.text" class="nav-link"
                       href="javascript:void(0)">{{ elem.text }}</a>

                    <!--href link blank-->
                    <a (click)="isCollapsed=true" *ngIf="elem.type === 'blank'" [href]="elem.href" [title]="elem.text"
                       class="nav-link"
                       rel="noopener" target="_blank">{{ elem.text }}</a>

                    <!--Dropdown-->
                    <div (mouseenter)="$event.stopPropagation(); myDrop.open();"
                         (mouseleave)="$event.stopPropagation(); myDrop.close();"
                         *ngIf="elem.type ==='items'">
                      <!--Desktop-->
                      <div class="d-none d-lg-block">
                        <div #myDrop="ngbDropdown" (openChange)="onDropdownOpen($event, i)"
                             class="dropdown dropdown-remove-arrow position-unset"
                             ngbDropdown>
                          <a [ngClass]="{'active': isActive(elem.isActiveUrl)}" class="nav-link dropdown-toggle"
                             href="javascript:void(0)"
                             ngbDropdownToggle>
                            {{ elem.text }}
                          </a>
                          <div [style.left]="leftPositionForDropdown + 'px'" class="nao-dropdown-navigation-container"
                               ngbDropdownMenu>
                            <div class="nao-dropdown-navigation">
                              <a *ngFor="let subitem of elem.items"
                                 [ngClass]="{'active-dropdown-item': isActive(subitem.route)}" [routerLink]="subitem.route"
                                 class="dropdown-item d-flex align-items-center" href="javascript:void(0)">
                                <img [src]="subitem.icon"> <span>{{ subitem.text }}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--MOBILE-->
                      <div class="d-block d-lg-none">
                        <a (click)="toggleMenu(i)"
                           class="nav-link d-flex align-items-center justify-content-between flex-row-reverse-rtl-only"
                           href="javascript:void(0)">
                          {{ elem.text  }}
                          <i [ngClass]="{'nao-icon-arrow-active': elem.isOpen}" class="nao-icon-arrow"></i>
                        </a>

                        <ul *ngIf="elem.isOpen" [@expandCollapse]='elem.isOpen' class="m-0">
                          <li *ngFor="let subitem of elem.items" class="nav-item">
                            <a (click)="isCollapsed=true; elem.isOpen=false" [ngClass]="{'active': isActive(subitem.route)}"
                               [routerLink]="subitem.route"
                               class="nav-link" href="javascript:void(0)">
                              {{ subitem.text  }}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <!--Mega menu-->
                    <div (mouseenter)="$event.stopPropagation(); myMegaMenu.open();"
                         (mouseleave)="$event.stopPropagation(); myMegaMenu.close();"
                         *ngIf="elem.type === 'mega-menu'">
                      <!--On large devices-->
                      <div #myMegaMenu="ngbDropdown"
                           class="position-static nao-no-user-select mega-menu-btn d-none d-lg-block dropdown-remove-arrow"
                           ngbDropdown>
                        <a (click)="isCollapsed=true;" [ngClass]="{'active': isActive(elem.isActiveUrl)}" class="nav-link"
                           ngbDropdownToggle>
                          {{ elem.text }}
                        </a>

                        <div class="mega-menu" ngbDropdownMenu>
                          <ul class="d-flex flex-wrap">
                            <li *ngFor="let app of elem.items">
                              <a [routerLink]="app.route" [title]="app.title" class="mega-menu-item d-flex flex-row"
                                 href="javascript:void(0)">
                                <i [ngClass]="app.iconClass" class="menu-item-icon"></i>
                                <div class="d-flex flex-column">
                                  <div class="menu-item-title pb-2">{{ app.title }}</div>
                                  <div class="menu-item-description">{{ app.description }}</div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <!--On small/medium devices-->
                      <div class="d-block d-lg-none">
                        <a (click)="toggleMenu(i)"
                           class="nav-link d-flex align-items-center justify-content-between flex-row-reverse-rtl-only"
                           href="javascript:void(0)">
                          {{ elem.text }}
                          <i [ngClass]="{'nao-icon-arrow-active': elem.isOpen}" class="nao-icon-arrow"></i>
                        </a>

                        <ul *ngIf="elem.isOpen" [@expandCollapse]='elem.isOpen' class="m-0">
                          <li *ngFor="let subitem of elem.items" class="nav-item">
                            <a (click)="isCollapsed=true; elem.isOpen=false" [ngClass]="{'active': subitem.active}"
                               [routerLink]="subitem.route"
                               class="nav-link" href="javascript:void(0)">
                              {{ subitem.title }}
                            </a>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </li>
                </ul>
              </div>
            </nav>

          </div>

          <!--Right arrow for horizontal scroll inside the navigation-->
          <div [ngClass]="{'hide-navbar-scroll-buttons': !showNextBtn}" class="d-none d-lg-block">
            <a (click)="scrollNext()" class="navbar-horizontal-next">
              <i class="nao-icon-arrow-next-1"></i>
            </a>
          </div>

        </div>

        <!--Secondary links-->
        <a class="secondary-link align-self-center d-none d-lg-block ml-auto mr-4" href="javascript:void(0)">Support</a>
        <!--Cart button-->
        <button class="btn btn-primary d-none d-lg-flex align-items-center btn-cart">
          <img class="mr-3" height="16" src="assets/images/nav/cart.svg">
          <span>8</span>
        </button>

      </div>
    </header>`,
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

            public appList = [
                    {
                      iconClass: 'nao-icon-surveys',
                      title: 'Vendor management',
                      description: 'Improve your supply chain and inventory performance with automated workflows',
                      route: '/business-app/apps'
                    },
                    {
                      iconClass: 'nao-icon-surveys',
                      title: 'Vendor management',
                      description: 'Improve your supply chain and inventory performance with automated workflows',
                      route: '/business-app/apps'
                    },
                    {
                      iconClass: 'nao-icon-surveys',
                      title: 'Vendor management very long title  very long title',
                      description: 'Improve your supply chain and inventory performance with automated workflows very long descriptionvery long descriptionvery long descriptionvery long descriptionvery long descriptionvery long descriptionvery long descriptionvery long description',
                      route: '/business-app/apps'
                    },
                    {
                      iconClass: 'nao-icon-surveys',
                      title: 'Vendor management',
                      description: 'Improve your supply chain and inventory performance with automated workflows',
                      route: '/business-app/apps'
                    },
                    {
                      iconClass: 'nao-icon-surveys',
                      title: 'Vendor management',
                      description: 'Improve your supply chain and inventory performance with automated workflows',
                      route: '/business-app/apps'
                    },
                    {
                      iconClass: 'nao-icon-surveys',
                      title: 'Vendor management',
                      description: 'Improve your supply chain and inventory performance with automated workflows',
                      route: '/business-app/apps'
                    },
                    {
                      iconClass: 'nao-icon-surveys',
                      title: 'Vendor management',
                      description: 'Improve your supply chain and inventory performance with automated workflows',
                      route: '/business-app/apps'
                    },
                    {
                      iconClass: 'nao-icon-surveys',
                      title: 'Vendor management',
                      description: 'Improve your supply chain and inventory performance with automated workflows',
                      route: '/business-app/apps'
                    },
                  ];

                  public menuItems = [
                    {
                      type: 'item', text: 'Business App Store', route: '/business-app/apps', isActiveUrl: 'business-app',
                    },
                    {
                      type: 'item', text: 'Industries', route: '/industries-landing', isActiveUrl: 'industries-landing',
                    },
                    {
                      type: 'item', text: 'Enterprise', route: '/enterprise', isActiveUrl: 'enterprise',
                    },
                    {
                      type: 'item', text: 'Pricing', route: '/pricing', isActiveUrl: 'pricing',
                    },
                    {
                      type: 'items', text: 'Dropdown', isActiveUrl: 'sales-order',
                      items: [
                        {type: 'item', route: '/enterprise', text: 'Enterprise', isActiveUrl: 'enterprise', icon: 'assets/images/nav/card.svg'},
                        {type: 'item', route: '/pricing', text: 'Sales order', icon: 'assets/images/nav/card.svg'},
                        {type: 'item', route: '/industries-landing', text: 'Invoices', icon: 'assets/images/nav/card.svg'},
                      ]
                    },
                    {
                      type: 'items', text: 'Dropdown 2', isActiveUrl: 'sales-order',
                      items: [
                        {type: 'item', route: '/enterprise', text: 'Enterprise', isActiveUrl: 'enterprise', icon: 'assets/images/nav/card.svg'},
                        {type: 'item', route: '/pricing', text: 'Sales order', icon: 'assets/images/nav/card.svg'},
                        {type: 'item', route: '/enterprise', text: 'Enterprise', icon: 'assets/images/nav/card.svg'},
                      ]
                    },
                    {
                      type: 'item', text: 'Contact', route: '/company/contact', isActiveUrl: 'company/contact',
                    },
                    {
                      type: 'mega-menu', text: 'Mega menu', isActiveUrl: 'pricing', isOpen: false, items: this.appList,
                    },
                  ];

                  public isCollapsed = true;
                  public sizeChanged$ = new BehaviorSubject<boolean>(null);
                  public showPrevBtn = false;
                  public showNextBtn = false;
                  public scrollValue = 150; // How much do you want to scroll
                  public subs = new Subscription();
                  public leftPositionForDropdown = 0; // Position fix for the dropdowns inside navigation bar


                  @ViewChild('navbarItems', {static: false}) public navbarItems: ElementRef<any>;
                  @ViewChild('navbarContent', {static: false}) public navbarContent: ElementRef<any>;

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
         * Set the left position for the dropdown menu
         */
        public onDropdownOpen(isOpen: boolean, indexMenuItem: number): void {
          if (indexMenuItem > -1 && this.navbarItems.nativeElement && this.navbarItems.nativeElement.children[indexMenuItem]) {
            // -->Get: offSet left for the dropdown
            let offSetLeft;
            if (this.navbarContent.nativeElement.scrollLeft && this.navbarContent.nativeElement.scrollLeft > 0) {
              offSetLeft = this.navbarItems.nativeElement.children[indexMenuItem].offsetLeft - this.navbarContent.nativeElement.scrollLeft;
            } else {
              offSetLeft = this.navbarItems.nativeElement.children[indexMenuItem].offsetLeft;
            }
            this.leftPositionForDropdown = offSetLeft;
          }
        }

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

        /**
         * Check if an url is active
         */
        public isActive(url) {
          return this.router.isActive(url, false);
        }


        /**
         * Refresh scroll for the previous button
         */
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

        /**
         * Refresh scroll for the next button
         */
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


        /**
         * Scroll next inside the navigation container
         */
        public scrollNext(): void {
          this.navbarContent.nativeElement
            .scrollTo({left: (this.navbarContent.nativeElement.scrollLeft + this.scrollValue), behavior: 'smooth'});
          // -->Show: Prev button
          this.showPrevBtn = true;
          // -->Refresh: next button
          this.refreshScrollNextBtn();

        }

        /**
         * Scroll previous inside the navigation container
         */
        public scrollPrev(): void {
          this.navbarContent.nativeElement
            .scrollTo({left: (this.navbarContent.nativeElement.scrollLeft - this.scrollValue), behavior: 'smooth'});
          // -->Show: Next button
          this.showNextBtn = true;
          // -->Refresh: prev button
          this.refreshScrollPrevBtn();
        }

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

