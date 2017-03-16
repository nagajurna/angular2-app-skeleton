import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { PasswordResetComponent }   from './components/password-reset/password-reset.component';

import { AuthService } from './services/auth.service';
import { AdminAuthService } from './services/admin-auth.service';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'users/:id',  component: UserComponent, canActivate: [AuthService] },
  { path: 'users/password_reset/:token/edit',  component: PasswordResetComponent },
  { path: '',  redirectTo: 'home', pathMatch: 'full'  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
