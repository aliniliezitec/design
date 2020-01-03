import { Component, OnInit } from '@angular/core';
import { IconsCodeBlocks } from './icons.interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
})
export class IconsComponent implements OnInit {
  public data = IconsCodeBlocks;

  constructor(public readonly appService: AppService) { }

  ngOnInit() { }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }
}
