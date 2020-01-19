import { Component, OnInit } from '@angular/core';
import { CardsCodeBlocks } from './cards.interface';
import { AppService } from 'src/app/app.service';
import { ComponentsPublicFlow } from '../components.flowservice';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {
  public data = CardsCodeBlocks;

  constructor(
    public readonly appService: AppService,
    public readonly $flow: ComponentsPublicFlow
    ) { }

  ngOnInit() {
  }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }
}
