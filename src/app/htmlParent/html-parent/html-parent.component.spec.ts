import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlParentComponent } from './html-parent.component';

describe('HtmlParentComponent', () => {
  let component: HtmlParentComponent;
  let fixture: ComponentFixture<HtmlParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
