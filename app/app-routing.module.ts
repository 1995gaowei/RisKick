import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { HomeComponent }     from './components/home.component';
import { ProjectTableComponent} from './components/project-table.component';
import { RiskTableComponent} from './components/risk-table.component';
import { FollowupTableComponent}  from './components/followup-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/signIn', pathMatch: 'full' },
  { path: 'signIn', component: LoginComponent },
  { path: 'signUp',     component: RegisterComponent },
  { path: ':userName', component: ProjectTableComponent },
  { path: ':userName/:projectName', component: RiskTableComponent },
  { path: ':userName/:projectName/:riskId', component: FollowupTableComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
