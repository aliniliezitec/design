import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NaoCrud } from '../shared.interface';

type ProgressBarType = 'primary'|'secondary'|'success'|'info'|'warning'|'danger'|'dark';

@Component({
  selector: 'loader-bar-small',
  template: `
    <div style="height: 4px; background: transparent;" class="">
      <div *ngIf="!hide">
        <ngb-progressbar [value]="progress" [type]="type" [height]="height"
        [showValue]="showValue" [striped]="striped" [animated]="animated"></ngb-progressbar>
      </div>
    </div>
  `,
  styles: []
})
export class LoaderBarSmallComponent implements OnInit, OnChanges {
  @Input() public state: NaoCrud.State;
  @Input() public progress = 0;
  @Input() public type: ProgressBarType = 'primary';
  @Input() public striped = true;
  @Input() public animated = true;
  @Input() public height = '4px';
  @Input() public showValue = false;
  @Input() public hide = false;
  public previousState: NaoCrud.State;
  private interval;
  // todo: remove lottie
  // todo: remove lottie
  // todo: remove lottie
  // todo: remove lottie
  // todo: remove lottie
  // todo: remove lottie
  // todo: remove lottie

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['state']) {
      // -->Set: previous
      this.previousState = changes.state.previousValue;

      // -->Check: type
      switch (changes.state.currentValue) {
        case NaoCrud.State.loading:
        case NaoCrud.State.processing:
          // -->Start: a new progress
          this.startProgress();
          break;
        case NaoCrud.State.fatalError:
          this.type = 'danger';
          break;
        case NaoCrud.State.init:
        case NaoCrud.State.ready:
          this.stopProgress(true);
          break;
      }
    }

    if (changes['disabled']) {
      this.updateDisabled();
    }
  }

  /**
   * Start progress call used for progress bar
   *    > count to 100
   */
  public startProgress() {
    this.progress = 0;
    this.hide = false;
    // -->Set: interval
    this.interval = setInterval(() => {
      // -->Add: to progress
      this.progress += 8;
      if (this.progress >= 100) {
        this.stopProgress(true);
      }
      // -->Update
      // this.updateLadda();
    }, 200);
  }

  /**
   * Stop the progress
   */
  public stopProgress(complete = true, hide = true) {
    this.progress = 100;
    setTimeout(() => {
      clearInterval(this.interval);
      this.hide = true;
    }, 350);
  }


  /**
   * Disable button
   */
  private updateDisabled(): void {
    // this.el.disabled = this.disabled;
    // if (this.previousState === NaoCrud.State.processing && !this.disabled) {
    //   this.setText(this.ready);
    // }
  }
}
