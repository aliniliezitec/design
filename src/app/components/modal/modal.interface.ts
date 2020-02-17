export const ModalCodeBlocks = [
    {
        html: `
        <div class="modal nao-modal nao-modal-1" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header text-white bg-primary flex-column">
                        <h5 class="modal-subtitle mb-1">Descriptor</h5>
                        <h5 class="modal-title">Subject</h5>
                    </div>
                    <div class="modal-body">
                        Modal body text goes here. After deleting this you won't be able to recover it.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-simple-dark-blue btn-sm" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-simple-primary btn-sm">Confirm</button>
                    </div>
                </div>
            </div>
        </div>`,
        ts1: `
        constructor(private readonly modalService: NgbModal) {}
        `,
        ts2: `
        // -->Open: the modal
        const modalRef = this.modalService.open(ModalComponent, {
            centered: true, windowClass: 'nao-modal-window-class', backdropClass: 'nao-modal-backdrop', size: 'lg',
        });
        // -->Set: data
        modalRef.componentInstance.data = data || {};
        modalRef.componentInstance.mode = 'id';
        // -->Await: result
        modalRef.result
        .then(modalRes => {
            if (modalRes && modalRes.ok) {
            // -->Refresh
            this.refresh();
            }
        })
        .catch(err => {
            this.status.error();
            this.contactsService.sharedService.swalApiError(err);
        });`
    },
    {
        html: `
        <div class="modal nao-modal nao-modal-2" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header flex-column">
                        <h5 class="modal-subtitle mb-1">Descriptor</h5>
                        <h5 class="modal-title">Subject</h5>
                    </div>
                    <div class="modal-body">
                        <p>A few things to keep in mind when suspending users:</p>
                        <div class="d-flex">
                            <i class="nao-icon-information mr-1"></i>
                            <p>User subscription fees still apply to the suspended users</p>
                        </div>
                        <div class="d-flex">
                            <i class="nao-icon-information mr-1"></i>
                            <p>The user’s data will remain intact but they won’t be able to sign-in as long as they’re suspended</p>
                        </div>
                        <div class="d-flex">
                            <i class="nao-icon-information mr-1"></i>
                            <p>The user’s data will remain intact but they won’t be able to sign-in as long as they’re suspended</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-simple-dark-blue btn-sm" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-simple-primary btn-sm">Create</button>
                    </div>
                </div>
            </div>
        </div>`
    },
];
