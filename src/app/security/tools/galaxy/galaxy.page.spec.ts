import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalaxyPage } from './galaxy.page';

describe('GalaxyPage', () => {
  let component: GalaxyPage;
  let fixture: ComponentFixture<GalaxyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
