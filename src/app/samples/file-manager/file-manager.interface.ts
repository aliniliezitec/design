export const FileManagerCodeBlocks = [
  {
    html: `
    <div class="nao-file-manager d-flex flex-row">
        <a class="close-modal" href="javascript:void(0)" (click)="dismiss()">
          <i class="nao-icon-cancel"></i>
        </a>

        <div class="nao-content-source d-flex flex-column">
          <div class="source-btn pl-3 d-flex align-items-center" *ngFor="let cs of allowContentSources"
            (click)="dataSource$.next(cs)" [ngClass]="{'bg-white': cs === dataSource$.value}">
            <div class="icon-container mr-3">
              <i [class]="contentSources[cs].icon"></i>
            </div>
            <span>{{ contentSources[cs].name}}</span>
          </div>
        </div>

        <div class="nao-file-manager-content w-100">
          <form class="h-100" #dataForm="ngForm">
            <div class="d-flex align-items-center justify-content-center h-100" *ngIf="status.firstLoading">
              <loader-infinity></loader-infinity>
            </div>

            <ng-container [ngSwitch]="dataSource$.value" *ngIf="!status.firstLoading">

              <!-- CDN Source -->
              <div *ngSwitchCase="'cdn'">
                <div class="h5 text-primary">
                  Choose from files you’ve already uploaded to Naologic
                </div>

                <div class="nao-breadcrumb mt-1">
                  <span class="path-link">Folders</span>
                  <i class="nao-icon-arrow-next-1 mx-2"></i>
                  <span class="path-link" [ngClass]="{'path-active': true }">Ibiza</span>

                </div>

                <div class="action-menu mb-2 d-flex justify-content-between">
                  <div class="action-item" (click)="actionsCdn.sortAsc = !actionsCdn.sortAsc">
                    Name <i class="nao-icon-arrow-up-2 ml-1" [ngClass]="{'rotate-180': !actionsCdn.sortAsc}"></i>
                  </div>
                  <div class="action-item action-view-item" (click)="actionsCdn.viewList = !actionsCdn.viewList">
                    <i [className]="actionsCdn.viewList ? 'nao-icon-crm' : 'nao-icon-grid'"></i>
                  </div>
                </div>

                <div class="cdn-content-grid d-flex align-items-center justify-content-center" *ngIf="status.isLoading">
                  <loader-infinity></loader-infinity>
                </div>

                <!-- CDN content grid -->
                <div class="cdn-content-grid" *ngIf="!status.isLoading && actionsCdn.viewList">
                  <div class="cdn-element" (click)="selectFile(file)"
                    [ngClass]="{'cdn-element-active': isFileSelected(file)}" *ngFor="let file of fileList">

                    <ng-container *ngIf="file.type === 'file'">

                      <img class="preview-img" [src]="file.preview">

                      <div class="file-details d-flex align-items-center">

                        <ng-container [ngSwitch]="file.ext">
                          <i class="nao-icon-image-placeholder text-secondary-light" *ngSwitchCase="'.jpg'"></i>
                          <i class="nao-icon-file-word text-secondary-lighter" *ngSwitchCase="'.docx'"></i>
                          <i class="nao-icon-file-pdf text-danger" *ngSwitchCase="'.pdf'"></i>
                          <i class="nao-icon-file-ppt text-warning" *ngSwitchCase="'.pptx'"></i>
                          <i class="nao-icon-box-list text-primary" *ngSwitchDefault></i>
                        </ng-container>

                        <div class="file-name">
                          {{ file.path }}
                        </div>
                      </div>

                    </ng-container>

                    <ng-container *ngIf="file.type === 'folder'">
                      <div class="preview-icon d-flex align-items-center justify-content-center">
                        <i class="nao-icon-folder"></i>
                      </div>
                      <div class="file-details d-flex align-items-center">
                        <i class="nao-icon-folder"></i>
                        <div class="file-name">
                          {{ file.path }}
                        </div>
                      </div>

                    </ng-container>
                  </div>
                </div>

                <!-- CDN content list -->

                <div class="cdn-content-list" *ngIf="!status.isLoading && !actionsCdn.viewList">
                  <div class="cdn-element d-flex align-items-center" (click)="selectFile(file)"
                    [ngClass]="{'cdn-element-active': isFileSelected(file)}" *ngFor="let file of fileList">

                    <div class="preview-container mr-2">
                      <ng-container *ngIf="file.type === 'folder'">
                        <i class="nao-icon-folder"></i>
                      </ng-container>

                      <ng-container *ngIf="file.type === 'file'">
                        <ng-container [ngSwitch]="file.ext">
                          <i class="nao-icon-image-placeholder text-secondary-light" *ngSwitchCase="'.jpg'"></i>
                          <i class="nao-icon-file-word text-secondary-lighter" *ngSwitchCase="'.docx'"></i>
                          <i class="nao-icon-file-pdf text-danger" *ngSwitchCase="'.pdf'"></i>
                          <i class="nao-icon-file-ppt text-warning" *ngSwitchCase="'.pptx'"></i>
                          <i class="nao-icon-file-excel text-success" *ngSwitchCase="'xlsx'"></i>
                          <i class="nao-icon-box-list text-primary" *ngSwitchDefault></i>
                        </ng-container>
                      </ng-container>
                    </div>

                    <div class="file-name">
                      {{ file.path }}
                    </div>

                  </div>
                </div>

                <div class="nao-file-manager-footer d-flex justify-content-between">
                  <div class="selected-files align-self-end" *ngIf="selectedFiles.length > 0">
                    Selected files: {{ selectedFiles.length }}
                  </div>
                  <button type="button" data-style="expand-right" class="btn btn-simple-primary ml-auto"
                    [disabled]="selectedFiles.length === 0">
                    Import files
                  </button>
                </div>

              </div>

              <!-- Upload Source -->
              <div *ngSwitchCase="'upload'">
                <div class="h5 text-primary">
                  Choose a file locally
                </div>

                <!-- Upload drag&drop zone -->
                <div class="nao-import-upload-zone d-flex flex-column justify-content-center align-items-center"
                  *ngIf="!uploadFilesView" (click)="uploadFilesView = !uploadFilesView">
                  <i class="nao-icon-upload mb-2"></i>
                  <span>
                    <span class="nao-file-blue-txt">Choose a file</span> or drag it here
                  </span>
                  <span class="nao-size-limit-txt">size limit: 10MB</span>
                  <input type="file" name="avatars" #fileField hidden [multiple]="maxFiles != 1">
                </div>

                <!-- Summary images for upload -->

                <!-- Summary images to be uploaded -->
                <div class="upload-summary" *ngIf="uploadFilesView">
                  <div class="file-type">Images</div>

                  <div class="summary-list d-flex flex-column">

                    <div class="summary-item d-flex"
                      *ngFor="let file of filesForUpload">
                      <div class="file-thumbnail">
                        <img [src]="file.path">
                      </div>
                      <div class="file-text d-flex flex-column mr-auto">
                        <span class="file-name">{{ file.name }}</span>
                        <span class="file-size"> 0 / 1.20 mb</span>
                      </div>
                      <div class="file-actions">
                        <button type="button"
                          class="btn btn-sm btn-without-box-shaddow p-0">
                          <i class="nao-icon-cancel"></i>
                        </button>
                      </div>
                      <!-- progress bar for individual images -->
                      <div class="progress-bar-wrapper">
                        <loader-bar-small [progress]="file.progress" height="2px"></loader-bar-small>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="nao-file-manager-footer d-flex justify-content-between" *ngIf="uploadFilesView">
                  <div class="selected-files align-self-end" *ngIf="selectedImagesUnsplash.length > 0">
                    Selected files: {{ selectedImagesUnsplash.length }}
                  </div>
                  <button type="button" data-style="expand-right" class="btn btn-simple-primary ml-auto"
                    [disabled]="selectedImagesUnsplash.length === 0">
                    Upload files
                  </button>
                </div>

              </div>

              <!-- Search web Source -->
              <div *ngSwitchCase="'search-web'">

                <div class="h5 text-primary">
                  Search and find images on the web
                </div>

                <div class="nao-input-search-wrapper">
                  <input type="text" autocomplete="off" class="form-control form-control-sm nao-input-search"
                    placeholder="Search Unsplash" />
                </div>

                <div class="search-web-content">
                  <div class="search-img-results">
                    <div class="img-result-container" *ngFor="let img of searchResult"
                      (click)="selectImageUnsplash(img)">
                      <img class="img-result" [src]="img.path">
                      <div class="circle-icon d-flex justify-content-center align-items-center"
                        *ngIf="isImageUnsplashSelected(img.id)">
                        <i class="nao-icon-checkmark"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="nao-file-manager-footer d-flex justify-content-between">
                  <div class="selected-files align-self-end" *ngIf="selectedImagesUnsplash.length > 0">
                    Selected files: {{ selectedImagesUnsplash.length }}
                  </div>
                  <button type="button" data-style="expand-right" class="btn btn-simple-primary ml-auto"
                    [disabled]="selectedImagesUnsplash.length === 0">
                    Select files
                  </button>
                </div>

              </div>

            </ng-container>

          </form>
        </div>

      </div>`,
    ts1: `
    public status = {
      firstLoading: false,
      isLoading: false
    }
  
    public multiple = true;
    public maxFiles = 10;
    private subsSource = new Subscription();
    public dataSource$ = new BehaviorSubject<string>('cdn');
    public allowContentSources = ['cdn', 'upload', 'search-web'];
    public contentSources = {
      'upload': { name: 'Nao images', icon: 'nao-icon-filing' },
      'cdn': { name: 'Local files', icon: 'nao-icon-item-list' },
      'search-web': { name: 'Search web', icon: 'nao-icon-image-placeholder' },
    };
  
    public actionsCdn = {
      viewList: true,
      sortAsc: true
    };
  
    public fileList = [
      { path: 'IMG_390324-123453125', preview: 'assets-local/images/file-manager/img_view.jpg', ext: '.jpg', type: 'file' },
      { path: 'IMG_390324-123488768678', preview: 'assets-local/images/file-manager/img_view.jpg', ext: '.jpg', type: 'file' },
      { path: 'letter.docx', preview: 'assets-local/images/file-manager/word.png', ext: '.docx', type: 'file' },
      { path: 'contracts.xlsx', preview: 'assets-local/images/file-manager/excel.png', ext: '.xlsx', type: 'file' },
      { path: 'pitch.pptx', preview: 'assets-local/images/file-manager/ppt.png', ext: '.pptx', type: 'file' },
      { path: 'IMG_390324-61651696', preview: 'assets-local/images/file-manager/img_view.jpg', ext: '.jpg', type: 'file' },
      { path: 'Folder images', preview: '', ext: '', type: 'folder' },
      { path: 'prospectus.pdf', preview: 'assets-local/images/file-manager/word.png', ext: '.pdf', type: 'file' },
      { path: 'IMG_390324-1234531252', preview: 'assets-local/images/file-manager/img_view.jpg', ext: '.jpg', type: 'file' },
      { path: 'IMG_390324-1234887686782', preview: 'assets-local/images/file-manager/img_view.jpg', ext: '.jpg', type: 'file' },
      { path: 'letter2.docx', preview: 'assets-local/images/file-manager/word.png', ext: '.docx', type: 'file' },
      { path: 'contracts2.xlsx', preview: 'assets-local/images/file-manager/excel.png', ext: '.xlsx', type: 'file' },
      { path: 'pitch2.pptx', preview: 'assets-local/images/file-manager/ppt.png', ext: '.pptx', type: 'file' },
      { path: 'IMG_390324-616516962', preview: 'assets-local/images/file-manager/img_view.jpg', ext: '.jpg', type: 'file' },
      { path: 'Folder images2', preview: '', ext: '', type: 'folder' },
      { path: 'prospectus2.pdf', preview: 'assets-local/images/file-manager/word.png', ext: '.pdf', type: 'file' },
    ];
  
    public selectedFiles = [];
  
    // -->Unsplash
    public searchResult = [
      { id: '1', path: 'assets-local/images/photography/1.png' },
      { id: '2', path: 'assets-local/images/photography/2.png' },
      { id: '3', path: 'assets-local/images/photography/3.png' },
      { id: '4', path: 'assets-local/images/photography/4.png' },
      { id: '5', path: 'assets-local/images/photography/5.png' },
      { id: '6', path: 'assets-local/images/photography/6.png' },
      { id: '7', path: 'assets-local/images/photography/7.png' },
      { id: '8', path: 'assets-local/images/photography/8.png' },
      { id: '9', path: 'assets-local/images/photography/9.png' },
      { id: '10', path: 'assets-local/images/photography/1.png' },
      { id: '11', path: 'assets-local/images/photography/2.png' },
      { id: '12', path: 'assets-local/images/photography/3.png' },
      { id: '13', path: 'assets-local/images/photography/4.png' },
      { id: '14', path: 'assets-local/images/photography/5.png' },
      { id: '15', path: 'assets-local/images/photography/6.png' },
      { id: '16', path: 'assets-local/images/photography/7.png' },
      { id: '17', path: 'assets-local/images/photography/8.png' },
      { id: '18', path: 'assets-local/images/photography/9.png' },
      { id: '19', path: 'assets-local/images/photography/10.png' },
      { id: '20', path: 'assets-local/images/photography/1.png' },
    ]
    public selectedImagesUnsplash = [];
  
    // -->Upload:
    public uploadFilesView = false;
    public filesForUpload = [
      { name: 'image 1', progress: 30, path: 'assets-local/images/landing-page/heroimage.png'},
      { name: 'image 2', progress: 10, path: 'assets-local/images/landing-page/heroimage.png'},
      { name: 'image 3', progress: 70, path: 'assets-local/images/landing-page/heroimage.png'},
      { name: 'IMG_390324-1234887686782', progress: 90, path: 'assets-local/images/landing-page/heroimage.png'},
      { name: 'image 4', progress: 60, path: 'assets-local/images/landing-page/heroimage.png'},
      { name: 'IMG_390324-1234887686782', progress: 20, path: 'assets-local/images/landing-page/heroimage.png'},
    ];`,
    ts2: `
    constructor(
      public readonly appService: AppService
    ) {
      // -->Trigger: when we change the source
      this.subsSource.add(
        this.dataSource$
          .subscribe(sourceName => {
            // -->Reset: subs
          })
      );
    }`,
    ts3: `
    /**
     * Select a file
     * @param file
     */
    public selectFile(file): void {
      if (!Array.isArray(this.selectedFiles)) {
        this.selectedFiles = [];
      }
      // -->Index: file
      const indexFile = this.selectedFiles.indexOf(file.path);
      if (this.multiple) {
        // -->Check: file
        if (indexFile > -1) {
          // -->Unselect: file
          this.selectedFiles.splice(indexFile, 1);
        } else {
          // -->Check: if the max number of files was reached
          if (this.selectedFiles.length < this.maxFiles) {
            this.selectedFiles.push(file.path);
          }
        }
      } else {
        // -->Check: file
        if (indexFile > -1) {
          this.selectedFiles = [];
        } else {
          this.selectedFiles = [file.path];
        }
      }
    }
  
    /**
     * Check if file is selected
     * @param file
     */
    public isFileSelected(file): boolean {
      return Array.isArray(this.selectedFiles) && this.selectedFiles.indexOf(file.path) > -1;
    }
  
    /**
     * Select an image from unsplash
     * @param file
     */
    public selectImageUnsplash(img): void {
      if (!Array.isArray(this.selectedImagesUnsplash)) {
        this.selectedImagesUnsplash = [];
      }
      // -->Index: file
      const indexImage = this.selectedImagesUnsplash.indexOf(img.id);
  
      if (this.multiple) {
        // -->Check: file
        if (indexImage > -1) {
          // -->Unselect: file
          this.selectedImagesUnsplash.splice(indexImage, 1);
        } else {
          // -->Check: if the max number of files was reached
          if (this.selectedImagesUnsplash.length < this.maxFiles) {
            this.selectedImagesUnsplash.push(img.id);
          }
        }
      } else {
        // -->Check: file
        if (indexImage > -1) {
          this.selectedImagesUnsplash = [];
        } else {
          this.selectedImagesUnsplash = [img.id];
        }
      }
    }
  
    /**
     * Check if image is selected
     * @param imgId
     */
    public isImageUnsplashSelected(imageId): boolean {
      return Array.isArray(this.selectedImagesUnsplash) && this.selectedImagesUnsplash.indexOf(imageId) > -1;
    }
  `
  }
];
