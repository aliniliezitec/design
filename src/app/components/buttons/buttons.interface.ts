export interface HtmlCodeBlock {
    code: string;
    syntaxHighlighter: string;
}

export const ButtonsCodeBlocks = [
    {
        htmlCode: `
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary-light">Primary-light</button>
    <button type="button" class="btn btn-primary-lighter">Primary-lighter</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-secondary-light">Secondary-light</button>
    <button type="button" class="btn btn-secondary-lighter">Secondary-lighter</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-success-light">Success-light</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-danger-light">Danger-light</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-warning-light">Warning-light</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark-blue">Dark-blue</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>`},
    {
        htmlCode: `
    <a class="btn btn-primary" href="#" role="button">Link</a>
    <button class="btn btn-primary" type="submit">Button</button>
    <input class="btn btn-primary" type="button" value="Input">
    <input class="btn btn-primary" type="submit" value="Submit">
    <input class="btn btn-primary" type="reset" value="Reset">`},
    {
        htmlCode: `
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-primary-light">Primary-light</button>
    <button type="button" class="btn btn-outline-primary-lighter">Primary-lighter</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-secondary-light">Secondary-light</button>
    <button type="button" class="btn btn-outline-secondary-lighter">Secondary-lighter</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-success-light">Success-light</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-danger-light">Danger-light</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-warning-light">Warning-light</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-light">Light</button>
    <button type="button" class="btn btn-outline-dark-blue">Dark-blue</button>
    <button type="button" class="btn btn-outline-dark">Dark</button>`},
    {
        htmlCode: `
    <button type="button" class="btn btn-primary btn-xl">Extra Large button</button>
    <button type="button" class="btn btn-secondary btn-xl">Extra Large button</button>`},
    {
        htmlCode: `
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <button type="button" class="btn btn-secondary btn-lg">Large button</button>`},
    {
        htmlCode: `
    <button type="button" class="btn btn-primary btn-sm">Small button</button>
    <button type="button" class="btn btn-secondary btn-sm">Small button</button>`},
    {
        htmlCode: `
    <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>`},
    {
        htmlCode: `
    <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
    <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>`},
    {
        htmlCode: `
    <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
    <button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>`},
    {
        htmlCode: `
    <a href="#" class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a>
    <a href="#" class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Link</a>`},
    {
        htmlCode: `
    <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
        Single toggle
    </button>`},
    {
        htmlCode: `
    <div class="btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
            <input type="checkbox" checked autocomplete="off"> Checked
        </label>
    </div>`},
    {
        htmlCode: `
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
    <label class="btn btn-secondary active">
        <input type="radio" name="options" id="option1" autocomplete="off" checked> Active
    </label>
    <label class="btn btn-secondary">
        <input type="radio" name="options" id="option2" autocomplete="off"> Radio
    </label>
    <label class="btn btn-secondary">
        <input type="radio" name="options" id="option3" autocomplete="off"> Radio
    </label>
    </div>`},
];
