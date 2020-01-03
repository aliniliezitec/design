import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { LoadersCodeBlocks } from './loaders.interface';

@Component({
  selector: 'app-loaders',
  templateUrl: './loaders.component.html',
})
export class LoadersComponent implements OnInit {
  public data = LoadersCodeBlocks;

  constructor(public readonly appService: AppService) { }

  ngOnInit() { }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }
}
