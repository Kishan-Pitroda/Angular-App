import { AuthGuardService } from './../../services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ConsumerService } from './../../services/consumer.service';
import { AuthService } from './../../services/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { ConsumerDetailComponent } from './consumer-detail/consumer-detail.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterLinkRendererComponent } from './router-link-renderer/router-link-renderer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ConsumersComponent,
    ConsumerDetailComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    NavBarComponent,
    RouterLinkRendererComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    AgGridModule.withComponents([RouterLinkRendererComponent]),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'consumers/new',
        component: SignUpComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'consumers/:id',
        component: ConsumerDetailComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'consumers/edit/:id',
        component: SignUpComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'consumers/delete/:id',
        component: ConsumerDetailComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'consumers',
        component: ConsumersComponent,
        canActivate: [AuthGuardService],
      },
    ]),
  ],
  providers: [AuthService, AuthGuardService, ConsumerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
