import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEl } from './list-el';

describe('ListEl', () => {
  let component: ListEl;
  let fixture: ComponentFixture<ListEl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEl],
    }).compileComponents();

    fixture = TestBed.createComponent(ListEl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
