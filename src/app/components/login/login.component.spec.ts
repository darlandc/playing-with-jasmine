import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { Component, DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submitEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    submitEl = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call tap', () => {
    spyOn(component, 'tap')();
    component.tap();
    expect(component.tap).toHaveBeenCalled();
  });

});
