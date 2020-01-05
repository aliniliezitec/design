import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(public readonly appService: AppService) { }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }

}
