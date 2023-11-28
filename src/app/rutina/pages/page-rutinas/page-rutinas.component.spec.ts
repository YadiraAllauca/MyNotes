import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRutinasComponent } from './page-rutinas.component';

describe('PageRutinasComponent', () => {
  let component: PageRutinasComponent;
  let fixture: ComponentFixture<PageRutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRutinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
