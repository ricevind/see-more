import { Component, HostListener } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'span[seeMoreAction]',
  templateUrl: './see-more-action.component.html',
  styleUrls: ['./see-more-action.component.css']
})
export class SeeMoreActionComponent {
  @HostListener('click')
  onClick() {
    console.log('i was clicked');
  }
}
