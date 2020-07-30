import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//using angular material
import { MatSidenavModule } from '@angular/material/sidenav';
//tooltip
/* import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu'; */

//

//owl-carousel
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
//end owl-carousel
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';

import { TeamComponent } from './team/team.component';
import { UserTempletesComponent } from './user-templetes/user-templetes.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { EditComponent } from './edit/edit.component';
import { TemplatesComponent } from './templates/templates.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { Edittemplate1Component } from './edittemplate1/edittemplate1.component';
import { EditUserTempleteComponent } from './edit-user-templete/edit-user-templete.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ResetPasswordComponent,

    HomeComponent,
    ContactComponent,
    NavbarComponent,

    UserProfileComponent,
    LoginComponent,

    SignUpComponent,
    ResetPasswordComponent,

    UserProfileComponent,
    LoginComponent,
    TeamComponent,
    UserTempletesComponent,

    UserTempletesComponent,

    NotfoundComponent,
    EditComponent,
    TemplatesComponent,

    ChangePasswordComponent,

    Edittemplate1Component,

    EditUserTempleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatSidenavModule,
    /*  MatTooltipModule,
    MatMenuModule, */
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
