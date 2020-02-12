import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { GridCodeBlocks } from './announcement.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './announcement.component.html',
})
export class AnnouncementComponent implements OnInit {
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
