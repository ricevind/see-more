import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "see-more";
  content = `  shhhdsfdf pjapj pjpajpjpjpjp sdah kshdf lkhlksdh shhhdsfdf ahsdfhsjldh sdah kshdf
    shhhdsfdf ahsdfhsjldh sdah pjapj pjpajpjpjpj shhhdsfdf ahsdfhsjldh pjapj pjpajpjpjpj`;

  showMore = false;

  constructor() {
    // setTimeout(
    //   () => (this.content = `  shhhdsfdf pjapj pjpajpjpjpjp sdah kshj`),
    //   3000
    // );
  }
}
