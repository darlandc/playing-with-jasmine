import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { render, screen, fireEvent } from '@testing-library/angular';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthService, HttpClient],
      declarations: [AppComponent]
    }).compileComponents();
    console.log(`beforeEach`);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  afterAll(() => console.log('afterAll'));
});
