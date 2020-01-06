import { Component, OnInit } from '@angular/core';
import { SizingCodeBlocks } from './sizing.interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-sizing',
  templateUrl: './sizing.component.html',
})
export class SizingComponent implements OnInit {
  public data = SizingCodeBlocks;
  constructor(public readonly appService: AppService) { }

  ngOnInit() {
  }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }

}
