import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'loader-infinity-data',
  template: `
      <div class="d-flex justify-content-center {{ class }}">
          <div style="width: 120px" >
              <loader-infinity></loader-infinity>
          </div>
      </div>
  `,
  styles: []
})
export class LoaderInfinityDataComponent implements OnInit {
  @Input() public class = 'mt-5';
  constructor() { }

  ngOnInit() {
  }

}
