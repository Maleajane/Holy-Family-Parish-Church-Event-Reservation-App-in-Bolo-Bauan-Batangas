import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstHolyCommunionPage } from './first-holy-communion.page';

describe('FirstHolyCommunionPage', () => {
  let component: FirstHolyCommunionPage;
  let fixture: ComponentFixture<FirstHolyCommunionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FirstHolyCommunionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
