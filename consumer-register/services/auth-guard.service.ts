import { AuthService } from 'services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private service: AuthService, private route: Router) {}

  canActivate() {
    if (this.service.getCurrentUser()) return true;
    this.route.navigate(['/login']);
  }
}
