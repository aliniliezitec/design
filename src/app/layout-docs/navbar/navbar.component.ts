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
      type: 'item', textTranslate: 'CRM', route: '/', active: false,
    },
    {
      type: 'item', textTranslate: 'Business Apps', route: '/', active: false,
    },
    {
      type: 'item', textTranslate: 'Enterprise', route: '/', active: true,
    },
    {
      type: 'item', textTranslate: 'Pricing', route: '/', active: false,
    },
    {
      type: 'items', textTranslate: 'Dropdown', route: '/', isOpen: false, active: false,
      items: [
        { type: 'item', route: '/', textTranslate: 'Sub item 1', active: false },
        { type: 'item', route: '/', textTranslate: 'Sub item 2', active: true },
        { type: 'item', route: '/', textTranslate: 'Sub item 3', active: false },
      ]
    },
    {
      type: 'item', textTranslate: 'Blog', route: '/', active: false,
    },
    {
      type: 'item', textTranslate: 'Dashboard', route: '/', active: false,
    },
    {
      type: 'items', textTranslate: 'Another Dropdown', route: '/', isOpen: false, active: false,
      items: [
        { type: 'item', route: '/', textTranslate: 'Sub item 1', active: false },
        { type: 'item', route: '/', textTranslate: 'Sub item 2', active: true },
        { type: 'item', route: '/', textTranslate: 'Sub item 3', active: false },
      ]
    },
    {
      type: 'item', textTranslate: 'Sales', route: '/', active: false,
    },
    {
      type: 'item', textTranslate: 'Leads', route: '/', active: false,
    },
    {
      type: 'item', textTranslate: 'Contact', route: '/', active: false,
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
