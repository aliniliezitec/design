export const DatepickerCodeBlocks = [
    {
        html: `
        <div class="input-group {{ size }}">
          <input type="text"
                readonly
                placeholder="Datepicker"
                class="form-control bg-white form-control-sm nao-mw-230"
                autocomplete="off"
                bsDatepicker
                [attr.maxlength]="inputOptions.maxlength"
                [attr.size]="inputOptions.size"
                #dp="bsDatepicker"
                [value]="displayBsValue"
                (bsValueChange)="bsValueChange($event)"
                [outsideClick]="true"
                [bsConfig]="bsConfig"
                ng-blur="dp.toggle()"
          />
        </div>
        `,
        ts1: `
        public bsConfig: Partial<BsDatepickerConfig> = {
            containerClass: 'theme-dark-blue nao-custom-datepicker',
            showWeekNumbers: false,
            adaptivePosition: true
          };`
    },
];
