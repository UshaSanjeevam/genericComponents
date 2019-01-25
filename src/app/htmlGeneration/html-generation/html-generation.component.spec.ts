import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlGenerationComponent } from './html-generation.component';

describe('HtmlGenerationComponent', () => {
  let component: HtmlGenerationComponent;
  let fixture: ComponentFixture<HtmlGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
