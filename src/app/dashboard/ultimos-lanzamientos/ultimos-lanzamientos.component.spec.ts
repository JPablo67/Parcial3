import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosLanzamientosComponent } from './ultimos-lanzamientos.component';

describe('UltimosLanzamientosComponent', () => {
  let component: UltimosLanzamientosComponent;
  let fixture: ComponentFixture<UltimosLanzamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltimosLanzamientosComponent]
    });
    fixture = TestBed.createComponent(UltimosLanzamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
