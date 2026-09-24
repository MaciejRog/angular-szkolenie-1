import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sekcja2Form } from './sekcja2-form';

describe('Sekcja2Form', () => {
  let component: Sekcja2Form;
  let fixture: ComponentFixture<Sekcja2Form>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sekcja2Form],
    }).compileComponents();

    fixture = TestBed.createComponent(Sekcja2Form);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
