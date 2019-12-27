import { Component, OnInit } from '@angular/core';
import { ColorsCodeBlocks } from './colors.interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
})
export class ColorsComponent implements OnInit {
  public data = ColorsCodeBlocks;

  constructor(public readonly appService: AppService) { }

  ngOnInit() { }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }
}
