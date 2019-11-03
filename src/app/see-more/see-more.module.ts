import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeMoreActionComponent } from './see-more-action/see-more-action.component';
import { SeeMoreComponent } from './see-more.component';

@NgModule({
  declarations: [SeeMoreActionComponent, SeeMoreComponent],
  exports: [SeeMoreComponent],
  imports: [CommonModule]
})
export class SeeMoreModule {}
