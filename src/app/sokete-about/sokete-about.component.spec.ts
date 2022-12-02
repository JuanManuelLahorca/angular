import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoketeAboutComponent } from './sokete-about.component';

describe('SoketeAboutComponent', () => {
  let component: SoketeAboutComponent;
  let fixture: ComponentFixture<SoketeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoketeAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoketeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
