import { Component, OnInit } from '@angular/core';
import { FormsCodeBlocks } from './forms.interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
})
export class FormsComponent implements OnInit {
  public data = FormsCodeBlocks;

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
