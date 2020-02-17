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


  public formGroup1 = new FormGroup(({
    legalName: new FormControl('', {validators: [Validators.required]}),
    address_line_1: new FormControl('', {validators: [Validators.required]}),
    address_line_2: new FormControl(''),
    phone: new FormControl(''),
    languageId: new FormControl('', {validators: [Validators.required]}),
    languageId_2: new FormControl('',),
  }))

  public formGroup3 = new FormGroup({
    firstName: new FormControl('', {validators: [Validators.required]}),
    lastName: new FormControl('', {validators: [Validators.required]}),
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    employees: new FormControl('10'),
    password: new FormControl('', {validators: [Validators.required]}),
    confirmPassword: new FormControl('', {validators: [Validators.required]}),
    countryId: new FormControl('usa'),
    companyName: new FormControl(''),
    agreeToNewsletters: new FormControl(true),
  });

  constructor(public readonly appService: AppService) {
  }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }

}
