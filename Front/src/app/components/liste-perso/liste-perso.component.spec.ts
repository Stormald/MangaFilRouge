import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePersoComponent } from './liste-perso.component';

describe('ListePersoComponent', () => {
  let component: ListePersoComponent;
  let fixture: ComponentFixture<ListePersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
