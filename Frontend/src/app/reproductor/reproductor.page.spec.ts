import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductorPage } from './reproductor.page';

describe('ReproductorPage', () => {
  let component: ReproductorPage;
  let fixture: ComponentFixture<ReproductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReproductorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
