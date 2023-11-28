import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksPaginasComponent } from './links-paginas.component';

describe('LinksPaginasComponent', () => {
  let component: LinksPaginasComponent;
  let fixture: ComponentFixture<LinksPaginasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksPaginasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksPaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
