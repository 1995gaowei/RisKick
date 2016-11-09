import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';
// import { SignIn }                 from './sign-in';

import { UserService }   from './services/user.service';
import { ProjectService } from './services/project.service';
import { RiskService }    from './services/risk.service';
import { FollowupService } from './services/followup.service';

import { AppComponent }  from './components/app.component';
import { LoginComponent }from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { HomeComponent }     from './components/home.component';
import { ProjectTableComponent} from './components/project-table.component';
import { RiskTableComponent} from './components/risk-table.component';
import { FollowupTableComponent}  from './components/followup-table.component';

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
    RegisterComponent,
    HomeComponent,
    ProjectTableComponent,
    RiskTableComponent,
    FollowupTableComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ UserService, ProjectService, RiskService, FollowupService ]
})

export class AppModule { }
