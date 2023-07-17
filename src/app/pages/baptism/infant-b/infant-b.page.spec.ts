import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfantBPage } from './infant-b.page';

describe('InfantBPage', () => {
  let component: InfantBPage;
  let fixture: ComponentFixture<InfantBPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfantBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
