import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoketeSocksComponent } from './sokete-socks.component';

describe('SoketeSocksComponent', () => {
  let component: SoketeSocksComponent;
  let fixture: ComponentFixture<SoketeSocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoketeSocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoketeSocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
