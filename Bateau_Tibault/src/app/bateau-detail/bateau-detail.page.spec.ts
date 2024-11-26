import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BateauDetailPage } from './bateau-detail.page';

describe('BateauDetailPage', () => {
  let component: BateauDetailPage;
  let fixture: ComponentFixture<BateauDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BateauDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
