import { Consumer } from 'src/app/consumer';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(private router: Router, private authService: AuthService) {}

  logIn(value) {
    let result = this.authService.login(value.email, value.password);
    if (result) this.router.navigate(['/']);
    else this.invalidLogin = true;
  }
}
