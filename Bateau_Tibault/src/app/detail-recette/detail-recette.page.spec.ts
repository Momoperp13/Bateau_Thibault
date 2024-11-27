import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailRecettePage } from './detail-recette.page';

describe('DetailRecettePage', () => {
  let component: DetailRecettePage;
  let fixture: ComponentFixture<DetailRecettePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRecettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
