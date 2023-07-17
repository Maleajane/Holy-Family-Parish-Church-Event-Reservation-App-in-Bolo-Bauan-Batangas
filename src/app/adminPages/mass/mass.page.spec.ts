import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MassPage } from './mass.page';

describe('MassPage', () => {
  let component: MassPage;
  let fixture: ComponentFixture<MassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
