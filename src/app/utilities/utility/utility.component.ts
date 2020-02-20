import { Component, OnInit } from '@angular/core';
import { UtilityCodeBlocks } from './utility.interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-spacing',
  templateUrl: './utility.component.html',
})
export class UtilityComponent implements OnInit {
  public data = UtilityCodeBlocks;
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
