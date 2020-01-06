import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { GridCodeBlocks } from './grid.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit {
  public data = GridCodeBlocks;
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
