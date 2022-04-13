import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMangaAmateurComponent } from './detail-manga-amateur.component';

describe('DetailMangaAmateurComponent', () => {
  let component: DetailMangaAmateurComponent;
  let fixture: ComponentFixture<DetailMangaAmateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMangaAmateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMangaAmateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
