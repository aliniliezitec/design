import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ComponentsCodeBlocks } from './components.interface';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
})
export class ComponentsComponent implements OnInit {
  public data = ComponentsCodeBlocks;
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
