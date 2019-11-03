import {
  AfterContentChecked,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-see-more",
  templateUrl: "./see-more.component.html",
  styleUrls: ["./see-more.component.css"]
})
export class SeeMoreComponent implements AfterContentChecked {
  @Input()
  numberOfLines = 4;

  @ViewChild("textElement", { read: ElementRef, static: true })
  textElement: ElementRef<HTMLSpanElement>;

  isSeeMoreVisible = false;
  private lineHeight = 0;
  private hostHeight = 0;
  private textRects: DOMRectList | ClientRectList;

  constructor(
    private hostElement: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngAfterContentChecked() {
    this.reSetTextRects();
    this.reCalculateLineHeight();
    this.reCalculateHostHeight();
    this.setHostHeight();
    this.shouldSeeMore();

    console.log(this.textRects, this.lineHeight, this.hostHeight);
  }

  setHostHeight() {
    this.renderer.setStyle(
      this.hostElement.nativeElement,
      "max-height",
      this.hostHeight + "px"
    );
    this.renderer.setStyle(
      this.hostElement.nativeElement,
      "overflow",
      "hidden"
    );
  }

  shouldSeeMore() {
    const textHeight = this.textRects.length * this.lineHeight;
    this.isSeeMoreVisible = this.hostHeight < textHeight;
  }

  private reSetTextRects() {
    this.textRects = this.textElement.nativeElement.getClientRects();
  }

  private reCalculateLineHeight() {
    const referenceNode = this.renderer.createElement(
      "span"
    ) as HTMLSpanElement;
    this.renderer.setProperty(referenceNode, "innerText", "reference");
    this.renderer.setStyle(referenceNode, "position", "absolute");
    this.renderer.appendChild(this.hostElement.nativeElement, referenceNode);

    this.lineHeight = referenceNode.getBoundingClientRect().height;
    console.log(referenceNode.getBoundingClientRect());
    this.renderer.removeChild(this.hostElement.nativeElement, referenceNode);
  }

  private reCalculateHostHeight() {
    this.hostHeight = this.lineHeight * this.numberOfLines;
  }
}
