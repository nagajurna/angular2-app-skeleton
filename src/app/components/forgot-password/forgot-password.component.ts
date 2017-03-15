import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'forgot-password',
  templateUrl: 'app/components/forgot-password/forgot-password.component.html',
  styleUrls: [ 'app/components/forgot-password/forgot-password.component.css' ]
})
export class ForgotPasswordComponent  { 
	@Output() onView = new EventEmitter<string>();
	error: any = {};
		  
	constructor(private router: Router, private userService: UserService) {}
	
	change_view(v: string): void {
		this.onView.emit(v)
	}
	
	onSubmit(f: NgForm): void {
		this.userService
			.passwordReset(f.value)
			.then(response => {
				if(response.emailSent===false) {
					this.error = response.error;
				} else {
					this.change_view('forgotPasswordMailSent');
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
