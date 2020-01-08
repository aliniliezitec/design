import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NavbarCodeBlocks } from './navbar.interface';
import { LayoutDocsPublicFlow } from '../layout-docs.flowservice';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  public data = NavbarCodeBlocks;

  public isExpanded = false;
  public isCollapsed = true;


  public menu = [
    { type: 'title', text: 'MODULES', textTranslate: 'words.modules' },
    {
      type: 'item', textTranslate: 'Contacts', route: '/contacts/list'
    },
    {
      type: 'item', textTranslate: 'Products', route: '/products/list'
    },
    {
      type: 'item', textTranslate: 'Leads', route: '/pre-sales/boards'
    },
    {
      type: 'items', textTranslate: 'Sales', route: '/sales-orders',
      items: [
        { type: 'item', route: '/sales-orders/dashboard', textTranslate: 'Performance' },
        { type: 'item', route: '/sales-orders/list', textTranslate: 'Sales_orders' },
        { type: 'item', route: '/invoices/list', textTranslate: 'Invoices' }
      ]
    },
    {
      type: 'item', textTranslate: 'Survey', route: '/survey/list'
    },
    { type: 'divider' },

  ];
  @Input() orientation = 'vertical';


  public isMenuActive(url) {
    return false;
  }

  constructor(
    public readonly appService: AppService,
    public readonly $flow: LayoutDocsPublicFlow
    ) { }

  ngOnInit() {

  }




  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }
}
