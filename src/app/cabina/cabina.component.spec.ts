import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinaComponent } from './cabina.component';

describe('CabinaComponent', () => {
  let component: CabinaComponent;
  let fixture: ComponentFixture<CabinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
