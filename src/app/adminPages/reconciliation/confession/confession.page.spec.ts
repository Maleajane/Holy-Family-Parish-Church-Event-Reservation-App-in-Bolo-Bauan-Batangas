import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfessionPage } from './confession.page';

describe('ConfessionPage', () => {
  let component: ConfessionPage;
  let fixture: ComponentFixture<ConfessionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
