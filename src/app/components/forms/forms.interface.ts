export const FormsCodeBlocks = [
  {
    html: `
        <form>
            <div class="form-group">
                <label class="nao-label-1" for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control mb-1 nao-mw-290" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email">
                <span id="emailHelp" class="form-text nao-label-sm-1">We'll never share your email with anyone else.</span>
            </div>
            <div class="form-group">
                <label class="nao-label-1" for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control mb-1 nao-mw-290" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="d-flex custom-control custom-checkbox mb-3">
                <input class="custom-control-input" type="checkbox" name="checkbox" id="exampleCheck1">
                <label class="custom-control-label align-self-center" for="exampleCheck1">Check
                    me</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>`
  },
  {
    html: `
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control nao-mw-290" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control nao-mw-290" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>`
  },
  {
    html: `
              <!-- This is the container for one input field-->
      <div class="mb-3">
        <!-- Input field-->
        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
          <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
            <label class="nao-label-1">
              Disabled input
            </label>
          </div>
          <div class="col">
            <input autocomplete="off" class="form-control mb-1 nao-mw-0 nao-mw-sm-250"
                   disabled placeholder="Placeholder" type="text"/>
          </div>
        </div>
        <!-- messages -->
        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
          <div class="col-12 col-sm-5">
          </div>
          <div class="col">
            <span class="nao-label-sm-1">
              Disabled input
            </span>
          </div>
        </div>

      </div>

      <!-- This is the container for one input field-->
      <div class="mb-3">
        <!-- Input field-->
        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
          <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
            <label class="nao-label-1">
              Inactive/Active input
            </label>
          </div>
          <div class="col">
            <input autocomplete="off" class="form-control mb-1 nao-mw-0 nao-mw-sm-250"
                   placeholder="Placeholder" type="text"/>
          </div>
        </div>
        <!-- messages -->
        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
          <div class="col-12 col-sm-5">
          </div>
          <div class="col">
            <span class="nao-label-sm-1">
              Type something
            </span>
          </div>
        </div>
      </div>

      <!-- This is the container for one input field-->
      <div class="mb-3">
        <!-- Input field-->
        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
          <div class="col-12 col-sm-5 text-left text-sm-right pr-3">
            <label class="nao-label-1 text-danger">
              Invalid input
            </label>
          </div>
          <div class="col">
            <input autocomplete="off" class="form-control mb-1 nao-mw-0 nao-mw-sm-250 is-invalid"
                   placeholder="Placeholder" type="text"/>
          </div>
        </div>
        <!-- error messages -->
        <div class="d-flex flex-column flex-sm-row align-items-center no-gutters">
          <div class="col-12 col-sm-5">
          </div>
          <div class="col">
            <span class="text-danger nao-label-sm-1">
              This input field is required is required.
            </span>
          </div>
        </div>
      </div>`
  },
  {
    html: `
        <input class="form-control mb-1 form-control-lg" type="text" placeholder=".form-control-lg">
        <input class="form-control mb-1" type="text" placeholder="Default input">
        <input class="form-control mb-1 form-control-sm" type="text" placeholder=".form-control-sm">`
  },
  {
    html: `
        <input class="form-control nao-mw-140" type="text" placeholder="nao-mw-140">
        <input class="form-control nao-mw-150" type="text" placeholder=".nao-mw-150">
        <input class="form-control nao-mw-190" type="text" placeholder=".nao-mw-190">
        <input class="form-control nao-mw-200" type="text" placeholder=".nao-mw-200">
        <input class="form-control nao-mw-210" type="text" placeholder=".nao-mw-210">
        <input class="form-control nao-mw-220" type="text" placeholder=".nao-mw-220">
        <input class="form-control nao-mw-230" type="text" placeholder=".nao-mw-230">
        <input class="form-control nao-mw-290" type="text" placeholder=".nao-mw-290">
        <input class="form-control nao-mw-310" type="text" placeholder=".nao-mw-310">
        <input class="form-control nao-mw-320" type="text" placeholder=".nao-mw-320">
        <input class="form-control nao-mw-380" type="text" placeholder=".nao-mw-380">
        <input class="form-control nao-mw-560" type="text" placeholder=".nao-mw-560">`
  },
  {
    html: `
        <label class="nao-label-1">Example of small textarea</label>
        <textarea class="form-control form-control-sm nao-textarea nao-mw-300 mb-3" placeholder="Description"></textarea>
        <label class="nao-label-1">Example of large textarea</label>
        <textarea class="form-control nao-textarea-lg nao-mw-380" placeholder="Description"></textarea>
            `
  },
  {
    html: `
        <label class="nao-label-1">
            Nao label default 1
            <sup>*</sup>
        </label>
        <label class="nao-label-sm-1">
            Nao label sm 1
            <sup>*</sup>
        </label>
        <label class="nao-label-xs-1">
            Nao label xs 1
            <sup>*</sup>
        </label>
      `
  },
  {
    html: `
            <div class="form-group">
                <label class="nao-label-1" for="exampleLabels1">Above</label>
                <input type="password" class="form-control nao-mw-290" id="exampleLabels1" placeholder="Password">
                <label class="nao-label-1 mt-1">Below</label>
            </div>

            <div class="form-group d-flex flex-row align-items-center">
                <label class="nao-label-1 text-danger mr-3 mb-0" for="exampleLabels2">Inline</label>
                <input type="password" class="form-control is-invalid nao-mw-290" id="exampleLabels2" placeholder="Password">
            </div>
        `
  },
  {
    html: `
            <form>
                <div class="form-group">
                    <label class="nao-label-1" for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control mb-1 is-valid nao-mw-290" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email" value="test@doe.com">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label class="nao-label-1" for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control mb-1 is-invalid nao-mw-290" id="exampleInputPassword1" placeholder="Password">
                    <span class="text-danger">This field is required.</span>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>`
  },
  {
    html: `
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch1">
            <label class="custom-control-label" for="customSwitch1">This is an inactive switch</label>
        </div>

        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch2" checked>
            <label class="custom-control-label" for="customSwitch2">This is an active switch</label>
        </div>

        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" disabled id="customSwitch3">
            <label class="custom-control-label" for="customSwitch3">This is a disabled inactive switch</label>
        </div>

        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" disabled id="customSwitch4" checked>
            <label class="custom-control-label" for="customSwitch4">This is a enabled inactive switch</label>
        </div>`
  },
  {
    html: `
        <div class="custom-control custom-switch custom-switch-sm mb-2">
            <input type="checkbox" class="custom-control-input" id="customSwitch-sm">
            <label class="custom-control-label" for="customSwitch-sm">Switch small</label>
        </div>

        <div class="custom-control custom-switch mb-2">
            <input type="checkbox" class="custom-control-input" id="customSwitch">
            <label class="custom-control-label" for="customSwitch">Switch default</label>
        </div>

        <div class="custom-control custom-switch custom-switch-lg mb-2">
            <input type="checkbox" class="custom-control-input" id="customSwitch-lg">
            <label class="custom-control-label" for="customSwitch-lg">Switch large</label>
        </div>`
  },
  {
    html: `
        <label class="nao-custom-radio">
            <input type="radio" name="radio" value="option1" checked>
            <span class="radio-label">Radio button 1</span>
            <span class="checkmark"></span>
        </label>
        <label class="nao-custom-radio">
            <input type="radio" name="radio" value="option2">
            <span class="radio-label">Radio button 2</span>
            <span class="checkmark"></span>
        </label>
        <label class="nao-custom-radio">
            <input type="radio" name="radio" value="option3">
            <span class="radio-label">Radio button 3</span>
            <span class="checkmark"></span>
        </label>
        <label class="nao-custom-radio">
            <input type="radio" name="radio" value="option4" disabled>
            <span class="radio-label">Disabled radio</span>
            <span class="checkmark"></span>
        </label>`
  },
  {
    html: `
         <div class="d-flex custom-control custom-checkbox mb-3">
            <input class="custom-control-input" type="checkbox" name="checkbox" id="checkbox1">
            <label class="custom-control-label align-self-center" for="checkbox1">Check
                me</label>
        </div>

        <div class="d-flex custom-control custom-checkbox mb-3">
            <input class="custom-control-input" type="checkbox" name="checkbox" id="checkbox2" checked>
            <label class="custom-control-label align-self-center" for="checkbox2">Check
                me</label>
        </div>

        <div class="d-flex custom-control custom-checkbox mb-3">
            <input class="custom-control-input" type="checkbox" name="checkbox" id="checkbox3" disabled>
            <label class="custom-control-label align-self-center" for="checkbox3">Check
                me</label>
        </div>`
  },
  {
    html: `
        <span class="badge badge-pill nao-tag-1 mb-4">Type something <i class="nao-icon-cancel ml-1"></i></span>
        <span class="badge badge-pill nao-tag-1 nao-tag-sm mb-4">Type something <i class="nao-icon-cancel ml-1"></i></span>
        <span class="badge badge-pill nao-tag-1">Type something</span>
        <span class="badge badge-pill nao-tag-1 nao-tag-sm">Type something</span>`
  }, {
    html: `
        <span class="nao-badge-pill nao-badge-label-1 mr-3 mb-3">Something</span>
        <span class="nao-badge-pill nao-badge-label-2 mb-3">Something</span>`
  },
  {
    html: `
        <span class="nao-badge nao-badge-outline mb-4 mr-3">
            <i class="nao-icon-add mr-1"></i>Add a filter
        </span>
        <span class="nao-badge nao-badge-1 mb-4 mr-3">
            <div class="d-flex align-items-center">
            <span class="badge-text">First name: “John” </span><i class="nao-icon-cancel ml-2"></i>
            </div>
        </span>
        <span class="nao-badge nao-badge-1 mb-4 mr-3">
            <div class="d-flex align-items-center">
            <span class="badge-text">First name: “Johnjohusu Mcgregor Mcgregor" </span><i class="nao-icon-cancel ml-2"></i>
            </div>
        </span>`
  }
];
