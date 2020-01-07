export const InputGroupCodeBlocks = [
    {
        html: `
        <div class="input-group nao-input-dropdown-group-1" [formGroup]="formGroupHeight">
          <label class="nao-label-sm-2">
            Height
          </label>
          <div class="d-flex flex-column">
            <div class="input-group-append">
              <input type="number" class="form-control form-control-sm nao-mw-140" placeholder="Height" formControlName="height" />
              <ng-select class="nao-ng-select-sm-2" style="min-width: 70px;" [clearable]="false" formControlName="heightUnit">
                <ng-option value="cm">
                  Cm</ng-option>
                <ng-option value="in">
                  In</ng-option>
              </ng-select>
            </div>
            <span class="text-danger nao-error-sm nao-mw-210">This field is required.</span>
          </div>
        </div>`,
        ts1: `
        public formGroupHeight = new FormGroup({
            height: new FormControl(0),
            heightUnit: new FormControl('cm'),
          });
        `
    },
];
