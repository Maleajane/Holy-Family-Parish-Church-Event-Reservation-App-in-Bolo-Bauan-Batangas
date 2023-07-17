import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThanksgivingPage } from './thanksgiving.page';

describe('ThanksgivingPage', () => {
  let component: ThanksgivingPage;
  let fixture: ComponentFixture<ThanksgivingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ThanksgivingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
