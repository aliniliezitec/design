export const FormsCodeBlocks = [
    {
        html: `
        <form>
            <div class="form-group">
                <label class="nao-label-1" for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control nao-mw-290" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label class="nao-label-1" for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control nao-mw-290" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="d-flex custom-control custom-checkbox mb-3">
                <input class="custom-control-input" type="checkbox" name="checkbox" id="exampleCheck1">
                <label class="custom-control-label align-self-center" for="exampleCheck1">Check
                    me</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>`},
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
        </form>`},
    {
        html: `
        <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
        <input class="form-control" type="text" placeholder="Default input">
        <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">`},
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
        <input class="form-control nao-mw-560" type="text" placeholder=".nao-mw-560">`},
    {
        html: `
        <label class="nao-label-1">Example of small textarea</label>
        <textarea class="form-control form-control-sm nao-textarea nao-mw-300 mb-3" placeholder="Description"></textarea>
        <label class="nao-label-1">Example of large textarea</label>
        <textarea class="form-control nao-textarea-lg nao-mw-380" placeholder="Description"></textarea>
            ` },
    {
        html: `
        <label class="nao-label-1">
            Nao label 1
            <sup class="text-danger">*</sup>
        </label>
        <label class="nao-label-2">
            Nao label 2
            <sup class="text-danger">*</sup>
        </label>
        <label class="nao-label-sm-2">
            Nao label sm 2
            <sup class="text-danger">*</sup>
        </label>
        <label class="nao-label-sm-3">
            Nao label sm 3
            <sup class="text-danger">*</sup>
        </label>
        <label class="nao-label-sm-4">
            Nao label sm 4
            <sup class="text-danger">*</sup>
        </label>
      ` },
    {
        html: `
            <form>
                <div class="form-group">
                    <label class="nao-label-1" for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control is-valid nao-mw-290" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email" value="test@doe.com">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label class="nao-label-1" for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control is-invalid nao-mw-290" id="exampleInputPassword1" placeholder="Password">
                    <span class="text-danger">This field is required.</span>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>`},
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
        `
    }
];
