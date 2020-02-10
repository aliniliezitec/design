import { Component, OnInit } from '@angular/core';
import { WizardCodeBlocks } from './wizard.interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
})
export class WizardComponent implements OnInit {
  public data = WizardCodeBlocks;

  constructor(public readonly appService: AppService) { }

  ngOnInit() { }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }
}
