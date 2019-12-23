import { Component, OnInit } from '@angular/core';
import { ModalCodeBlocks, HtmlCodeBlock } from './modal.interface';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  public data: HtmlCodeBlock[] = [];

  constructor() { }

  ngOnInit() {
    ModalCodeBlocks.forEach(el => {
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


// public customizeAccess(data?): void {
//   // NOTICE: this opens a modal and returns the data here! It doesn't submit it by itself!!!!
//   // NOTICE: this opens a modal and returns the data here! It doesn't submit it by itself!!!!
//   // NOTICE: this opens a modal and returns the data here! It doesn't submit it by itself!!!!
//   // -->Open: the modal-ish
//   const modalRef = this.modalService.open(CustomizeUserAccessLevelModalComponent, {
//     centered: true, windowClass: 'nao-modal', backdropClass: 'nao-modal-backdrop', size: 'lg',
//   });
//   // -->Set: data
//   modalRef.componentInstance.data = data;
//   // -->Await: result
//   modalRef.result
//     .then(modalRes => {
//       if (modalRes && modalRes.ok) {
//         // -->Refresh: and add new shit
//         this.refresh();
//       }
//     })
//     .catch(err => {
//       // this.status.error();
//       // this.contactsService.sharedService.swalApiError(err);
//     });
// }