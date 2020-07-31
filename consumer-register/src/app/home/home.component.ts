import { AuthService } from 'services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  admin: any;

  constructor(private service: AuthService) {}

  ngOnInit(): void {
    this.admin = this.service.getCurrentUser();
    console.log(this.admin);
  }
}
