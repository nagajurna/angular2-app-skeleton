import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-profile-edit',
  templateUrl: 'app/components/user-profile-edit/user-profile-edit.component.html',
  styleUrls: [ 'app/components/user-profile-edit/user-profile-edit.component.css' ]
})
export class UserProfileEditComponent { 
	@Input() user: any;
	@Output() onView = new EventEmitter<string>();
	@Output() onUpdated = new EventEmitter<any>();
	error: any = {};
	
	constructor(private userService: UserService) {}
	
	change_view(v: string) {
		this.onView.emit(v)
	}
	
	onSubmit(f: NgForm): void {
		this.userService
			.update(f.value)
			.then(response => {
				if(response.updated===false) {
					this.error = response.error;
				} else {
					this.onUpdated.emit(response.updated);
					this.change_view('profile');
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
