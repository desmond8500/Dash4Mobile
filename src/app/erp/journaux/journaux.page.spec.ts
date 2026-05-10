import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JournauxPage } from './journaux.page';

describe('JournauxPage', () => {
  let component: JournauxPage;
  let fixture: ComponentFixture<JournauxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JournauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
