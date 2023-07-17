import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdultPage } from './adult.page';

describe('AdultPage', () => {
  let component: AdultPage;
  let fixture: ComponentFixture<AdultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
