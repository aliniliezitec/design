export const ModalCodeBlocks = [
    {
        html: `
        <div class="modal nao-modal nao-modal-1" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header text-white bg-primary flex-column">
                        <h6 class="modal-subtitle mb-1">Descriptor</h6>
                        <h6 class="modal-title">Subject</h6>
                    </div>
                    <div class="modal-body">
                        Modal body text goes here. After deleting this you won't be able to recover it.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-simple-dark-blue btn-sm" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-simple-primary btn-sm">Confirm</button>
                    </div>
                </div>
            </div>
        </div>`,
        ts1: `
        constructor(private readonly modalService: NgbModal) {}
        `,
        ts2: `
        // -->Open: the modal
        const modalRef = this.modalService.open(ModalComponent, {
            centered: true, windowClass: 'nao-modal-window-class', backdropClass: 'nao-modal-backdrop', size: 'lg',
        });
        // -->Set: data
        modalRef.componentInstance.data = data || {};
        modalRef.componentInstance.mode = 'id';
        // -->Await: result
        modalRef.result
        .then(modalRes => {
            if (modalRes && modalRes.ok) {
            // -->Refresh
            this.refresh();
            }
        })
        .catch(err => {
            this.status.error();
            this.contactsService.sharedService.swalApiError(err);
        });`
    },
  {
    html: `
    <div class="modal nao-modal nao-modal-1" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header flex-column bg-primary text-white">
            <h6 class="modal-subtitle mb-1">Create</h6>
            <h6 class="modal-title">New user</h6>
          </div>
          <div class="modal-body">
            <form>
              <div [formGroup]="formGroup">

                <div formGroupName="info">
                  <div class="mb-3">
                    <!-- Input field-->
                    <div class="d-flex flex-column no-gutters">
                      <label class="nao-label-sm-1">
                        First Name
                        <sup>*</sup>
                      </label>
                      <input [ngClass]="{'is-invalid': !(formGroup.get('info.firstName').pristine || formGroup.get('info.firstName').disabled || formGroup.get('info.firstName').valid)}" autocomplete="false" class="form-control form-control-sm mb-1"
                             formControlName="firstName" placeholder="First name"
                             type="text"/>
                    </div>
                    <div class="d-flex flex-column no-gutters">
                      <div
                        [hidden]="formGroup.get('info.firstName').pristine || formGroup.get('info.firstName').disabled || formGroup.get('info.firstName').valid">

                        <span [innerHtml]="formGroup.get('info.firstName').errors | formTranslateErrorsHTML"
                              class="nao-label-sm-1 text-danger"></span>
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <!-- Input field-->
                    <div class="d-flex flex-column no-gutters">
                      <label class="nao-label-sm-1">
                        Last name
                        <sup>*</sup>
                      </label>
                      <input [ngClass]="{'is-invalid': !(formGroup.get('info.lastName').pristine || formGroup.get('info.lastName').disabled || formGroup.get('info.lastName').valid)}" autocomplete="false" class="form-control form-control-sm mb-1"
                             formControlName="lastName" placeholder="Last name"
                             type="text"/>
                    </div>
                    <div class="d-flex flex-column no-gutters">
                      <div
                        [hidden]="formGroup.get('info.lastName').pristine || formGroup.get('info.lastName').disabled || formGroup.get('info.lastName').valid">

                        <span [innerHtml]="formGroup.get('info.lastName').errors | formTranslateErrorsHTML"
                              class="nao-label-sm-1 text-danger"></span>
                      </div>
                    </div>
                  </div>


                </div>

                <div class="mb-3">
                  <!-- Input field-->
                  <div class="d-flex flex-column no-gutters">
                    <label class="nao-label-sm-1">
                      Email
                      <sup>*</sup>
                    </label>
                    <input [ngClass]="{'is-invalid': !(formGroup.get('email').pristine || formGroup.get('email').disabled || formGroup.get('email').valid)}" [placeholder]="'words.email' | flowTranslate" autocomplete="false"
                           class="form-control form-control-sm mb-1" formControlName="email"
                           type="text"/>
                  </div>
                  <div class="d-flex flex-column no-gutters">
                    <div
                      [hidden]="formGroup.get('email').pristine || formGroup.get('email').disabled || formGroup.get('email').valid">
                      <span [innerHtml]="formGroup.get('email').errors | formTranslateErrorsHTML"
                            class="nao-label-sm-1 text-danger"></span>
                    </div>
                  </div>
                </div>


                <div class="mb-2">
                  <!-- Input field-->
                  <div class="d-flex flex-column no-gutters">
                    <label class="nao-label-sm-1">
                      Password
                      <sup>*</sup>
                    </label>
                    <input [ngClass]="{'is-invalid': !(formGroup.get('password').pristine || formGroup.get('password').disabled || formGroup.get('password').valid)}" autocomplete="false" class="form-control form-control-sm mb-1"
                           formControlName="password"
                           type="password"/>
                  </div>
                  <div class="d-flex flex-column no-gutters">
                    <div
                      [hidden]="formGroup.get('password').pristine || formGroup.get('password').pristine || formGroup.get('password').disabled || formGroup.get('password').valid">
                      <span [innerHtml]="formGroup.get('password').errors | formTranslateErrorsHTML"
                            class="nao-label-sm-1 text-danger"></span>
                    </div>
                    <div class="nao-field-explanation nao-label-sm-1">Must have at least 8 characters</div>
                  </div>
                </div>

                <div formGroupName="settings">
                  <div class="d-flex custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" name="checkbox" id="checkbox1" formControlName="askPasswordOnNextLogin">
                    <label class="custom-control-label align-self-center fix-checkbox-center" for="checkbox1">
                      Require password change on next sign in
                      </label>
                  </div>

                  <div class="pt-1" [hidden]="formGroup.get('settings.askPasswordOnNextLogin').disabled || formGroup.get('settings.askPasswordOnNextLogin').valid">
                    <span [innerHtml]="formGroup.get('settings.askPasswordOnNextLogin').errors | formTranslateErrorsHTML" class="nao-label-sm-1 text-danger"></span>
                  </div>
                </div>


              </div>
            </form>
          </div>
          <div class="modal-footer">
        <button (click)="dismiss()" class="btn btn-sm btn-simple-dark-blue nao-btn-transition" type="button">
          Cancel
        </button>
        <button (click)="saveDocuserData()" [disabled]="formGroup.pristine || !formGroup.valid" class="btn btn-sm btn-simple-primary nao-btn-transition ml-2" type="button">
          Confirm
        </button>
      </div>
      </div>
     </div>
    </div>

    `
  },
    {
        html: `
        <div class="modal nao-modal nao-modal-2" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header flex-column">
                        <h5 class="modal-subtitle mb-1">Descriptor</h5>
                        <h5 class="modal-title">Subject</h5>
                    </div>
                    <div class="modal-body">
                        <p>A few things to keep in mind when suspending users:</p>
                        <div class="d-flex">
                            <i class="nao-icon-information mr-1"></i>
                            <p>User subscription fees still apply to the suspended users</p>
                        </div>
                        <div class="d-flex">
                            <i class="nao-icon-information mr-1"></i>
                            <p>The user’s data will remain intact but they won’t be able to sign-in as long as they’re suspended</p>
                        </div>
                        <div class="d-flex">
                            <i class="nao-icon-information mr-1"></i>
                            <p>The user’s data will remain intact but they won’t be able to sign-in as long as they’re suspended</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-simple-dark-blue btn-sm" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-simple-primary btn-sm">Create</button>
                    </div>
                </div>
            </div>
        </div>`
    },
];
