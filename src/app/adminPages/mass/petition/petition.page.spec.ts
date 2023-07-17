import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetitionPage } from './petition.page';

describe('PetitionPage', () => {
  let component: PetitionPage;
  let fixture: ComponentFixture<PetitionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PetitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
