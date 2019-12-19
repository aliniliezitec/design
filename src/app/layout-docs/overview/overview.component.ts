import { Component, OnInit } from '@angular/core';
import { OverviewCodeBlocks } from './overview.interface';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  public code1;
  public html1;

  constructor() { }

  ngOnInit() {
    // -->Set: Code for the the first element
    this.code1 = OverviewCodeBlocks.code1;
    // -->Set: the highlighted syntax
    this.html1 = Prism.highlight(this.code1, Prism.languages.html, 'html');
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
