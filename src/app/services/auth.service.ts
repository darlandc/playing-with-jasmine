import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, share, shareReplay, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = 'https://api.github.com/';

  constructor(private http: HttpClient) {}

  getProducts() {
    const endpoint = 'users/darlandc/repos';
    return this.http.get<any>(this.API + endpoint)
      .pipe(
        shareReplay(1));
  }
}
