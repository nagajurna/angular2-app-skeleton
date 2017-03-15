import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'password-reset',
	templateUrl: 'app/components/password-reset/password-reset.component.html',
	styleUrls: [ 'app/components/password-reset/password-reset.component.css' ]
})
export class PasswordResetComponent { 
	error: any = {};
	private token: string;
	private email: string;
	
	constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {}
	
	onSubmit(f: NgForm): void {
		f.value.email = this.route.snapshot.queryParams['email'];
		f.value.token = this.route.snapshot.params['token'];
		this.userService
			.passwordResetEdit(f.value)
			.then(response => {
				if(response.reset===false) {
					this.error = response.error;
				} else {
					this.router.navigate(['']);
				}
			}, error => { 
				this.error = error; 
			});
	 }
	 
	clear_errors(name: string) {
		if(this.error.errors && this.error.errors[name]) {
			this.error.errors[name].message = '';
		}
		if(this.error.message) {
			this.error.message = '';
		}
	}
   
	
	
}
