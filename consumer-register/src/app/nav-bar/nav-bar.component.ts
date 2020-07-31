import { Component, OnInit } from '@angular/core';
import { AuthService } from 'services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  title = 'Eshop';
  admin: any;

  constructor(private service: AuthService, private route: Router) {}

  ngOnInit() {
    this.admin = this.service.getCurrentUser();
    console.log(this.admin);
  }

  logOut() {
    this.service.logout();
    this.route.navigate(['/home']);
  }
}
