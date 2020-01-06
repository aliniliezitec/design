import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormsCodeBlocks } from './forms.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
})
export class FormsComponent {
  public data = FormsCodeBlocks;

  public formGroup = new FormGroup({
    companyId: new FormControl(''),
    countryId: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', { validators: [Validators.required, Validators.email] }),
    gender: new FormControl(''),
    info: new FormGroup({
      firstName: new FormControl('', { validators: [Validators.required] }),
      lastName: new FormControl('', { validators: [Validators.required] }),
    }),
    languageId: new FormControl(''),
    linkedin: new FormControl(''),
    facebook: new FormControl(''),
    twitter: new FormControl(''),
    website: new FormControl(''),
  });

  public formGroup2 = new FormGroup({
    categoryId: new FormControl(''),
    description: new FormControl(''),
    hasShipping: new FormControl(false),
    images: new FormArray([]),
    inventory: new FormGroup({
      barcode: new FormControl(''),
      quantity: new FormControl(0),
      sku: new FormControl(''),
    }),
    name: new FormControl(''),
    items: new FormArray([
      new FormGroup({
        quantity: new FormControl(''),
        priceSales: new FormControl(''),
        salesTax: new FormControl(''),
      })
    ]),
    priceCost: new FormControl(0),
    priceSales: new FormControl(0),
    shipping: new FormGroup({
      hasShipping: new FormControl(false),
      height: new FormControl(0),
      heightUnit: new FormControl('cm'),
      length: new FormControl(0),
      lengthUnit: new FormControl('cm'),
      weight: new FormControl(0),
      weightUnit: new FormControl('kg'),
      width: new FormControl(0),
      widthUnit: new FormControl('cm'),
    }),
  });

  constructor(public readonly appService: AppService) { }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }

}
