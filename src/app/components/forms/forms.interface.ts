export interface HtmlCodeBlock {
    code: string;
    syntaxHighlighter: string;
}

export const FormsCodeBlocks = [
    {
        htmlCode: `
        <form>
            <div class="form-group">
                <label class="nao-form-label-above" for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label class="nao-form-label-above" for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="d-flex custom-control custom-checkbox mb-3">
                <input class="custom-control-input" type="checkbox" name="checkbox" id="exampleCheck1">
                <label class="custom-control-label align-self-center" for="exampleCheck1">Check
                    me</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>`},
    {
        htmlCode: `
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect2">Example multiple select</label>
                <select multiple class="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>`},
    {
        htmlCode: `
        <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
        <input class="form-control" type="text" placeholder="Default input">
        <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">`},
    {
        htmlCode: `
        <ng-select>
            <ng-option>1</ng-option>
            <ng-option>2</ng-option>
            <ng-option>3</ng-option>
        </ng-select>`}
];
