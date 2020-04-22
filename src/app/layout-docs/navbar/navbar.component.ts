import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NavbarCodeBlocks, MenuInterface, SideMenuInterface, SideMenuV2Interface } from './navbar.interface';
import { LayoutDocsPublicFlow } from '../layout-docs.flowservice';
import { BehaviorSubject, Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
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
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  public data = NavbarCodeBlocks;
  private subs = new Subscription();

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
      type: 'blank', text: 'Blog', href: 'javacript:void(0)', route: '', active: false,
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

  public sideMenuItems: SideMenuInterface[] = [
    {
      type: 'items', textTranslate: 'Layout', route: '', icon: 'nao-icon-crm', isOpen: false,
      items: [
        { type: 'item', route: '', textTranslate: 'Grid', active: false },
        { type: 'item', route: '', textTranslate: 'Components', active: false },
        { type: 'item', route: '', textTranslate: 'Navigation', active: false },
      ]
    },
    {
      type: 'items', textTranslate: 'Components', route: '', icon: 'nao-icon-surveys', isOpen: false,
      items: [
        { type: 'item', route: '', textTranslate: 'Buttons', active: false },
        { type: 'item', route: '', textTranslate: 'Cards', active: false },
        { type: 'item', route: '', textTranslate: 'Dropdowns', active: false },
        { type: 'item', route: '', textTranslate: 'Forms', active: false },
        { type: 'item', route: '', textTranslate: 'Input groups', active: false },
        { type: 'item', route: '', textTranslate: 'Loaders', active: false },
        { type: 'item', route: '', textTranslate: 'Modals', active: false },
        { type: 'item', route: '', textTranslate: 'Tables', active: false },
      ]
    },
    {
      type: 'items', textTranslate: 'Utilities', route: '', icon: 'nao-icon-settings', isOpen: false,
      items: [
        { type: 'item', route: '', textTranslate: 'Colors', active: false },
        { type: 'item', route: '', textTranslate: 'Iconography', active: false },
        { type: 'item', route: '', textTranslate: 'Illustration', active: false },
        { type: 'item', route: '', textTranslate: 'Typography', active: false },
        { type: 'item', route: '', textTranslate: 'Spacing', active: false },
        { type: 'item', route: '', textTranslate: 'Sizing', active: false },
      ]
    },
    {
      type: 'items', textTranslate: 'Photography ', route: '', icon: 'nao-icon-image-placeholder', isOpen: false,
      items: [
        { type: 'item', route: '', textTranslate: 'Overview', active: false },
        { type: 'item', route: '', textTranslate: 'Compositions', active: false },
        { type: 'item', route: '', textTranslate: 'Casting', active: false },
        { type: 'item', route: '', textTranslate: 'Lighting and color', active: false },
        { type: 'item', route: '', textTranslate: 'Locations', active: false },
      ]
    },
    {
      type: 'items', textTranslate: 'Samples ', route: '', icon: 'nao-icon-multiple-choice', isOpen: false,
      items: [
        { type: 'item', route: '', textTranslate: 'Forms', active: false },
      ]
    },
  ];

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
  ];


  /**
   * Top menu header
   */
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
    {
      iconClass: 'nao-icon-surveys',
      title: 'Vendor management',
      description: 'Improve your supply chain and inventory performance with automated workflows',
      route: '/business-app/apps'
    },
  ];

  public menuItemsV2 = [
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
        {type: 'item', route: '/enterprise', text: 'Enterprise', isActiveUrl: 'enterprise', icon: 'assets-local/images/nav/card.svg'},
        {type: 'item', route: '/pricing', text: 'Sales order', icon: 'assets-local/images/nav/card.svg'},
        {type: 'item', route: '/industries-landing', text: 'Invoices', icon: 'assets-local/images/nav/card.svg'},
      ]
    },
    {
      type: 'items', text: 'Dropdown 2', isActiveUrl: 'sales-order',
      items: [
        {type: 'item', route: '/enterprise', text: 'Enterprise', isActiveUrl: 'enterprise', icon: 'assets-local/images/nav/card.svg'},
        {type: 'item', route: '/pricing', text: 'Sales order', icon: 'assets-local/images/nav/card.svg'},
        {type: 'item', route: '/enterprise', text: 'Enterprise', icon: 'assets-local/images/nav/card.svg'},
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
  public leftPositionForDropdown = 0; // Position fix for the dropdowns inside navigation bar

  @ViewChild('navbarItems', {static: false}) public navbarItems: ElementRef<any>;
  @ViewChild('navbarContent', {static: false}) public navbarContent: ElementRef<any>;

  @HostListener('window:resize')
  onResize() {
    // -->Refresh: scroll buttons on size change
    this.sizeChanged$.next(true);
  }

  constructor(
    public readonly appService: AppService,
    public readonly $flow: LayoutDocsPublicFlow
  ) { }

  ngOnInit() {
  }

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
      .scrollTo({ left: (this.navbarContent.nativeElement.scrollLeft + this.scrollValue), behavior: 'smooth' });
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
      .scrollTo({ left: (this.navbarContent.nativeElement.scrollLeft - this.scrollValue), behavior: 'smooth' });
    // -->Show: Next button
    this.showNextBtn = true;
    // -->Refresh: prev button
    this.refreshScrollPrevBtn();
  }

  /**
   * Check if an url is active
   */
  public isActive(url) {
    // return this.router.isActive(url, false);
  }


  /**
   * Toggle a menu item
   */
  public toggleMenu(index): void {
    if (index >= 0) {
      // If the current menu item is closed, close other items
      if (!this.menuItemsV2[index].isOpen) {
        this.menuItemsV2.map((el, i) => {
          if (i !== index) {
            el.isOpen = false;
          }
        });
      }
      this.menuItemsV2[index].isOpen = !this.menuItemsV2[index].isOpen;
    }
  }

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
  }


  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
