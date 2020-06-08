import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicBookComponent } from './music-book.component';

describe('MusicBookComponent', () => {
  let component: MusicBookComponent;
  let fixture: ComponentFixture<MusicBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
