import { Component, OnInit } from '@angular/core';
import { DropdownCodeBlocks } from './dropdown.interface';
import { AppService } from 'src/app/app.service';
import { ComponentsPublicFlow } from '../components.flowservice';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements OnInit {
  public data = DropdownCodeBlocks;

  constructor(
    public readonly appService: AppService,
    public readonly $flow: ComponentsPublicFlow
    ) { }

  ngOnInit() {
  }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }
}
