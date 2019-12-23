import { Component, OnInit } from '@angular/core';
import { ModalCodeBlocks } from './modal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  public data = ModalCodeBlocks;

  constructor() { }

  ngOnInit() { }

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