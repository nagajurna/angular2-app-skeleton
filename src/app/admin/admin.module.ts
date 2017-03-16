import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminRoutingModule }     from './admin-routing.module';

import { AdminComponent }  from './components/admin/admin.component';
import { AdminHomeComponent }  from './components/admin-home/admin-home.component';
import { AdminUsersComponent }  from './components/admin-users/admin-users.component';
import { AdminUserComponent }  from './components/admin-user/admin-user.component';

import { UserService } from '../services/user.service';
import { AdminAuthService } from '../services/admin-auth.service';


@NgModule({
  imports:      [ CommonModule, AdminRoutingModule ],
  declarations: [ AdminComponent, AdminHomeComponent, AdminUsersComponent, AdminUserComponent ],
  providers: [ UserService, AdminAuthService]
})

export class AdminModule { }
