import { AppRoutingModule } from './app-routing.module';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let service: AppRoutingModule;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppRoutingModule,
      { provide: Router, useValue: Router},
      { provide: Location, useValue: Location }
      ]
    });
    service = TestBed.inject(AppRoutingModule);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(``, () => {
    expect(0).toEqual(0);
  });
});
