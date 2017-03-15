import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthService implements CanActivate {

	constructor(private router: Router, private userService: UserService) {}
	
	canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
		return this.userService
        .getCurrentUser()
        .then(response => {
			let user = response.user
			if(user && user.id===route.params['id']) {
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
