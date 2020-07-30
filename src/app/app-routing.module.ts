import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamComponent } from './team/team.component';

import { UserTempletesComponent } from './user-templetes/user-templetes.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { NotfoundComponent } from './notfound/notfound.component';

import { EditComponent } from './edit/edit.component';
import { TemplatesComponent } from './templates/templates.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { Edittemplate1Component } from './edittemplate1/edittemplate1.component';
import { EditUserTempleteComponent } from './edit-user-templete/edit-user-templete.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userprofile/:userId', component: UserProfileComponent,canActivate:[AuthGuardService] },
  { path: 'signup', component: SignUpComponent },
  { path: 'edittemplate1', component: Edittemplate1Component },
  { path: 'team', component: TeamComponent },

  { path: 'changepassword/:userId', component: ChangePasswordComponent },

  { path: 'templates', component: TemplatesComponent },

  { path: 'usertemplets/:userId', component: UserTempletesComponent,canActivate:[AuthGuardService] },
  {path: 'edittemplete/:userId/:templeteId',component:EditUserTempleteComponent ,canActivate:[AuthGuardService]},
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'edit', component: EditComponent },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
