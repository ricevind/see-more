import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewChild
} from "@angular/core";
import { SeeMoreActionComponent } from "./see-more-action/see-more-action.component";

@Component({
  selector: "app-see-more",
  templateUrl: "./see-more.component.html",
  styleUrls: ["./see-more.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeeMoreComponent {
  @Input()
  numberOfLines = 4;

  @Input()
  showMore = false;

  @Output()
  showMoreChange = new EventEmitter<boolean>();

  @ViewChild("textElement", { read: ElementRef, static: true })
  textElement: ElementRef<HTMLSpanElement>;

  @ViewChild(SeeMoreActionComponent, { read: ElementRef, static: true })
  seeMoreElement: ElementRef<HTMLSpanElement>;

  private lineHeight = 0;
  private hostHeight = 0;
  private textRects: DOMRectList | ClientRectList;

  constructor(
    private hostElement: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.observedChanges();
  }

  @HostListener("window:resize")
  observedChanges(w = null) {
    console.log(w);
    this.reSetTextRects();
    this.reCalculateLineHeight();
    this.reCalculateHostHeight();
    this.setHostHeight();
    this.shouldSeeMore();
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
    const shouldSeeMore = this.hostHeight < textHeight;
    if (shouldSeeMore) {
      this.renderer.removeAttribute(
        this.seeMoreElement.nativeElement,
        "hidden"
      );
    } else {
      this.renderer.setAttribute(
        this.seeMoreElement.nativeElement,
        "hidden",
        "true"
      );
    }
  }

  private reSetTextRects() {
    console.log(this.textElement.nativeElement.getClientRects());
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
    this.renderer.removeChild(this.hostElement.nativeElement, referenceNode);
  }

  private reCalculateHostHeight() {
    this.hostHeight = this.lineHeight * this.numberOfLines;
  }
}
