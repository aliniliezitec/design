export interface HtmlCodeBlock {
    code: string;
    syntaxHighlighter: string;
}

export const ModalCodeBlocks = [
    {
        htmlCode: `
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-btn-outline-dark-blue" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>`},
    {
        htmlCode: `
        <div class="modal nao-modal-1" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header text-white bg-dark-blue">
                        <h6 class="modal-title">Modal title</h6>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-dark-blue" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-dark-blue">Save</button>
                    </div>
                </div>
            </div>
        </div>`},
];
