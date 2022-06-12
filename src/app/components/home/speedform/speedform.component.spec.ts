import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedformComponent } from './speedform.component';

describe('SpeedformComponent', () => {
  let component: SpeedformComponent;
  let fixture: ComponentFixture<SpeedformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
