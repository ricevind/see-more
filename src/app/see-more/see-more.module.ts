import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SeeMoreActionComponent } from "./see-more-action/see-more-action.component";
import { SeeMoreComponent } from "./see-more.component";
import { ObserversModule } from "@angular/cdk/observers";

@NgModule({
  declarations: [SeeMoreActionComponent, SeeMoreComponent],
  exports: [SeeMoreComponent],
  imports: [CommonModule, ObserversModule]
})
export class SeeMoreModule {}
