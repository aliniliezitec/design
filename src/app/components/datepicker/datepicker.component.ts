import { Component, OnInit, Output, ViewChild, Input, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { DatepickerCodeBlocks } from './datepicker.interface';
import { BsDatepickerConfig, BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { getMoment, dateLocalPipeTransform } from 'src/app/utils/utils.static';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styles: [
    `.sm { width: 50px; }`,
    `.xs { width: 30px; }`,
    `.lg { width: 150px; }`,
    `.md { width: 90px;}`
  ],
})
export class DatepickerComponent implements OnInit {
  public data = DatepickerCodeBlocks;
  @ViewChild('dp', { static: false }) public bsDatepicker: BsDatepickerDirective;
  @Output() valueChange = new EventEmitter();
  @Input() public options;
  @Input() public size = ''; // sm, xs from styles
  public readonly inputOptions = { maxlength: 4, size: 4 };
  public formattedBsValue: string;
  public displayBsValue = '';
  // -->Config: datepicker
  public bsConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-dark-blue nao-custom-datepicker',
    showWeekNumbers: false,
    adaptivePosition: true
  };

  constructor(
    public readonly appService: AppService
  ) {
  }

  ngOnInit() {
  }

  /**
   * Trigger on value change
   * @param value
   */
  public bsValueChange(value: any): void {
    if (value) {
      // -->Set: formatted value
      this.formattedBsValue = getMoment(value).toISOString();
      // -->Set: display value
      this.setDisplayValue();
      // -->Set: correct format
      this.onChange(this.formattedBsValue);
    }
  }

  /**
   * Set display value
   */
  private setDisplayValue(): void {
    // -->Set: display value
    this.displayBsValue = this.formattedBsValue ? dateLocalPipeTransform(this.formattedBsValue) || '' : '';
  }

  /**
   * On change fire
   * @param event
   */
  public onChange(event) {
    this.propagateChange(this.formattedBsValue);
  }

  public propagateChange: any = () => {};


  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }
}
