import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';
// import { SignIn }                 from './sign-in';

import { UserService }   from './services/user.service';

import { AppComponent }  from './components/app.component';
import { LoginComponent }from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { HomeComponent }     from './components/home.component'

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(SignIn)
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ UserService ]
})

export class AppModule { }
