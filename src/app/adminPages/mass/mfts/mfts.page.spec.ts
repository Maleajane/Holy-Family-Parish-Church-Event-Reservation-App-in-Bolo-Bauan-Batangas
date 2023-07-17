import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MftsPage } from './mfts.page';

describe('MftsPage', () => {
  let component: MftsPage;
  let fixture: ComponentFixture<MftsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MftsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
