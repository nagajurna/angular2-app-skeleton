import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/users/users.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { UserComponent } from './components/user/user.component';
import { PasswordResetComponent }   from './components/password-reset/password-reset.component';

import { AdminAuthService } from './services/admin-auth.service';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'admin',  component: AdminComponent, canActivate: [AdminAuthService] },
  { path: 'admin/users',  component: UsersComponent, canActivate: [AdminAuthService] },
  { path: 'admin/users/:id',  component: AdminUserComponent, canActivate: [AdminAuthService] },
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
