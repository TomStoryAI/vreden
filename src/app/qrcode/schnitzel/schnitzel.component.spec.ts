import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchnitzelComponent } from './schnitzel.component';

describe('SchnitzelComponent', () => {
  let component: SchnitzelComponent;
  let fixture: ComponentFixture<SchnitzelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchnitzelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchnitzelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
