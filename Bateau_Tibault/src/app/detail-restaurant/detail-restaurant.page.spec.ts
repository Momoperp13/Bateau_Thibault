import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailRestaurantPage } from './detail-restaurant.page';

describe('DetailRestaurantPage', () => {
  let component: DetailRestaurantPage;
  let fixture: ComponentFixture<DetailRestaurantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
