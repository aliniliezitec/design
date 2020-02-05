import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FileManagerCodeBlocks } from './file-manager.interface';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
})
export class FileManagerComponent {
  public data = FileManagerCodeBlocks;

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
    { path: 'IMG_390324-61651696', preview: '', ext: '.jpg', type: 'file' },
    { path: 'Folder images', preview: '', ext: '', type: 'folder' },
    { path: 'prospectus.pdf', preview: 'assets-local/images/file-manager/word.png', ext: '.pdf', type: 'file' },
    { path: 'IMG_390324-1234531252', preview: 'assets-local/images/file-manager/img_view.jpg', ext: '.jpg', type: 'file' },
    { path: 'IMG_390324-1234887686782', preview: 'assets-local/images/file-manager/img_view.jpg', ext: '.jpg', type: 'file' },
    { path: 'letter2.docx', preview: '', ext: '.docx', type: 'file' },
    { path: 'contracts2.xlsx', preview: '', ext: '.xlsx', type: 'file' },
    { path: 'pitch2.pptx', preview: 'assets-local/images/file-manager/ppt.png', ext: '.pptx', type: 'file' },
    { path: 'IMG_390324-616516962', preview: 'assets-local/images/file-manager/img_view.jpg', ext: '.jpg', type: 'file' },
    { path: 'Folder images2', preview: '', ext: '', type: 'folder' },
    { path: 'prospectus2.pdf', preview: '', ext: '.pdf', type: 'file' },
  ];

  public selectedFiles = [];

  // -->Unsplash
  public searchResult = [
    { id: '1', name: 'Name image1', path: 'assets-local/images/photography/1.png' },
    { id: '2', name: 'Name image2', path: 'assets-local/images/photography/2.png' },
    { id: '3', name: 'Name image3', path: 'assets-local/images/photography/3.png' },
    { id: '4', name: 'Name image4', path: 'assets-local/images/photography/4.png' },
    { id: '5', name: 'Name image long long5', path: 'assets-local/images/photography/5.png' },
    { id: '6', name: 'Name image6', path: 'assets-local/images/photography/6.png' },
    { id: '7', name: 'Name image long long7', path: 'assets-local/images/photography/7.png' },
    { id: '8', name: 'Name image8', path: 'assets-local/images/photography/8.png' },
    { id: '9', name: 'Name image9', path: 'assets-local/images/photography/9.png' },
    { id: '10', name: 'Name image10', path: 'assets-local/images/photography/1.png' },
    { id: '11', name: 'Name image11', path: 'assets-local/images/photography/2.png' },
    { id: '12', name: 'Name image long long 12', path: 'assets-local/images/photography/3.png' },
    { id: '13', name: 'Name image13', path: 'assets-local/images/photography/4.png' },
    { id: '14', name: 'Name image14', path: 'assets-local/images/photography/5.png' },
    { id: '15', name: 'Name image15', path: 'assets-local/images/photography/6.png' },
    { id: '16', name: 'Name image16', path: 'assets-local/images/photography/7.png' },
    { id: '17', name: 'Name image17', path: 'assets-local/images/photography/8.png' },
    { id: '18', name: 'Name image18', path: 'assets-local/images/photography/9.png' },
    { id: '19', name: 'Name image19', path: 'assets-local/images/photography/10.png' },
    { id: '20', name: 'Name image20', path: 'assets-local/images/photography/1.png' },
  ];

  public selectedImagesUnsplash = [];

  // -->Upload:
  public uploadFilesView = false;
  public filesForUpload = [
    { name: 'image 1', progress: 30, path: 'assets-local/images/landing-page/heroimage.png' },
    { name: 'image 2', progress: 10, path: 'assets-local/images/landing-page/heroimage.png' },
    { name: 'image 3', progress: 70, path: 'assets-local/images/landing-page/heroimage.png' },
    { name: 'IMG_390324-1234887686782', progress: 90, path: 'assets-local/images/landing-page/heroimage.png' },
    { name: 'image 4', progress: 60, path: 'assets-local/images/landing-page/heroimage.png' },
    { name: 'IMG_390324-1234887686782', progress: 20, path: 'assets-local/images/landing-page/heroimage.png' },
  ];

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
  }

  /**
   * Dismiss the modal
   */
  public dismiss(): void {
    // this.activeModal.dismiss(null);
  }

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


  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }

}
