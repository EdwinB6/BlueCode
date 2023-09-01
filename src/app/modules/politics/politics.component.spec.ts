import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsComponent } from './politics.component';

describe('PoliticsComponent', () => {
  let component: PoliticsComponent;
  let fixture: ComponentFixture<PoliticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticsComponent]
    });
    fixture = TestBed.createComponent(PoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
