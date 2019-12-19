import { Component, OnInit } from '@angular/core';
import { ColorsCodeBlocks, HtmlCodeBlock } from './colors.interface';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
})
export class ColorsComponent implements OnInit {
  public data: HtmlCodeBlock[] = [];

  constructor() { }

  ngOnInit() {
    ColorsCodeBlocks.forEach(el => {
      // -->Set: Code and the syntax Highlighter
      const codeBlock: HtmlCodeBlock = {
        code: el.htmlCode,
        syntaxHighlighter: Prism.highlight(el.htmlCode, Prism.languages.html, 'html')
      };
      this.data.push(codeBlock);
    });
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
