import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Marriage2Page } from './marriage2.page';

describe('Marriage2Page', () => {
  let component: Marriage2Page;
  let fixture: ComponentFixture<Marriage2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Marriage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
