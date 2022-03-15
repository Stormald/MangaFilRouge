import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddToMyListComponent } from './modal-add-to-my-list.component';

describe('ModalAddToMyListComponent', () => {
  let component: ModalAddToMyListComponent;
  let fixture: ComponentFixture<ModalAddToMyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddToMyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddToMyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
