import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  cache$: any;
  repositories = [];

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.cache$ = this.service.getProducts().subscribe((res) => {
      this.repositories = res;
    });

  }

  tap(){
    this.cache$.subscribe((res) => {
      this.repositories = res;
    });
  }

}
