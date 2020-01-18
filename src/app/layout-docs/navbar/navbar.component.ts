import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NavbarCodeBlocks, MenuInterface, SideMenuInterface } from './navbar.interface';
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
