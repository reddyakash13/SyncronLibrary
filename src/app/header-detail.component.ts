/**
 * New typescript file
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-detail',
  templateUrl: './header-detail.component.html',
})

export class HeaderDetailComponent {
  @Input()
  totalBooks: number;
  @Input()
  availableBooks: number;
}
