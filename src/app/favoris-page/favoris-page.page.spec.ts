import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavorisPagePage } from './favoris-page.page';

describe('FavorisPagePage', () => {
  let component: FavorisPagePage;
  let fixture: ComponentFixture<FavorisPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorisPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
