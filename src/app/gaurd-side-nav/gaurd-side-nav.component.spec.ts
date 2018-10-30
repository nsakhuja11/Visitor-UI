import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaurdSideNavComponent } from './gaurd-side-nav.component';

describe('GaurdSideNavComponent', () => {
  let component: GaurdSideNavComponent;
  let fixture: ComponentFixture<GaurdSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaurdSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaurdSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
