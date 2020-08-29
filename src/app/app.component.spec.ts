import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { render, screen, fireEvent } from '@testing-library/angular'

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
    console.log(`beforeEach`);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;


  }));

  it('should render counter', async () => {
    await render(AppComponent, {});
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'playing-with-jasmine'`, () => {
    expect(component.title).toEqual('playing-with-jasmine');
  });

  it('should test the dummyFunction', () => {
    component.dummyFunction('dummy message');
    expect(true).toBeTruthy();
  });

  afterAll(() => console.log('afterAll'));

});
