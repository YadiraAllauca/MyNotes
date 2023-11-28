import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotasComponent } from './page-notas.component';

describe('PageNotasComponent', () => {
  let component: PageNotasComponent;
  let fixture: ComponentFixture<PageNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
