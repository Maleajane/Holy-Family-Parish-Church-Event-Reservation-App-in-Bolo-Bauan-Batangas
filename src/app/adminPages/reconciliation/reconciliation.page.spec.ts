import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReconciliationPage } from './reconciliation.page';

describe('ReconciliationPage', () => {
  let component: ReconciliationPage;
  let fixture: ComponentFixture<ReconciliationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReconciliationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
