import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMusicaComponent } from './card-musica.component';

describe('CardMusicaComponent', () => {
  let component: CardMusicaComponent;
  let fixture: ComponentFixture<CardMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMusicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
