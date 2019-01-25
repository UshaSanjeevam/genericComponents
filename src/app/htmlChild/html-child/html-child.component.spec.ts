import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlChildComponent } from './html-child.component';

describe('HtmlChildComponent', () => {
  let component: HtmlChildComponent;
  let fixture: ComponentFixture<HtmlChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
