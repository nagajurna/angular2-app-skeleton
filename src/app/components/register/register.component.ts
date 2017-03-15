import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'register',
	templateUrl: 'app/components/register/register.component.html',
	styleUrls: [ 'app/components/register/register.component.css' ]
})
export class RegisterComponent  { 
	@Output() onView = new EventEmitter<string>();
	@Output() onLogged = new EventEmitter<any>();
	error: any = {};
	response: any;
	
	constructor(private router: Router, private userService: UserService) {}
	
	change_view(v: string) {
		this.onView.emit(v)
	}
	
	onSubmit(f: NgForm) {
		this.userService
			.register(f.value)
			.then(response => {
				if(response.loggedIn===false) {
					this.error = response.error
				} else {
					this.onLogged.emit(response.loggedIn);
					this.router.navigate(['/users', response.user.id]);
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
