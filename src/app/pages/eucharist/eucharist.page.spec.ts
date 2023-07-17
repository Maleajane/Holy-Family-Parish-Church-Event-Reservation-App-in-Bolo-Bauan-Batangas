import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EucharistPage } from './eucharist.page';

describe('EucharistPage', () => {
  let component: EucharistPage;
  let fixture: ComponentFixture<EucharistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EucharistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
