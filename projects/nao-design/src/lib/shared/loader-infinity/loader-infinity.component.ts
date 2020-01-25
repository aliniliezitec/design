import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loader-infinity',
  templateUrl: './loader-infinity.component.html',
  styles: [`
      .infinity1 {
          max-width: 25em;
          border-radius: 3px;
          background: transparent;
          fill: none;
          stroke: #E9EEF9;
          stroke-linecap: round;
          stroke-width: 8%;
      }


      .infinity1 use {
          stroke: #3E40DB;
          animation: a 2s linear infinite
      }


      @keyframes a {
          to {
              stroke-dashoffset: 0px
          }
      }
  `]
})
export class LoaderInfinityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
