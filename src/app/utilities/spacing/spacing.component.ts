import { Component, OnInit } from '@angular/core';
import { SpacingCodeBlocks } from './spacing.interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-spacing',
  templateUrl: './spacing.component.html',
})
export class SpacingComponent implements OnInit {
  public data = SpacingCodeBlocks;
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
