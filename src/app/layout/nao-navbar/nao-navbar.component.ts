import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItems } from '../layout.interface';
import { AppService } from 'src/app/app.service';

type langDir = 'ltr' | 'rtl';

@Component({
  selector: 'app-nao-navbar',
  templateUrl: './nao-navbar.component.html',
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
export class NaoNavbarComponent implements OnInit {
  public menuItems = MenuItems;
  public isCollapsed = true;
  @Input() dir: langDir;
  @Input() isRTL = false;
  @Output() dirChange = new EventEmitter<langDir>();

  constructor(public readonly appService: AppService) { }

  ngOnInit(): void { }

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
   * Chnage direction RTL | LTR
   */
  changeDirTo(dir: langDir) {
    // We need to see whats solution is better
    // 1
    this.dir = dir;
    this.dirChange.emit(dir);

    // I changed everything to add the direction on the body element
    // because there are elements on which the container is body, fx: ngbDropdown
    const body = document.getElementsByTagName('body')[0];
    body.dir = dir;

    // -->Change: isRTL for componenets like `ngbDropdown`
    this.appService.changeRTL(dir === 'rtl');
  }

}
