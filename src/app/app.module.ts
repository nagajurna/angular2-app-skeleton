import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }  from './components/app.component';
import { HomeComponent }  from './components/home/home.component';
import { AdminComponent }  from './components/admin/admin.component';
import { UsersComponent }  from './components/users/users.component';
import { AdminUserComponent }  from './components/admin-user/admin-user.component';
import { UserComponent }  from './components/user/user.component';
import { RegisterComponent }  from './components/register/register.component';
import { LoginComponent }  from './components/login/login.component';
import { ForgotPasswordComponent }  from './components/forgot-password/forgot-password.component';
import { ForgotPasswordMailSentComponent }  from './components/forgot-password-mail-sent/forgot-password-mail-sent.component';
import { PasswordResetComponent }  from './components/password-reset/password-reset.component';
import { UserProfileComponent }  from './components/user-profile/user-profile.component';
import { UserProfileEditComponent }  from './components/user-profile-edit/user-profile-edit.component';
import { UserPasswordEditComponent }  from './components/user-password-edit/user-password-edit.component';
import { UserPasswordChangedComponent }  from './components/user-password-changed/user-password-changed.component';

import { NavTransitionDirective }  from './directives/nav-transition/nav-transition.directive';

import { UserService } from './services/user.service';
import { AdminAuthService } from './services/admin-auth.service';
import { AuthService } from './services/auth.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent, AdminComponent, UsersComponent, AdminUserComponent, UserComponent, RegisterComponent, LoginComponent, ForgotPasswordComponent, ForgotPasswordMailSentComponent, PasswordResetComponent, UserProfileComponent, UserProfileEditComponent, UserPasswordEditComponent, UserPasswordChangedComponent, NavTransitionDirective ],
  providers: [ UserService, AdminAuthService, AuthService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
