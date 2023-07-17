import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfantPage } from './infant.page';

describe('InfantPage', () => {
  let component: InfantPage;
  let fixture: ComponentFixture<InfantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
