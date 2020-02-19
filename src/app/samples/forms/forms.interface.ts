export const FormsCodeBlocks = [
  {
    html: `
    <div class="card nao-card-1 mb-5">
        <div class="card-header">
          <h5 class="card-header-title mb-1">Public business information</h5>
          <h5 class="card-header-subtitle">This information helps customers recognize your business and understand your
            products and terms of service. Your support information may be visible in payment statements, invoices, and
            receipts.</h5>
        </div>
        <div class="card-body">
          <div [formGroup]="formGroup1">

            <!-- This is the container for one input field + error messages + explanatory message-->
            <div class="mb-3">
              <!-- Input field-->
              <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                  <label class="nao-label-1">
                    Business name <sup class="text-danger">*</sup>
                  </label>
                </div>
                <div class="col">
                  <input [ngClass]="{'is-invalid': !(formGroup1.get('legalName').pristine || formGroup1.get('legalName').disabled || formGroup1.get('legalName').valid)}" autocomplete="off" class="form-control nao-mw-0 nao-mw-sm-250 mb-1"
                         formControlName="legalName" placeholder="Business name"
                         type="text"/>
                </div>
              </div>

              <!-- message below -->
              <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                <div class="col-12 col-sm-5">
                </div>
                <div class="col pb-1">
                  <!-- error messages -->
                  <div
                    [hidden]="formGroup1.get('legalName').pristine || formGroup1.get('legalName').disabled || formGroup1.get('legalName').valid"
                    class="pb-1">

                    <span *ngIf="formGroup1.get('legalName').errors" class="nao-label-sm-1 text-danger">
                      This input field is required is required.
                    </span>
                  </div>
                  <!-- explanatory message-->
                  <div class="nao-field-explanation nao-label-sm-1">
                    This should be your legal business name exactly as it appears on your tax ID.
                  </div>
                </div>
              </div>
            </div>

            <!-- This is the container for one input field + error message -->
            <div class="mb-3">
              <!-- Input field-->
              <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                  <label class="nao-label-1">
                    Address 1 <sup class="text-danger">*</sup>
                  </label>
                </div>
                <div class="col">
                  <input [ngClass]="{'is-invalid': !(formGroup1.get('address_line_1').pristine || formGroup1.get('address_line_1').disabled || formGroup1.get('address_line_1').valid)}" autocomplete="off" class="form-control nao-mw-0 nao-mw-sm-250 mb-1"
                         formControlName="address_line_1" placeholder="Address"
                         type="text"/>
                </div>
              </div>
              <!-- message below -->
              <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                <div class="col-12 col-sm-5">
                </div>
                <div class="col">
                  <!-- error messages -->
                  <div [hidden]="formGroup1.get('address_line_1').pristine || formGroup1.get('address_line_1').disabled || formGroup1.get('address_line_1').valid"
                       class="pb-1">

                    <span *ngIf="formGroup1.get('address_line_1').errors" class="nao-label-sm-1 text-danger">
                      This input field is required is required.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- This is the container for one input field + explanatory message-->
            <div class="mb-3">
              <!-- Input field-->
              <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                  <label class="nao-label-1">
                    Address 2
                  </label>
                </div>
                <div class="col">
                  <input autocomplete="off" class="form-control nao-mw-0 nao-mw-sm-250 mb-1" formControlName="address_line_2"
                         placeholder="Address" type="text"/>
                </div>
              </div>
              <!--  message below -->
              <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                <div class="col-12 col-sm-5">
                </div>
                <div class="col">
                  <!-- explanatory message-->
                  <div class="nao-field-explanation nao-label-sm-1 pb-1">
                    You probably have a second address.
                  </div>
                </div>
              </div>
            </div>

            <!-- This is the container for one input field -->
            <div class="mb-3">
              <!-- Input field-->
              <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                  <label class="nao-label-1">
                    Phone number
                  </label>
                </div>
                <div class="col">
                  <input autocomplete="off" class="form-control nao-mw-0 nao-mw-sm-250 mb-1" formControlName="phone"
                         placeholder="Address" type="text"/>
                </div>
              </div>
            </div>

            <!-- This is the container for one <ng-select> dropdown with error message -->
            <div class="mb-3">
              <!--  <ng-select> dropdown -->
              <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                  <label class="nao-label-1">
                    Language <sup class="text-danger">*</sup>
                  </label>
                </div>
                <div class="col">
                  <ng-select [multiple]="false" [ngClass]="{'ng-select-invalid': !(formGroup1.get('languageId').pristine || formGroup1.get('languageId').disabled || formGroup1.get('languageId').valid)}" [searchable]="true"
                             bindLabel="name" bindValue="value" class="nao-mw-0 nao-mw-sm-250 mb-1"
                             clearAllText="Clear"
                             formControlName="languageId"
                             notFoundText="Not found">
                    <ng-option value="1">
                      English
                    </ng-option>
                    <ng-option value="2">
                      German
                    </ng-option>
                    <ng-option value="3">
                      France
                    </ng-option>
                  </ng-select>
                </div>
              </div>
              <!--  message below -->
              <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                <div class="col-12 col-sm-5">
                </div>
                <div class="col">
                  <!-- error message-->
                  <div [hidden]="formGroup1.get('languageId').pristine || formGroup1.get('languageId').disabled || formGroup1.get('languageId').valid"
                       class="pb-1">

                    <span *ngIf="formGroup1.get('languageId').errors" class="nao-label-sm-1 text-danger">
                    Invalid language.
                  </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- This is the container for one <ng-select> with explanatory message-->
            <div class="mb-3">
              <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                  <label class="nao-label-1">
                    Language 2
                  </label>
                </div>
                <div class="col">
                  <ng-select [clearable]="false" [multiple]="false" [searchable]="true" bindLabel="name"
                             bindValue="value" class="nao-mw-0 nao-mw-sm-250 mb-1" clearAllText="Clear"
                             formControlName="languageId_2"
                             notFoundText="Not found">
                    <ng-option value="1">
                      English
                    </ng-option>
                    <ng-option value="2">
                      German
                    </ng-option>
                    <ng-option value="3">
                      France
                    </ng-option>
                  </ng-select>
                </div>
              </div>
              <!--  message below -->
              <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                <div class="col-12 col-sm-5">
                </div>
                <div class="col">
                  <!-- explanatory message-->
                  <div class="nao-field-explanation nao-label-sm-1 pb-1">
                    Use this field if you have a second language in your company.
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div class="card-footer text-right">
          <button class="btn btn-outline-only-primary nao-btn-transition" type="button">
            Cancel
          </button>
          <button [disabled]="formGroup1.pristine || !formGroup1.valid" class="btn btn-primary nao-btn-transition ml-2"
                  data-style="expand-right" type="submit">
            Save
          </button>
        </div>
      </div>`,
    ts1: `
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
      });`},
  {
    html: `
     <div class="nao-crm-free-trial-form bg-white">
        <form [formGroup]="formGroup3">
          <div class="form-intro">
            Sign up now to start your free trial!
          </div>
          <div class="row">
            <div class="form-group mb-2 col-md-6">
              <label class="nao-label-sm-1" for="firstName">First name</label>
              <input autocomplete="false" class="form-control form-control-sm mb-1" formControlName="firstName"
                     id="firstName" placeholder="Meg" type="text">
              <span [hidden]="formGroup3.get('firstName').pristine || formGroup3.get('firstName').valid"
                    class="nao-label-sm-1 text-danger">
                First name is required
              </span>
            </div>
            <div class="form-group mb-2 col-md-6">
              <label class="nao-label-sm-1" for="lastName">Last name</label>
              <input autocomplete="false" class="form-control form-control-sm mb-1" formControlName="lastName"
                     id="lastName" placeholder="Griffin" type="text"/>
              <span [hidden]="formGroup3.get('lastName').pristine || formGroup3.get('lastName').valid"
                    class="nao-label-sm-1 text-danger">
                Last name is required
              </span>
            </div>
          </div>

          <div class="form-group mb-2">
            <label class="nao-label-sm-1" for="email">Email</label>
            <input autocomplete="false" class="form-control form-control-sm mb-1" formControlName="email" id="email"
                   placeholder="elon@musk.com" type="text"/>
            <span [hidden]="formGroup3.get('email').pristine || formGroup3.get('email').valid" class="text-danger nao-label-sm-1">
              Email is required
            </span>
          </div>

          <div class="form-group mb-2">
            <label class="nao-label-sm-1" for="companyName">Company</label>
            <input autocomplete="false" class="form-control form-control-sm mb-1" formControlName="companyName"
                   id="companyName" placeholder="SpaceX Inc" type="text"/>
            <span [hidden]="formGroup3.get('companyName').pristine || formGroup3.get('companyName').valid"
                  class="nao-label-sm-1 text-danger">
              Company is required
            </span>
          </div>

          <div class="form-group mb-2">
            <label class="nao-label-sm-1">Company size</label>
            <br/>
            <ng-select [clearable]="false"
                       [ngClass]="{'ng-select-invalid': !formGroup3.get('employees').disabled && formGroup3.get('employees').invalid }"
                       [searchable]="false" class="nao-ng-select-sm"
                       formControlName="employees">
              <ng-option [value]="10">
                10
              </ng-option>
              <ng-option [value]="50">
                50
              </ng-option>
              <ng-option [value]="10">
                100
              </ng-option>
            </ng-select>
          </div>

          <div class="form-group mb-2">
            <label class="nao-label-sm-1" for="password">Password</label>
            <input autocomplete="false" class="form-control form-control-sm mb-1" formControlName="password"
                   id="password" placeholder="SpaceX Inc" type="password"/>
            <span [hidden]="formGroup3.get('password').pristine || formGroup3.get('password').valid"
                  class="nao-label-sm-1 text-danger">
              Password field is required
            </span>
          </div>
          <div class="form-group mb-2">
            <label class="nao-label-sm-1" for="confirmPassword">Confirm password</label>
            <input autocomplete="false" class="form-control form-control-sm mb-1" formControlName="confirmPassword"
                   id="confirmPassword" placeholder="SpaceX Inc" type="password"/>
            <span [hidden]="formGroup3.get('confirmPassword').pristine || formGroup3.get('confirmPassword').valid"
                  class="nao-label-sm-1 text-danger">
              Password field is required
            </span>
          </div>

          <div class="form-group mb-3">
            <label class="nao-label-sm-1">Country</label>

            <ng-select [clearable]="false" [multiple]="false" bindLabel="name" bindValue="value"
                       class="nao-ng-select-sm mb-1"
                       formControlName="countryId">
              <ng-option value="usa">
                USA
              </ng-option>
              <ng-option value=de>
                Germany
              </ng-option>
              <ng-option value="fr">
                France
              </ng-option>
            </ng-select>
          </div>

          <button [disabled]="formGroup3.pristine || !formGroup3.valid" class="btn btn-primary"
                  data-style="expand-right"
                  type="button">START MY FREE TRIAL
          </button>


          <div class="nao-terms mt-2">
            By signing up, you agree to our <a href="https://naologic.com/legal/terms-and-conditions"
                                               target="_blank">Terms of Service</a> and
            <a href="https://naologic.com/legal/privacy-policy" target="_blank">Privacy Notice</a>
          </div>
          <div class="nao-separator"></div>
          <div class="d-flex align-items-center nao-crm-back-login pl-4 pl-sm-0">
            <div>Already have a user? <a [routerLink]="['/', 'login']">Sign in</a></div>
          </div>
        </form>
      </div>` }
];
