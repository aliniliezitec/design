import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NavbarCodeBlocks } from './navbar.interface';
import { LayoutDocsPublicFlow } from '../layout-docs.flowservice';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  public data = NavbarCodeBlocks;
  private subs = new Subscription();

  public isCollapsed = true;
  public sizeChanged$ = new BehaviorSubject<boolean>(null);
  public showPrevBtn = false;
  public showNextBtn = false;
  public scrollValue = 150; // How much do you want to scroll

  @ViewChild('navbarContent', { static: false }) public navbarContent: ElementRef<any>;
  @HostListener('window:resize', ['$event'])
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
            this.refreshScrollPrevBtn();
            this.refreshScrollNextBtn();
          });
        })
    );
  }

  public refreshScrollPrevBtn(): void {
    const scrollLeft = this.navbarContent.nativeElement.scrollLeft;

    if (scrollLeft > this.scrollValue) {
      // -->Show: Prev button
      this.showPrevBtn = true;
    } else {
      // -->Hide: Prev button
      this.showPrevBtn = false;
    }
  }
  public refreshScrollNextBtn(): void {
    const scrollLeft = this.navbarContent.nativeElement.scrollLeft;
    const offsetWidth = this.navbarContent.nativeElement.offsetWidth;
    const scrollWidth = this.navbarContent.nativeElement.scrollWidth;

    if (scrollLeft + offsetWidth < scrollWidth - this.scrollValue) {
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
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
