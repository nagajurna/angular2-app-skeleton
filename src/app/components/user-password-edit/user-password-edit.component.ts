import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'user-password-edit',
	templateUrl: 'app/components/user-password-edit/user-password-edit.component.html',
	styleUrls: [ 'app/components/user-password-edit/user-password-edit.component.css' ]
})
export class UserPasswordEditComponent { 
	@Input() user: any;
	@Output() onView = new EventEmitter<string>();
	error: any = {};
	
	constructor(private userService: UserService) {}
	
	change_view(v: string) {
		this.onView.emit(v)
	}
	
	onSubmit(f: NgForm): void {
		this.userService
			.updatePassword(f.value)
			.then(response => {
				if(response.updated===false) {
					this.error = response.error;
				} else {
					this.change_view('passwordChanged');
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
