import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItems } from '../layout.interface';

@Component({
  selector: 'app-nao-sidenav',
  templateUrl: './nao-sidenav.component.html',
  animations: [
    trigger('expandCollapseSidenav', [
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

export class NaoSidenavComponent implements OnInit {
  public sideMenuItems = MenuItems;

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * Toggle a menu item
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

}
