import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallempComponent } from './viewallemp.component';

describe('ViewallempComponent', () => {
  let component: ViewallempComponent;
  let fixture: ComponentFixture<ViewallempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewallempComponent]
    });
    fixture = TestBed.createComponent(ViewallempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
