import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AdminAuthService implements CanActivate {

	constructor(private router: Router, private userService: UserService) {}
	
	canActivate(): Promise<boolean> {
		return this.userService
        .getCurrentUser()
        .then(response => {
			let user = response.user
			if(user && user.admin===true) {
				return true;
			} else {
				this.router.navigate(['']);
				return false;
			}
        }, error => { 
			this.router.navigate(['']);
			return false;
		});
	}
	
}
