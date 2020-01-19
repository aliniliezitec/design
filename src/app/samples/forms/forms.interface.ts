export const FormsCodeBlocks = [
  {
    html: `
        <div class="modal nao-modal-2" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">

            <div class="modal-header flex-column">
              <h6 class="modal-title">
                Add contact <br />
              </h6>
              <div>Create a new contact</div>
            </div>
            <div class="modal-body nao-modal-body-2">
              <form>
                <div [formGroup]="formGroup">
                  <div formGroupName="info">
                    <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                      <div class="col-12 col-sm-5 text-left text-sm-right ">
                        <label class="nao-label-2">
                          First name
                          <sup class="text-danger">*</sup>
                        </label>
                      </div>
                      <div class="col">
                        <input type="text" autocomplete="off" class="form-control nao-mw-0 nao-mw-sm-210"
                          formControlName="firstName" placeholder="First name" />
                        <div class="pt-2 pb-2" [hidden]="formGroup.get('info.firstName').pristine
                          || formGroup.get('info.firstName').disabled
                          || formGroup.get('info.firstName').valid">
                          <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                          <span *ngIf="formGroup.get('info.firstName').errors" class="text-danger">
                            First name is required.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                      <div class="col-12 col-sm-5 text-left text-sm-right ">
                        <label class="nao-label-2">
                          Last name
                          <sup class="text-danger">*</sup>
                        </label>
                      </div>
                      <div class="col">
                        <input type="text" autocomplete="off" class="form-control nao-mw-0 nao-mw-sm-210"
                          formControlName="lastName" placeholder="Last name" />
                        <div class="pt-2 pb-2" [hidden]="formGroup.get('info.lastName').pristine
                          || formGroup.get('info.lastName').disabled
                          || formGroup.get('info.lastName').valid">
                          <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                          <span *ngIf="formGroup.get('info.lastName').errors" class="text-danger">
                            Last name is required.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                    <div class="col-12 col-sm-5 text-left text-sm-right ">
                      <label class="nao-label-2">
                        Company
                      </label>
                    </div>
                    <div class="col pb-2">
                      <ng-select class="nao-mw-0 nao-mw-sm-210" [searchable]="true" bindLabel="name" bindValue="value"
                        [multiple]="false" placeholder="Type to search" clearAllText="Clear" notFoundText="Not found"
                        [clearable]="false" formControlName="companyId">
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
                      <div class="pt-2">
                        <a href="javascript:void(0)" class="text-primary"><i class="fas fa-plus-circle"></i>Create</a>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                    <div class="col-12 col-sm-5 text-left text-sm-right ">
                      <label class="nao-label-2">
                        Email
                        <sup class="text-danger">*</sup>
                      </label>
                    </div>
                    <div class="col">
                      <input type="text" autocomplete="off" class="form-control nao-mw-0 nao-mw-sm-210"
                        formControlName="email" placeholder="Email" />
                      <div class="pt-2 pb-2" [hidden]="formGroup.get('email').pristine
                        || formGroup.get('email').disabled
                        || formGroup.get('email').valid">
                        <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                        <span *ngIf="formGroup.get('email').errors" class="text-danger">
                          Email is required
                        </span>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                    <div class="col-12 col-sm-5 text-left text-sm-right">
                      <label class="nao-label-2">
                        Language
                      </label>
                    </div>
                    <div class="col pb-2">
                      <ng-select class="nao-mw-0 nao-mw-sm-210" [searchable]="true" bindLabel="name" bindValue="value"
                        [multiple]="false" clearAllText="Clear" notFoundText="Not found" [clearable]="false"
                        formControlName="languageId">
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
                      <div class="pt-2 pb-2" [hidden]="formGroup.get('languageId').pristine
                        || formGroup.get('languageId').disabled
                        || formGroup.get('languageId').valid">
                        <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                        <span *ngIf="formGroup.get('languageId').errors" class="text-danger">
                          Invalid language.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                    <div class="col-12 col-sm-5 text-left text-sm-right ">
                      <label class="nao-label-2">
                        Country
                        <sup class="text-danger">*</sup>
                      </label>
                    </div>
                    <div class="col pb-2">
                      <ng-select class="nao-mw-0 nao-mw-sm-210" [searchable]="true" bindLabel="name" bindValue="value"
                        [multiple]="false" clearAllText="Clear" notFoundText="Not found" [clearable]="false"
                        formControlName="countryId">
                        <ng-option value="1">
                          USA
                        </ng-option>
                        <ng-option value="2">
                          Germany
                        </ng-option>
                        <ng-option value="3">
                          France
                        </ng-option>
                      </ng-select>
                      <div class="pt-2 pb-2" [hidden]="formGroup.get('countryId').pristine
                        || formGroup.get('countryId').disabled
                        || formGroup.get('countryId').valid">
                        <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                        <span *ngIf="formGroup.get('countryId').errors" class="text-danger">
                          Country error
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                    <div class="col-12 col-sm-5 text-left text-sm-right ">
                      <label class="nao-label-2">
                        Facebook
                      </label>
                    </div>
                    <div class="col">
                      <input type="text" autocomplete="off" class="form-control nao-mw-0 nao-mw-sm-210"
                        formControlName="facebook" placeholder="Facebook" />
                      <div class="pt-2 pb-2" [hidden]="formGroup.get('facebook').pristine
                        || formGroup.get('facebook').disabled
                        || formGroup.get('facebook').valid">
                        <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                        <span *ngIf="formGroup.get('facebook').errors" class="text-danger"></span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                    <div class="col-12 col-sm-5 text-left text-sm-right ">
                      <label class="nao-label-2">
                        Linkedin
                      </label>
                    </div>
                    <div class="col">
                      <input type="text" autocomplete="off" class="form-control nao-mw-0 nao-mw-sm-210"
                        formControlName="linkedin" placeholder="Linkedin" />
                      <div class="pt-2 pb-2" [hidden]="formGroup.get('linkedin').pristine
                        || formGroup.get('linkedin').disabled
                        || formGroup.get('linkedin').valid">
                        <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                        <span *ngIf="formGroup.get('linkedin').errors" class="text-danger"></span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                    <div class="col-12 col-sm-5 text-left text-sm-right ">
                      <label class="nao-label-2">
                        Twitter
                      </label>
                    </div>
                    <div class="col">
                      <input type="text" autocomplete="off" class="form-control nao-mw-0 nao-mw-sm-210"
                        formControlName="twitter" placeholder="Twitter" />
                      <div class="pt-2 pb-2"
                        [hidden]="formGroup.get('twitter').pristine || formGroup.get('twitter').disabled || formGroup.get('twitter').valid">
                        <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                        <span *ngIf="formGroup.get('twitter').errors" class="text-danger"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-only-dark-blue nao-btn-transition">
                Cancel
              </button>
              <button type="button" data-style="expand-right" class="btn btn-primary nao-btn-transition ml-2"
                [disabled]="formGroup.pristine || !formGroup.valid">
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
    <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header default pb-3 pt-4">
              <h6 class="modal-title pl-4 ml-2">
                Add new product
              </h6>
            </div>
            <div class="modal-body px-2 py-0">
              <form>
                <div [formGroup]="formGroup2">
                  <div class="nao-blue-rounded-box">
                    <div class="box-header border-bottom">
                      Product
                    </div>
                    <div class="box-container">
                      <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                        <div class="col-12 col-sm-5 text-left text-sm-right">
                          <label class="nao-label-sm-2">
                            Name
                            <sup class="text-danger">*</sup>
                          </label>
                        </div>
                        <div class="col">
                          <input type="text" autocomplete="off"
                            class="form-control form-control-sm nao-mw-0 nao-mw-sm-210" formControlName="name"
                            placeholder="Name" />
                            <span *ngIf="formGroup2.get('name').errors" class="text-danger">
                              Name is required.
                            </span>
                        </div>
                      </div>
                      <div class="d-flex flex-column flex-sm-row mb-3 no-gutters-xs">
                        <div class="col-12 col-sm-5 text-left text-sm-right">
                          <label class="nao-label-sm-2 pt-1">
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
                      <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                        <div class="col-12 col-sm-5 text-left text-sm-right">
                          <label class="nao-label-sm-2">
                            Price
                            <sup class="text-danger">*</sup>
                          </label>
                        </div>
                        <div class="col">
                          <input type="number" autocomplete="off"
                            class="form-control form-control-sm nao-mw-0 nao-mw-sm-210" formControlName="priceSales"
                            placeholder="Price" />
                        </div>
                      </div>
                      <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                        <div class="col-12 col-sm-5 text-left text-sm-right">
                          <label class="nao-label-sm-2">
                            Cost
                          </label>
                        </div>
                        <div class="col">
                          <input type="number" autocomplete="off"
                            class="form-control form-control-sm nao-mw-0 nao-mw-sm-210" formControlName="priceCost"
                            placeholder="Cost" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="nao-blue-rounded-box" formGroupName="inventory">
                    <div class="box-header border-bottom">
                      Inventory
                    </div>
                    <div class="box-container">
                      <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                        <div class="col-12 col-sm-5 text-left text-sm-right">
                          <label class="nao-label-sm-2">
                            SKU
                          </label>
                        </div>
                        <div class="col">
                          <input type="text" autocomplete="off"
                            class="form-control form-control-sm nao-mw-0 nao-mw-sm-210" formControlName="sku"
                            placeholder="Sku" />
                        </div>
                      </div>
                      <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                        <div class="col-12 col-sm-5 text-left text-sm-right">
                          <label class="nao-label-sm-2">
                            Barcode
                          </label>
                        </div>
                        <div class="col">
                          <input type="text" autocomplete="off"
                            class="form-control form-control-sm nao-mw-0 nao-mw-sm-210" formControlName="barcode"
                            placeholder="Barcode" />
                        </div>
                      </div>
                      <div class="d-flex flex-column flex-sm-row align-items-center mb-3 no-gutters-xs">
                        <div class="col-12 col-sm-5 text-left text-sm-right">
                          <label class="nao-label-sm-2">
                            Quantity
                          </label>
                        </div>
                        <div class="col">
                          <input type="number" autocomplete="off"
                            class="form-control form-control-sm nao-mw-0 nao-mw-sm-210" formControlName="quantity"
                            placeholder="Quantity" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="nao-blue-rounded-box" formGroupName="shipping">
                    <div class="box-header border-bottom">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" name="checkbox" id="shipping" value="false"
                          formControlName="hasShipping" />
                        <label class="custom-control-label pt-1" for="shipping">
                          Shippable
                        </label>
                      </div>
                    </div>

                    <div class="box-container" [hidden]="!formGroup2.get('shipping.hasShipping').value">
                      <div class="d-flex justify-content-center">
                        
                        <div class="nao-grid-4-input-dropdown">
                          <div class="input-group nao-input-dropdown-group-1 nao-shippable-input-group">
                            <label class="nao-label-sm-2 mr-auto">
                              Weight
                            </label>
                            <div class="d-flex flex-column">
                              <div class="input-group-append">
                                <input type="number" class="form-control form-control-sm" formControlName="weight"
                                  placeholder="Weight" />
                                <ng-select class="nao-ng-select-sm-2" [clearable]="false" formControlName="weightUnit"
                                  [ngClass]="{'nao-input-danger': !formGroup2.get('shipping.weightUnit').disabled && formGroup2.get('shipping.weightUnit').invalid }">
                                  <ng-option value="kg">
                                    Kg </ng-option>
                                  <ng-option value="lbs">
                                    Lbs </ng-option>
                                </ng-select>
                              </div>
                            </div>
                          </div>

                          <div class="input-group nao-input-dropdown-group-1 nao-shippable-input-group">
                            <label class="nao-label-sm-2 mr-auto">
                              Height
                            </label>
                            <div class="d-flex flex-column">
                              <div class="input-group-append">
                                <input type="number" class="form-control form-control-sm" formControlName="height"
                                  placeholder="height" />
                                <ng-select class="nao-ng-select-sm-2" [clearable]="false" formControlName="heightUnit"
                                  [ngClass]="{'nao-input-danger': !formGroup2.get('shipping.heightUnit').disabled && formGroup2.get('shipping.heightUnit').invalid }">
                                  <ng-option value="cm">
                                    Cm</ng-option>
                                  <ng-option value="in">
                                    In</ng-option>
                                </ng-select>
                              </div>
                            </div>
                          </div>

                          <div class="input-group nao-input-dropdown-group-1 nao-shippable-input-group">
                            <label class="nao-label-sm-2 mr-auto">
                              Length
                            </label>
                            <div class="d-flex flex-column">
                              <div class="input-group-append">
                                <input type="number" class="form-control form-control-sm" formControlName="length"
                                  placeholder="Length" />
                                <ng-select class="nao-ng-select-sm-2" [clearable]="false" formControlName="lengthUnit"
                                  [ngClass]="{'nao-input-danger': !formGroup2.get('shipping.lengthUnit').disabled && formGroup2.get('shipping.lengthUnit').invalid }">
                                  <ng-option value="cm">
                                    Cm</ng-option>
                                  <ng-option value="in">
                                    In</ng-option>
                                </ng-select>
                              </div>
                            </div>
                          </div>

                          <div class="input-group nao-input-dropdown-group-1 nao-shippable-input-group">
                            <label class="nao-label-sm-2 mr-auto">
                              Width
                            </label>
                            <div class="d-flex flex-column">
                              <div class="input-group-append">
                                <input type="number" class="form-control form-control-sm" formControlName="width"
                                  placeholder="Width" />
                                <ng-select class="nao-ng-select-sm-2" [clearable]="false" formControlName="widthUnit"
                                  [ngClass]="{'nao-input-danger': !formGroup2.get('shipping.widthUnit').disabled && formGroup2.get('shipping.widthUnit').invalid }">
                                  <ng-option value="cm">
                                    Cm</ng-option>
                                  <ng-option value="in">
                                    In</ng-option>
                                </ng-select>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>


                  </div>

                  <div class="nao-blue-rounded-box">
                    <div class="box-header border-bottom">
                      Add items
                    </div>
                    <div class="box-container">
                      <p>Add the items you want to be included in the sales order</p>

                      <div class="nao-add-items-container ml-auto" formArrayName="items">
                        <div class="pb-3"
                          *ngFor="let item of formGroup2.controls.items['controls']; let i = index; let last = last"
                          [formGroupName]="i">
                          <div class="d-flex flex-column flex-md-row align-items-md-center py-3 pr-2">
                            <label class="nao-form-label pr-2">
                              Product
                            </label>
                            <ng-select class="nao-ng-select-sm nao-mw-0 nao-mw-md-200 flex-grow-1" [searchable]="true"
                              bindLabel="name" bindValue="value" [multiple]="false">
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
                              <label class="nao-label-sm-2">
                                Ordered quantity
                              </label>
                              <input type="number" autocomplete="off"
                                class="form-control form-control-sm nao-mw-0 nao-mw-md-100 mt-auto"
                                formControlName="quantity" [max]="1000" />
                            </div>

                            <div class="d-flex flex-column pr-2 mb-2">
                              <label class="nao-label-sm-2">
                                Unit price
                              </label>
                              <input type="text" autocomplete="off"
                                class="form-control form-control-sm nao-mw-0 nao-mw-md-100 mt-auto"
                                formControlName="priceSales" />
                            </div>

                            <div class="d-flex flex-column pr-2 mb-2">
                              <label class="nao-label-sm-2">
                                Taxes
                              </label>
                              <input type="text" autocomplete="off"
                                class="form-control form-control-sm nao-mw-0 nao-mw-md-100 mt-auto"
                                formControlName="salesTax" />
                            </div>

                            <div class="d-flex flex-column pr-2 item-mb-fix">
                              <label class="nao-label-sm-2">
                                Subtotal
                              </label>
                              <label class="nao-label-sm-2 mt-auto mb-0">
                                160$
                              </label>
                            </div>

                            <div class="mt-auto item-mb-fix">
                              <div class="nao-delete-text">
                                <a href="javascript:void(0)">Delete</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button type="button" class="btn-sm btn-text-only d-flex align-items-center add-another-btn">
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
              <button type="button" class="btn btn-outline-only-dark-blue nao-btn-transition">
                Cancel
              </button>
              <button type="button" data-style="expand-right" class="btn btn-primary nao-btn-transition ml-2"
                [disabled]="formGroup2.pristine || !formGroup2.valid">
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
  {
    html: `
  ` }
];