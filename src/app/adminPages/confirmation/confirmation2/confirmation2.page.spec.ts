import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Confirmation2Page } from './confirmation2.page';

describe('Confirmation2Page', () => {
  let component: Confirmation2Page;
  let fixture: ComponentFixture<Confirmation2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Confirmation2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
