import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuselajeComponent } from './fuselaje.component';

describe('FuselajeComponent', () => {
  let component: FuselajeComponent;
  let fixture: ComponentFixture<FuselajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuselajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuselajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
