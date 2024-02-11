import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneprojectComponent } from './oneproject.component';

describe('OneprojectComponent', () => {
  let component: OneprojectComponent;
  let fixture: ComponentFixture<OneprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneprojectComponent]
    });
    fixture = TestBed.createComponent(OneprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
