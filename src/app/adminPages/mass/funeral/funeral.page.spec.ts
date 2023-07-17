import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuneralPage } from './funeral.page';

describe('FuneralPage', () => {
  let component: FuneralPage;
  let fixture: ComponentFixture<FuneralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FuneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
