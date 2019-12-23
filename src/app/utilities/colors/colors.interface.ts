export interface HtmlCodeBlock {
    code: string;
    syntaxHighlighter: string;
}

export const ColorsCodeBlocks = [
    {
        htmlCode: `
        <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
        <div class="p-3 mb-2 bg-primary-light text-white">.bg-primary-light</div>
        <div class="p-3 mb-2 bg-primary-lighter text-white">.bg-primary-lighter</div>
        <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
        <div class="p-3 mb-2 bg-secondary-light text-white">.bg-secondary-light</div>
        <div class="p-3 mb-2 bg-secondary-lighter text-white">.bg-secondary-lighter</div>
        <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
        <div class="p-3 mb-2 bg-success-light text-dark">.bg-success-light</div>
        <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
        <div class="p-3 mb-2 bg-danger-light text-dark">.bg-danger-light</div>
        <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
        <div class="p-3 mb-2 bg-warning-light text-dark">.bg-warning-light</div>
        <div class="p-3 mb-2 bg-info text-white">.bg-info</div>
        <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
        <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
        <div class="p-3 mb-2 bg-dark-blue text-white">.bg-dark-blue</div>
        <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>`},
    {
        htmlCode: `
        <p class="text-primary">.text-primary</p>
        <p class="text-primary-light">.text-primary-light</p>
        <p class="text-primary-lighter">.text-primary-lighter</p>
        <p class="text-secondary">.text-secondary</p>
        <p class="text-secondary-light">.text-secondary-light</p>
        <p class="text-secondary-lighter">.text-secondary-lighter</p>
        <p class="text-success">.text-success</p>
        <p class="text-success-light">.text-success-light</p>
        <p class="text-danger">.text-danger</p>
        <p class="text-danger-light">.text-danger-light</p>
        <p class="text-warning">.text-warning</p>
        <p class="text-warning-light">.text-warning-light</p>
        <p class="text-info">.text-info</p>
        <p class="text-light bg-dark">.text-light</p>
        <p class="text-dark">.text-dark</p>
        <p class="text-muted">.text-muted</p>
        <p class="text-text-primary-light">.text-muted</p>
        <p class="text-white bg-dark">.text-white</p>
        <p class="text-dark-blue">.text-dark-blue</p>
        `}
];
