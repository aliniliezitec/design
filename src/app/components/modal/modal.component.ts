import { Component, OnInit } from '@angular/core';
import { ModalCodeBlocks } from './modal.interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  public data = ModalCodeBlocks;

  constructor(public readonly appService: AppService) { }

  ngOnInit() { }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }
}
