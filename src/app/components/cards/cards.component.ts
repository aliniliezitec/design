import { Component, OnInit } from '@angular/core';
import { CardsCodeBlocks } from './cards.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {
  public data = CardsCodeBlocks;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = code;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
