import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresViewComponent } from './colaboradores-view.component';

describe('ColaboradoresViewComponent', () => {
  let component: ColaboradoresViewComponent;
  let fixture: ComponentFixture<ColaboradoresViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradoresViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradoresViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
