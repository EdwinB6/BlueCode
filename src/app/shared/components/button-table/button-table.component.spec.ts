import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTableComponent } from './button-table.component';

describe('ButtonTableComponent', () => {
  let component: ButtonTableComponent;
  let fixture: ComponentFixture<ButtonTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonTableComponent]
    });
    fixture = TestBed.createComponent(ButtonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
