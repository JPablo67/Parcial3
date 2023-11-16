import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerdashboardComponent } from './gamerdashboard.component';

describe('GamerdashboardComponent', () => {
  let component: GamerdashboardComponent;
  let fixture: ComponentFixture<GamerdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamerdashboardComponent]
    });
    fixture = TestBed.createComponent(GamerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
