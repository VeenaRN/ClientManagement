import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmeetingsComponent } from './clientmeetings.component';

describe('ClientmeetingsComponent', () => {
  let component: ClientmeetingsComponent;
  let fixture: ComponentFixture<ClientmeetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientmeetingsComponent]
    });
    fixture = TestBed.createComponent(ClientmeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
