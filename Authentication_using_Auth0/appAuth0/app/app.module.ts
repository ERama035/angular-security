import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRouteProviders } from './app.routes';
import { AppComponent }  from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Auth } from './services/app.service';
import { AuthGuard } from './app.guard';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    appRouteProviders,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard
  ]
})
export class AppModule { }
