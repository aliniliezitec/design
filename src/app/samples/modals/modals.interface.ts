export const FormsCodeBlocks = [
  {
    html: `
   <div class="modal nao-modal nao-modal-2" role="dialog" tabindex="-1">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">

            <div class="modal-header flex-column">
              <h5 class="modal-title mb-1">Add contact</h5>
              <h5 class="modal-subtitle">Create a new contact</h5>
            </div>
            <div class="modal-body nao-modal-body-2">
              <form>
                <div [formGroup]="formGroup">

                  <div formGroupName="info">

                    <!-- This is the container for one input field-->
                    <div class="mb-3">
                      <!-- Input field-->
                      <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                        <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                          <label class="nao-label-1">
                            First name
                            <sup class="text-danger">*</sup>
                          </label>
                        </div>
                        <div class="col">
                          <input
                            [ngClass]="{'is-invalid': !(formGroup.get('info.firstName').pristine || formGroup.get('info.firstName').disabled || formGroup.get('info.firstName').valid)}"
                            autocomplete="off"
                            class="form-control nao-mw-0 nao-mw-sm-210 mb-1"
                            formControlName="firstName" placeholder="First name"
                            type="text"/>
                        </div>
                      </div>
                      <!-- error messages -->
                      <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                        <div class="col-12 col-sm-5">
                        </div>
                        <div class="col">
                          <div
                            [hidden]="formGroup.get('info.firstName').pristine || formGroup.get('info.firstName').disabled || formGroup.get('info.firstName').valid"
                            class="">
                          <span *ngIf="formGroup.get('info.firstName').errors" class="nao-label-sm-1 text-danger">
                            First name is required.
                          </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- This is the container for one input field-->
                    <div class="mb-3">
                      <!-- Input field-->
                      <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                        <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                          <label class="nao-label-1">
                            Last name
                            <sup class="text-danger">*</sup>
                          </label>
                        </div>
                        <div class="col">
                          <input
                            [ngClass]="{'is-invalid': !(formGroup.get('info.lastName').pristine || formGroup.get('info.lastName').disabled || formGroup.get('info.lastName').valid)}"
                            autocomplete="off"
                            class="form-control nao-mw-0 nao-mw-sm-210 mb-1"
                            formControlName="lastName" placeholder="Last name"
                            type="text"/>
                        </div>
                      </div>
                      <!-- error messages -->
                      <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                        <div class="col-12 col-sm-5">
                        </div>
                        <div class="col">
                          <div
                            [hidden]="formGroup.get('info.lastName').pristine || formGroup.get('info.lastName').disabled || formGroup.get('info.lastName').valid"
                            class="">
                          <span *ngIf="formGroup.get('info.lastName').errors" class="nao-label-sm-1 text-danger">
                            Last name is required.
                          </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <!-- This is the container for one input field-->
                  <div class="mb-3">
                    <!-- Input field-->
                    <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                      <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                        <label class="nao-label-1">
                          Company
                        </label>
                      </div>
                      <div class="col">
                        <ng-select [clearable]="false" [multiple]="false" [searchable]="true" bindLabel="name"
                                   bindValue="value" class="nao-mw-0 nao-mw-sm-210" clearAllText="Clear"
                                   formControlName="companyId"
                                   notFoundText="Not found" placeholder="Type to search">
                          <ng-option value="1">
                            First company
                          </ng-option>
                          <ng-option value="2">
                            Second company
                          </ng-option>
                          <ng-option value="3">
                            Third company
                          </ng-option>
                        </ng-select>
                      </div>
                    </div>
                    <!-- Create button -->
                    <div class="d-flex flex-column flex-sm-row align-items-center  no-gutters">
                      <div class="col-12 col-sm-5">
                      </div>
                      <div class="col">
                        <div class="pt-2 pb-1">
                          <button class="btn btn-sm btn-simple-primary" type="button"><i
                            class="nao-icon-add-filled mr-1"></i>Create
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- This is the container for one input field-->
                  <div class="mb-3">
                    <!-- Input field-->
                    <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                      <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                        <label class="nao-label-1">
                          Email
                          <sup class="text-danger">*</sup>
                        </label>
                      </div>
                      <div class="col">
                        <input
                          [ngClass]="{'is-invalid': !(formGroup.get('email').pristine || formGroup.get('email').disabled || formGroup.get('email').valid)}"
                          autocomplete="off" class="form-control nao-mw-0 nao-mw-sm-210 mb-1"
                          formControlName="email" placeholder="Email"
                          type="text"/>
                      </div>
                    </div>
                    <!-- error messages -->
                    <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                      <div class="col-12 col-sm-5">
                      </div>
                      <div class="col">
                        <div
                          [hidden]="formGroup.get('email').pristine || formGroup.get('email').disabled || formGroup.get('email').valid"
                          class="pb-1">
                        <span *ngIf="formGroup.get('email').errors" class="nao-label-sm-1 text-danger">
                          Email is required
                        </span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <!-- This is the container for one input field-->
                  <div class="mb-3">
                    <!-- Input field-->
                    <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                      <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                        <label class="nao-label-1">
                          Language
                        </label>
                      </div>
                      <div class="col pb-1">
                        <ng-select [clearable]="false" [multiple]="false" [searchable]="true" bindLabel="name"
                                   bindValue="value" class="nao-mw-0 nao-mw-sm-210" clearAllText="Clear"
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
                    <!-- error messages -->
                    <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                      <div class="col-12 col-sm-5">
                      </div>
                      <div class="col">
                        <div
                          [hidden]="formGroup.get('languageId').pristine || formGroup.get('languageId').disabled || formGroup.get('languageId').valid"
                          class="">
                        <span *ngIf="formGroup.get('languageId').errors" class="nao-label-sm-1 text-danger">
                          Invalid language.
                        </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- This is the container for one input field-->
                  <div class="mb-3">
                    <!-- Input field-->
                    <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                      <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                        <label class="nao-label-1">
                          Country
                          <sup class="text-danger">*</sup>
                        </label>
                      </div>
                      <div class="col pb-1">
                        <ng-select [clearable]="false" [multiple]="false"
                                   [ngClass]="{'ng-select-invalid': !(formGroup.get('countryId').pristine || formGroup.get('countryId').disabled || formGroup.get('countryId').valid)}"
                                   [searchable]="true"
                                   bindLabel="name" bindValue="value" class="nao-mw-0 nao-mw-sm-210"
                                   clearAllText="Clear"
                                   formControlName="countryId"
                                   notFoundText="Not found">
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
                    </div>
                    <!-- error messages -->
                    <div class="d-flex flex-column flex-sm-row align-items-cente no-gutters">
                      <div class="col-12 col-sm-5">
                      </div>
                      <div class="col">
                        <div
                          [hidden]="formGroup.get('countryId').pristine || formGroup.get('countryId').disabled || formGroup.get('countryId').valid"
                          class="">
                        <span *ngIf="formGroup.get('countryId').errors" class="nao-label-sm-1 text-danger">
                          Country error
                        </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- This is the container for one input field-->
                  <div class="mb-3">
                    <!-- Input field-->
                    <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                      <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                        <label class="nao-label-1">
                          Facebook
                        </label>
                      </div>
                      <div class="col">
                        <input autocomplete="off" class="form-control nao-mw-0 nao-mw-sm-210 mb-1" formControlName="facebook"
                               placeholder="Facebook" type="text"/>
                      </div>
                    </div>
                  </div>

                  <!-- This is the container for one input field-->
                  <div class="mb-3">
                    <!-- Input field-->
                    <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                      <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                        <label class="nao-label-1">
                          Linkedin
                        </label>
                      </div>
                      <div class="col">
                        <input autocomplete="off" class="form-control nao-mw-0 nao-mw-sm-210 mb-1" formControlName="linkedin"
                               placeholder="Linkedin" type="text"/>
                      </div>
                    </div>
                  </div>

                  <!-- This is the container for one input field-->
                  <div class="mb-3">
                    <!-- Input field-->
                    <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                      <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                        <label class="nao-label-1">
                          Twitter
                        </label>
                      </div>
                      <div class="col">
                        <input autocomplete="off" class="form-control nao-mw-0 nao-mw-sm-210 mb-1" formControlName="twitter"
                               placeholder="Twitter" type="text"/>
                      </div>
                    </div>
                  </div>

                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button class="btn btn-simple-dark-blue nao-btn-transition" type="button">
                Cancel
              </button>
              <button [disabled]="formGroup.pristine || !formGroup.valid"
                      class="btn btn-simple-primary nao-btn-transition ml-2" data-style="expand-right"
                      type="button">
                Create
              </button>
            </div>

          </div>
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
    <div class="modal nao-modal-form" role="dialog" tabindex="-1">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">

            <div class="modal-header flex-column">
              <h5 class="modal-title mb-1">
                Add new product
              </h5>
              <h5 class="modal-subtitle mb-0">
                Subtitle
              </h5>
            </div>
            <div class="modal-body p-0">
              <form>
                <div [formGroup]="formGroup2">

                  <div class="nao-blue-rounded-box">
                    <div class="box-header border-bottom">
                      Product
                    </div>
                    <div class="box-container">
                      <!-- This is the container for one input field-->
                      <div class="mb-1">
                        <!-- Input field-->
                        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                          <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                            <label class="nao-label-sm-1">
                              Name
                              <sup class="text-danger">*</sup>
                            </label>
                          </div>
                          <div class="col">
                            <input autocomplete="off" class="form-control form-control-sm nao-mw-0 nao-mw-sm-210 mb-1"
                                   formControlName="name" placeholder="Name"
                                   type="text"/>
                          </div>
                        </div>
                        <!-- error messages -->
                        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                          <div class="col-12 col-sm-5">
                          </div>
                          <div
                            [hidden]="formGroup2.get('name').pristine || formGroup2.get('name').disabled || formGroup2.get('name').valid"
                            class="col pb-1">
                          <span *ngIf="formGroup2.get('name').errors" class="nao-label-sm-1 text-danger">
                              Name is required.
                            </span>
                          </div>
                        </div>
                      </div>

                      <!-- This is the container for <textare>-->
                      <div class="d-flex flex-column flex-sm-row mb-1 no-gutters">
                        <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                          <label class="nao-label-sm-1 pt-1">
                            Description
                          </label>
                        </div>
                        <div class="col">
                          <textarea class="form-control form-control-sm nao-textarea nao-mw-0 nao-mw-sm-300"
                                    formControlName="description" placeholder="Description"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="nao-blue-rounded-box">
                    <div class="box-header border-bottom">
                      Pricing
                    </div>
                    <div class="box-container">
                      <!-- This is the container for one input field-->
                      <div class="mb-1">
                        <!-- Input field-->
                        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                          <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                            <label class="nao-label-sm-1">
                              Price
                              <sup class="text-danger">*</sup>
                            </label>
                          </div>
                          <div class="col">
                            <input autocomplete="off" class="form-control form-control-sm nao-mw-0 nao-mw-sm-210 mb-1"
                                   formControlName="priceSales" placeholder="Price"
                                   type="number"/>
                          </div>
                        </div>
                        <!-- error messages -->
                        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                          <div class="col-12 col-sm-5">
                          </div>
                          <div
                            [hidden]="formGroup2.get('priceSales').pristine || formGroup2.get('priceSales').disabled || formGroup2.get('priceSales').valid"
                            class="col pb-1">
                          <span *ngIf="formGroup2.get('priceSales').errors" class="nao-label-sm-1 text-danger">
                              Name is required.
                            </span>
                          </div>
                        </div>
                      </div>

                      <!-- This is the container for one input field-->
                      <div class="mb-1">
                        <!-- Input field-->
                        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                          <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                            <label class="nao-label-sm-1">
                              Cost
                            </label>
                          </div>
                          <div class="col">
                            <input autocomplete="off" class="form-control form-control-sm nao-mw-0 nao-mw-sm-210 mb-1"
                                   formControlName="priceCost" placeholder="Cost"
                                   type="number"/>
                          </div>
                        </div>
                        <!-- error messages -->
                        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                          <div class="col-12 col-sm-5">
                          </div>
                          <div
                            [hidden]="formGroup2.get('priceSales').pristine || formGroup2.get('priceSales').disabled || formGroup2.get('priceSales').valid"
                            class="col pb-1">
                          <span *ngIf="formGroup2.get('priceSales').errors" class="nao-label-sm-1 text-danger">
                              Name is required.
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="nao-blue-rounded-box" formGroupName="inventory">
                    <div class="box-header border-bottom">
                      Inventory
                    </div>
                    <div class="box-container">
                      <!-- This is the container for one input field-->
                      <div class="mb-1">
                        <!-- Input field-->
                        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                          <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                            <label class="nao-label-sm-1">
                              SKU
                            </label>
                          </div>
                          <div class="col">
                            <input autocomplete="off" class="form-control form-control-sm nao-mw-0 nao-mw-sm-210 mb-1"
                                   formControlName="sku" placeholder="Sku"
                                   type="text"/>
                          </div>
                        </div>
                      </div>
                      <!-- This is the container for one input field-->
                      <div class="mb-1">
                        <!-- Input field-->
                        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                          <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                            <label class="nao-label-sm-1">
                              Barcode
                            </label>
                          </div>
                          <div class="col">
                            <input autocomplete="off" class="form-control form-control-sm nao-mw-0 nao-mw-sm-210 mb-1"
                                   formControlName="barcode" placeholder="Barcode"
                                   type="text"/>
                          </div>
                        </div>
                      </div>
                      <!-- This is the container for one input field-->
                      <div class="mb-1">
                        <!-- Input field-->
                        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
                          <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
                            <label class="nao-label-sm-1">
                              Quantity
                            </label>
                          </div>
                          <div class="col">
                            <input autocomplete="off" class="form-control form-control-sm nao-mw-0 nao-mw-sm-210 mb-1"
                                   formControlName="quantity" placeholder="Quantity"
                                   type="number"/>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="nao-blue-rounded-box" formGroupName="shipping">
                    <div class="box-header border-bottom">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" formControlName="hasShipping" id="shipping" name="checkbox"
                               type="checkbox"
                               value="false"/>
                        <label class="custom-control-label pt-1" for="shipping">
                          Shippable
                        </label>
                      </div>
                    </div>

                    <div [hidden]="!formGroup2.get('shipping.hasShipping').value" class="box-container">
                      <div class="d-flex justify-content-center">

                        <div class="nao-grid-4-input-dropdown">
                          <div class="input-group nao-input-dropdown-group-1 nao-shippable-input-group">
                            <label class="nao-label-sm-1 mr-auto">
                              Weight
                            </label>
                            <div class="d-flex flex-column">
                              <div class="input-group-append">
                                <input class="form-control form-control-sm" formControlName="weight"
                                       placeholder="Weight"
                                       type="number"/>
                                <ng-select [clearable]="false"
                                           [ngClass]="{'ng-select-invalid': !formGroup2.get('shipping.weightUnit').disabled && formGroup2.get('shipping.weightUnit').invalid }"
                                           class="nao-ng-select-sm-2"
                                           formControlName="weightUnit">
                                  <ng-option value="kg">
                                    Kg
                                  </ng-option>
                                  <ng-option value="lbs">
                                    Lbs
                                  </ng-option>
                                </ng-select>
                              </div>
                            </div>
                          </div>

                          <div class="input-group nao-input-dropdown-group-1 nao-shippable-input-group">
                            <label class="nao-label-sm-1 mr-auto">
                              Height
                            </label>
                            <div class="d-flex flex-column">
                              <div class="input-group-append">
                                <input class="form-control form-control-sm" formControlName="height"
                                       placeholder="height"
                                       type="number"/>
                                <ng-select [clearable]="false"
                                           [ngClass]="{'ng-select-invalid': !formGroup2.get('shipping.heightUnit').disabled && formGroup2.get('shipping.heightUnit').invalid }"
                                           class="nao-ng-select-sm-2"
                                           formControlName="heightUnit">
                                  <ng-option value="cm">
                                    Cm
                                  </ng-option>
                                  <ng-option value="in">
                                    In
                                  </ng-option>
                                </ng-select>
                              </div>
                            </div>
                          </div>

                          <div class="input-group nao-input-dropdown-group-1 nao-shippable-input-group">
                            <label class="nao-label-sm-1 mr-auto">
                              Length
                            </label>
                            <div class="d-flex flex-column">
                              <div class="input-group-append">
                                <input class="form-control form-control-sm" formControlName="length"
                                       placeholder="Length"
                                       type="number"/>
                                <ng-select [clearable]="false"
                                           [ngClass]="{'ng-select-invalid': !formGroup2.get('shipping.lengthUnit').disabled && formGroup2.get('shipping.lengthUnit').invalid }"
                                           class="nao-ng-select-sm-2"
                                           formControlName="lengthUnit">
                                  <ng-option value="cm">
                                    Cm
                                  </ng-option>
                                  <ng-option value="in">
                                    In
                                  </ng-option>
                                </ng-select>
                              </div>
                            </div>
                          </div>

                          <div class="input-group nao-input-dropdown-group-1 nao-shippable-input-group">
                            <label class="nao-label-sm-1 mr-auto">
                              Width
                            </label>
                            <div class="d-flex flex-column">
                              <div class="input-group-append">
                                <input class="form-control form-control-sm" formControlName="width" placeholder="Width"
                                       type="number"/>
                                <ng-select [clearable]="false"
                                           [ngClass]="{'ng-select-invalid': !formGroup2.get('shipping.widthUnit').disabled && formGroup2.get('shipping.widthUnit').invalid }"
                                           class="nao-ng-select-sm-2"
                                           formControlName="widthUnit">
                                  <ng-option value="cm">
                                    Cm
                                  </ng-option>
                                  <ng-option value="in">
                                    In
                                  </ng-option>
                                </ng-select>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="nao-blue-rounded-box mb-0">
                    <div class="box-header border-bottom">
                      Add items
                    </div>
                    <div class="box-container">
                      <p>Add the items you want to be included in the sales order</p>

                      <div class="nao-add-items-container ml-auto" formArrayName="items">
                        <div *ngFor="let item of formGroup2.controls.items['controls']; let i = index; let last = last"
                             [formGroupName]="i"
                             class="pb-3">
                          <div class="d-flex flex-column flex-md-row align-items-md-center py-3 pr-2">
                            <label class="nao-form-label pr-3 mb-1 mb-md-0">
                              Product
                            </label>
                            <ng-select [multiple]="false" [searchable]="true"
                                       bindLabel="name" bindValue="value"
                                       class="nao-ng-select-sm nao-mw-0 nao-mw-md-200 flex-grow-1">
                              <ng-option value="pecans">
                                Pecans
                              </ng-option>
                              <ng-option value="almonds">
                                Almonds
                              </ng-option>
                              <ng-option value="peanuts">
                                Peanuts
                              </ng-option>
                            </ng-select>
                          </div>

                          <div class="d-flex flex-column flex-md-row">
                            <div class="d-flex flex-column pr-2 mb-2">
                              <label class="nao-label-sm-1">
                                Ordered quantity
                              </label>
                              <input [max]="1000" autocomplete="off"
                                     class="form-control form-control-sm nao-mw-0 nao-mw-md-100 mt-auto"
                                     formControlName="quantity" type="number"/>
                            </div>

                            <div class="d-flex flex-column pr-2 mb-2">
                              <label class="nao-label-sm-1">
                                Unit price
                              </label>
                              <input autocomplete="off"
                                     class="form-control form-control-sm nao-mw-0 nao-mw-md-100 mt-auto"
                                     formControlName="priceSales"
                                     type="text"/>
                            </div>

                            <div class="d-flex flex-column pr-2 mb-2">
                              <label class="nao-label-sm-1">
                                Taxes
                              </label>
                              <input autocomplete="off"
                                     class="form-control form-control-sm nao-mw-0 nao-mw-md-100 mt-auto"
                                     formControlName="salesTax"
                                     type="text"/>
                            </div>

                            <div class="d-flex flex-column pr-2 item-mb-fix">
                              <label class="nao-label-sm-1">
                                Subtotal
                              </label>
                              <label class="nao-label-sm-1 mt-auto mb-0">
                                160$
                              </label>
                            </div>

                            <div class="mt-auto item-mb-fix">
                              <!-- todo: -->
                              <div class="nao-delete-text">
                                <a href="javascript:void(0)">Delete</a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button class="btn btn-sm btn-simple-primary d-flex align-items-center add-another-btn"
                                type="button">
                          <i class="nao-icon-add-filled mr-1"></i>
                          <span>Add another</span>
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button class="btn btn-outline-only-primary nao-btn-transition" type="button">
                Cancel
              </button>
              <button [disabled]="formGroup2.pristine || !formGroup2.valid"
                      class="btn btn-primary nao-btn-transition ml-2" data-style="expand-right"
                      type="button">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>`,
    ts1: `
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
          name: new FormControl('', { validators: [Validators.required] }),
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
        });`
  },
];
