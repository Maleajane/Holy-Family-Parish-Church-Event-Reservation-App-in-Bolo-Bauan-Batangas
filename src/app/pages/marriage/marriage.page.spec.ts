import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarriagePage } from './marriage.page';

describe('MarriagePage', () => {
  let component: MarriagePage;
  let fixture: ComponentFixture<MarriagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MarriagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
