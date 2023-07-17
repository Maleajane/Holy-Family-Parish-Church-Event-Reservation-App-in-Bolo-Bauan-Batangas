import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdultBPage } from './adult-b.page';

describe('AdultBPage', () => {
  let component: AdultBPage;
  let fixture: ComponentFixture<AdultBPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdultBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
