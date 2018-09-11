import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {LandingComponent} from './components/landing/landing.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {LogInComponent} from './components/log-in/log-in.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'log-in', component: LogInComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: '', component: LandingComponent},
      {path: '**', redirectTo: '/'}
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
