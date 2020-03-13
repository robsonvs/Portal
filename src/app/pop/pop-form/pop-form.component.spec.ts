import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopFormComponent } from './pop-form.component';

describe('PopFormComponent', () => {
  let component: PopFormComponent;
  let fixture: ComponentFixture<PopFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
