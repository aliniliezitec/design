import { Component, OnInit } from '@angular/core';
import { InputGroupCodeBlocks } from './input-group.interface';
import { AppService } from 'src/app/app.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
})
export class InputGroupComponent implements OnInit {
  public data = InputGroupCodeBlocks;

  public formGroupHeight = new FormGroup({
    height: new FormControl(0),
    heightUnit: new FormControl('cm'),
  });

  constructor(public readonly appService: AppService) { }

  ngOnInit() { }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }
}
