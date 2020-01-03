import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loader-table-lottie',
  templateUrl: './loader-table-lottie.component.html',
  styles: []
})
export class LoaderTableLottieComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed = 1;

  constructor() {
    this.lottieConfig = {
      path: 'assets/lottie/skeleton-frame-loading.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  ngOnInit() {
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }
}
