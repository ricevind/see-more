import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMoreActionComponent } from './see-more-action.component';

describe('SeeMoreActionComponent', () => {
  let component: SeeMoreActionComponent;
  let fixture: ComponentFixture<SeeMoreActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeMoreActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeMoreActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
