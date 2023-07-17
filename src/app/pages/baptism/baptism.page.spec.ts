import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaptismPage } from './baptism.page';

describe('BaptismPage', () => {
  let component: BaptismPage;
  let fixture: ComponentFixture<BaptismPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaptismPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
