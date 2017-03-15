import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'user-password-changed',
  templateUrl: 'app/components/user-password-changed/user-password-changed.component.html',
  styleUrls: [ 'app/components/user-password-changed/user-password-changed.component.css' ]
})
export class UserPasswordChangedComponent { 
	@Output() onView = new EventEmitter<string>();
	
	constructor() {}
	
	change_view(v: string) {
		this.onView.emit(v)
	}
	
}
