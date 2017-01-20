/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomComponent } from './hom.component';

describe('HomComponent', () => {
  let component: HomComponent;
  let fixture: ComponentFixture<HomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
