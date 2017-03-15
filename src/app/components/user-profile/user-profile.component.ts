import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'user-profile',
	templateUrl: 'app/components/user-profile/user-profile.component.html',
	styleUrls: [ 'app/components/user-profile/user-profile.component.css' ]
})
export class UserProfileComponent { 
	@Input() user: any;
	@Output() onView = new EventEmitter<string>();
	@Output() onLogged = new EventEmitter<any>();
	@Output() onClose = new EventEmitter<any>();
	error: any = {};
	
	constructor(private router: Router, private userService: UserService) {}
	
	change_view(v: string) {
		this.onView.emit(v)
	}
	
	logout() {
		this.userService
			.logout()
			.then(response => { 
				this.onLogged.emit(response.loggedIn);
				this.router.navigate(['']);
			}, error => {
				this.error = error;  
			});
	}
	
	close() {
		this.onClose.emit(false);
	}
	
	
}
