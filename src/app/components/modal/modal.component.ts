import { Component, OnInit } from '@angular/core';
import { ModalCodeBlocks } from './modal.interface';
import { AppService } from 'src/app/app.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  public data = ModalCodeBlocks;
  public formGroup = new FormGroup({
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    info: new FormGroup({
      firstName: new FormControl('', {validators: [Validators.required]}),
      lastName: new FormControl('', {validators: [Validators.required]}),

    }),
    inviteId: new FormControl(''),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
      ]
    }),

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
