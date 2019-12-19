import { Component, OnInit } from '@angular/core';
import { FormsCodeBlocks } from './forms.interface';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
})
export class FormsComponent implements OnInit {

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
