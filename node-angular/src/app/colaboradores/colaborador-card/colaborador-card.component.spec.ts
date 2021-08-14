import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorCardComponent } from './colaborador-card.component';

describe('ColaboradorCardComponent', () => {
  let component: ColaboradorCardComponent;
  let fixture: ComponentFixture<ColaboradorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
