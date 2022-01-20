import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAnimeComponent } from './detail-anime.component';

describe('DetailAnimeComponent', () => {
  let component: DetailAnimeComponent;
  let fixture: ComponentFixture<DetailAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
